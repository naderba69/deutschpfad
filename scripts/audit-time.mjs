/**
 * audit-time.mjs — الجولة الحادية عشرة: الوقت والتحديث التلقائي (WCAG 2.2.1 · 2.2.2 · 4.1.3).
 *
 * ثلاثة عيوب لا تُرى بالعين في تطبيق فيه امتحانات مؤقّتة:
 *  1. مؤقت `aria-live` يتغيّر كل ثانية ⇒ قارئ الشاشة يعلن «34:59، 34:58…»
 *     بدل أن يقرأ السؤال.
 *  2. حدّ زمني يبدأ فور تحميل الصفحة والمستخدم يقرأ المقدمة بلا إزر (2.2.1).
 *  3. عند انتهاء الوقت تُسلَّم الإجابات ويختفي المؤقت **بصمت** — لا يعرف
 *     المستخدم الكفيف أن وقته انتهى (4.1.3).
 *
 * الفحوص:
 *  W1) منطقة حيّة يتغيّر نصها خلال ≤1.4 ثانية (إعلان متكرر كل ثانية).
 *  W2) مؤقت `[role=timer]` بلا اسم ميسور، أو عدّاد نصّه محض «34:58» بلا اسم.
 *  W3) مؤقت يمضي تلقائياً دون تدخّل المستخدم (لم يُضغط أي زر/حقل).
 *  W4) عند الانتهاء (بتسريع العدّادات ×160): لا إعلان في منطقة حيّة.
 *  W5) حركة لا نهائية تبقى بعد `prefers-reduced-motion: reduce`.
 *  W6) مؤقت ≥ دقيقتين خارج صفحات الاختبار بلا زر إيقاف مؤقت/متابعة.
 *
 * صفحات الاختبار مستثناة من W6 فقط: الوقت فيها جزء من المحاكاة (استثناء
 * «essential» في 2.2.1) — لكنها ليست مستثناة من W1–W5 بحال.
 *
 * مقياس لا حكم: عدد المؤقتات، وأطول مؤقت، وعدد صفحات فيها زر «ابدأ المؤقت».
 *
 * الاستخدام: node scripts/audit-time.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_VERBOSE · AUDIT_VIEWPORT=360x800
 *           AUDIT_SKIP_EXPIRY=1
 *  AUDIT_FAULT=live     يعيد aria-live="polite" إلى كل مؤقت (لـW1)
 *  AUDIT_FAULT=noname   يزيل اسم المؤقت (لـW2)
 *  AUDIT_FAULT=auto     يبدأ العدّاد تلقائياً في الصفحات المقيّدة (لـW3)
 *  AUDIT_FAULT=silent   يزيل دور الإعلان من مناطق الحالة (لـW4)
 *  AUDIT_FAULT=motion   يضيف حركة لا نهائية لا تتوقف مع reduce (لـW5)
 *  AUDIT_FAULT=nopause  يزيل زر الإيقاف المؤقت (لـW6)
 *  AUDIT_FAULT=bare     يجعل العدّاد نصاً عارياً بلا دور ولا اسم (لـW2)
 */
import fs from "node:fs";
import {createRequire} from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/time.json";
const VERBOSE = Boolean(process.env.AUDIT_VERBOSE);
const FAULT = process.env.AUDIT_FAULT || "";
const SKIP_EXPIRY = process.env.AUDIT_SKIP_EXPIRY === "1";
const [VW, VH] = (process.env.AUDIT_VIEWPORT || "1280x900").split("x").map(Number);

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
function inspectTime() {
  const visible = (el) => {
    const cs = getComputedStyle(el);
    return cs.display !== "none" && cs.visibility !== "hidden" && el.getClientRects().length > 0;
  };
  const label = (el) =>
    `${el.tagName.toLowerCase()}${(el.getAttribute("class") || "").trim() ? "." + (el.getAttribute("class") || "").trim().split(/\s+/)[0] : ""}`;
  const nameOf = (el) =>
    (el.getAttribute("aria-label") || "").trim() ||
    (el.getAttribute("aria-labelledby") || "")
      .split(/\s+/)
      .map((id) => document.getElementById(id)?.textContent || "")
      .join(" ")
      .trim();

  const timers = [...document.querySelectorAll("[role='timer']")].filter(visible);

  /* W1 — مناطق حيّة تُحدَّث كل ثانية */
  const liveRegions = [...document.querySelectorAll("[aria-live],[role='status'],[role='alert']")].filter((el) => {
    const live = (el.getAttribute("aria-live") || "").toLowerCase();
    if (live === "off") return false;
    return visible(el) || el.classList.contains("sr-only");
  });

  /* W2 — مؤقت بلا اسم. الفحص لا يقف عند `[role=timer]`: عدّاد مرئي نصّه
     «⏱ 04:59» وحده (بلا دور وبلا اسم) يُقرأ رقماً بلا معنى أيضاً. لذلك
     نلتقط أي عنصر نصّه محض mm:ss ولا اسم له ولا سلف مسمّى. */
  const unnamedTimers = timers.filter((t) => !nameOf(t)).map((t) => `«${(t.textContent || "").trim().slice(0, 10)}»`);

  const bareCountdowns = [...document.querySelectorAll("main span, main p, main div, main time, main strong")]
    .filter((el) => {
      if (el.closest("[role='timer']")) return false;
      /* خيار إجابة نصّه «7:30» (سؤال عن مواعيد القطارات مثلاً) ليس عدّاداً:
         اسم الزر/الراديو يحتوي النص أصلاً. */
      if (el.closest("button,a,label,summary,[role='radio'],[role='checkbox'],[role='option'],[role='tab']"))
        return false;
      if (!visible(el)) return false;
      if (nameOf(el)) return false;
      const txt = (el.textContent || "").trim();
      if (!/^(⏱\s*)?\d{1,3}:\d{2}$/.test(txt)) return false;
      /* العنصر الحاوي يُكرّر نصّ ابنه — نُبقي الأعمق فقط */
      if (el.querySelector("span,time,strong")?.textContent?.trim() === txt) return false;
      return true;
    })
    .map((el) => `«${(el.textContent || "").trim()}»`);

  /* W6 — مؤقت طويل بلا إيقاف (خارج الاختبارات) */
  const pauseButton = [...document.querySelectorAll("button,[role='button']")].find((b) =>
    /إيقاف مؤقت|متابعة الكبسولة|متابعة الجلسة|إيقاف الجلسة|إعادة البدء/.test((b.textContent || "").trim()),
  );

  return {
    timerCount: timers.length,
    timerTexts: timers.map((t) => (t.textContent || "").replace(/\s+/g, " ").trim().slice(0, 12)),
    liveCount: liveRegions.length,
    liveSnapshot: liveRegions.map((el) => (el.textContent || "").replace(/\s+/g, " ").trim()),
    unnamedTimers,
    bareCountdowns,
    hasPause: Boolean(pauseButton),
    startButton: Boolean(
      [...document.querySelectorAll("button")].some((b) => /ابدأ المؤقت|ابدأ الاختبار/.test((b.textContent || ""))),
    ),
    label,
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
  const record = {route, issues: [], timerCount: 0, expiryChecked: false};
  try {
    /* تسريع العدّادات — لكن بعد القياس الأول، لا قبله. حقن السرعة من أول
       الصفحة كان يجعل مؤقت الخمس دقائق يصل إلى الصفر قبل أن نقرأه، فيضيع
       فحص «مؤقت طويل بلا إيقاف» (W6). الساعة تُقرأ طبيعية، ثم يُفتح الصمام. */
    if (!SKIP_EXPIRY) {
      await page.evaluateOnNewDocument(() => {
        const original = window.setInterval.bind(window);
        window.__AUDIT_ACCEL = false;
        window.setInterval = (fn, ms, ...args) => {
          if (ms !== 1000) return original(fn, ms, ...args);
          let id;
          const tick = () => {
            fn(...args);
            id = window.setTimeout(tick, window.__AUDIT_ACCEL ? 3 : 1000);
          };
          id = window.setTimeout(tick, 1000);
          return id;
        };
        const originalClear = window.clearInterval.bind(window);
        window.clearInterval = (id) => {
          clearTimeout(id);
          originalClear(id);
        };
      });
    }

    await page.goto(BASE + route, {waitUntil: "networkidle2", timeout: 45000});
    await new Promise((r) => setTimeout(r, 400));

    const first = await page.evaluate(inspectTime);
    record.timerCount = first.timerCount;
    record.liveCount = first.liveCount;


    if (FAULT === "noname") {
      await page.evaluate(() => document.querySelectorAll("[role='timer']").forEach((t) => t.removeAttribute("aria-label")));
    }
    if (FAULT === "live") {
      await page.evaluate(() =>
        document.querySelectorAll("[role='timer']").forEach((t) => t.setAttribute("aria-live", "polite")),
      );
    }
    if (FAULT === "silent") {
      /* إزالة لمرة واحدة لا تكفي: الانتقال إلى قسم جديد يعيد تركيب الشريط
         فتعود السمات. المراقب يُزيلها من كل عقدة تُضاف أو تتغيّر — وهو ما
         يفعله مكوّن ينسى الإعلان أصلاً. */
      await page.evaluate(() => {
        const strip = () => {
          document.querySelectorAll("[role='status'],[role='alert']").forEach((el) => {
            el.removeAttribute("role");
            el.removeAttribute("aria-live");
            el.setAttribute("data-fault-silent", "1");
          });
        };
        strip();
        new MutationObserver(strip).observe(document.body, {
          subtree: true,
          childList: true,
          attributes: true,
          attributeFilter: ["role", "aria-live"],
        });
      });
    }
    if (FAULT === "bare") {
      await page.evaluate(() =>
        document.querySelectorAll("[role='timer']").forEach((t) => {
          t.removeAttribute("role");
          t.removeAttribute("aria-label");
          t.removeAttribute("aria-labelledby");
        }),
      );
    }
    if (FAULT === "motion") {
      /* القاعدة العامة في globals.css تُوقف كل حركة تحت reduce بـ!important،
         فحقن قاعدة عادية لا يُنتج عيباً. نستخدم !important سطرياً — كما يفعل
         مكوّن ينسى احترام التفضيل. */
      await page.evaluate(() => {
        const style = document.createElement("style");
        style.textContent = "@keyframes __faultspin{to{transform:rotate(360deg)}}";
        document.head.appendChild(style);
        const el = document.createElement("div");
        el.id = "__motion_fault";
        el.setAttribute("aria-hidden", "true");
        el.style.setProperty("animation-name", "__faultspin", "important");
        el.style.setProperty("animation-duration", "1s", "important");
        el.style.setProperty("animation-iteration-count", "infinite", "important");
        document.body.appendChild(el);
      });
    }
    if (FAULT === "nopause") {
      await page.evaluate(() =>
        [...document.querySelectorAll("button")].forEach((b) => {
          if (/إيقاف مؤقت|متابعة الكبسولة|متابعة الجلسة/.test(b.textContent || "")) b.remove();
        }),
      );
    }

    /* بعد الحقن نعيد القياس: الاعتماد على قياس ما قبل الحقن كان يجعل
       التحكّم السلبي يمرّ بلا اكتشاف (W2 وW6). */
    const probe = FAULT ? await page.evaluate(inspectTime) : first;

    /* W1 — تغيّر نص المنطقة الحيّة خلال 1.4 ثانية */
    if (probe.liveCount) {
      await new Promise((r) => setTimeout(r, 1400));
      const second = await page.evaluate(inspectTime);
      const changed = [];
      probe.liveSnapshot.forEach((txt, i) => {
        const next = second.liveSnapshot[i];
        if (next !== undefined && next !== txt && /\d/.test(next) && /\d/.test(txt) && next.length < 40) {
          changed.push(`«${txt || "(فارغ)"}» → «${next}»`);
        }
      });
      if (changed.length) record.issues.push(`W1 منطقة حيّة تتغيّر كل ثانية: ${changed.slice(0, 3).join(" | ")}`);
    }

    /* W2 */
    if (probe.unnamedTimers.length) {
      record.issues.push(`W2 مؤقت بلا اسم: ${probe.unnamedTimers.slice(0, 3).join(" | ")}`);
    }
    if (probe.bareCountdowns.length) {
      record.issues.push(`W2 عدّاد رقمي بلا اسم: ${probe.bareCountdowns.slice(0, 3).join(" | ")}`);
    }

    /* W3 — مؤقت يمضي دون تدخّل. الحقن يحاكي العيب القديم: العدّاد انطلق
       وحده وكأن أحداً ضغط «ابدأ» عند التحميل. */
    if (FAULT === "auto" && first.startButton) {
      const start = await page.$("::-p-text(ابدأ المؤقت)");
      if (start) {
        try {
          await start.click();
        } catch {
          /* لا شيء */
        }
      }
    }
    /* يُفحص أيضاً المؤقت الذي يمضي بلا زر بدء ولا إيقاف (لا سيطرة للمستخدم
       على الحدّ الزمني إطلاقاً). الصفحات التي توفّر إيقافاً مؤقتاً تُعدّ
       مسيطراً عليها — القرار موثَّق في التقرير لا مخفيّ في الكود. */
    if (first.timerCount && (first.startButton || !probe.hasPause || FAULT === "auto")) {
      const a = await page.evaluate(() => document.querySelector("[role='timer']")?.textContent?.trim() || "");
      await new Promise((r) => setTimeout(r, 2500));
      const b = await page.evaluate(() => document.querySelector("[role='timer']")?.textContent?.trim() || "");
      if (a && b && a !== b) {
        record.issues.push(
          `W3 المؤقت يمضي بلا تدخّل المستخدم ولا زر بدء/إيقاف: «${a}» → «${b}»`,
        );
      }
    }

    /* W5 — حركة لا نهائية بعد reduce */
    record.motionBefore = await page.evaluate(() => {
      const count = () =>
        [...document.querySelectorAll("main *, header *, footer *")].filter((e) => {
          const cs = getComputedStyle(e);
          return cs.animationIterationCount === "infinite" && cs.animationName !== "none";
        }).length;
      return count();
    });
    await page.emulateMediaFeatures([{name: "prefers-reduced-motion", value: "reduce"}]);
    await new Promise((r) => setTimeout(r, 250));
    const afterMotion = await page.evaluate(() => {
      return [...document.querySelectorAll("main *, header *, footer *, #__motion_fault")].filter((e) => {
        const cs = getComputedStyle(e);
        return cs.animationIterationCount === "infinite" && cs.animationName !== "none";
      }).length;
    });
    record.motionUnderReduce = afterMotion;
    record.viewport = `${VW}x${VH}`;
    if (afterMotion > 0) {
      record.issues.push(`W5 حركة لا نهائية لا تتوقف مع prefers-reduced-motion: ${afterMotion}`);
    }
    await page.emulateMediaFeatures([{name: "prefers-reduced-motion", value: "no-preference"}]);

    /* W6 — مؤقت طويل خارج الاختبارات بلا إيقاف */
    if (first.timerCount && !route.startsWith("/tests")) {
      /* المدة تُقرأ من القياس الأول قبل التسريع: مع ×333 يكون مؤقت الخمس
         دقائق قد وصل إلى الصفر قبل القياس التالي، فيضيع العيب. */
      const seconds = (() => {
        const m = /(\d+):(\d\d)/.exec(first.timerTexts[0] || "");
        return m ? Number(m[1]) * 60 + Number(m[2]) : 0;
      })();
      if (seconds >= 120 && !probe.hasPause) {
        record.issues.push(`W6 مؤقت طويل (${first.timerTexts[0]}) بلا إيقاف مؤقت`);
      }
    }

    /* صفحات كثيرة (الامتحانات الكاملة) لا تُظهر المؤقت إلا بعد «ابدأ».
       نتجاوز التوقّف عند المقدمة ثم نعيد القياس، وإلا بقي 40 مساراً بلا فحص. */
    let startedProbe = probe;
    let startedBy = null;
    if (!probe.timerCount) {
      /* لا نضغط كل زر يبدأ بـ«ابدأ»: «ابدأ رحلتك» ينقل إلى مسار آخر فيُقاس
         مسار غير المطلوب. نضغط فقط أزرار بدء الاختبار/المؤقت/التدريب/التحدي. */
      startedBy = await page.evaluate(() => {
        const btn = [...document.querySelectorAll("button")].find((el) =>
          /^ابدأ (الامتحان|الاختبار|المؤقت|التدريب|التحدي|المحاكاة|الجلسة)/.test(
            (el.textContent || "").replace(/\s+/g, " ").trim(),
          ),
        );
        if (!btn) return null;
        btn.click();
        return (btn.textContent || "").replace(/\s+/g, " ").trim();
      });
      if (startedBy) {
        await new Promise((r) => setTimeout(r, 1600));
        startedProbe = await page.evaluate(inspectTime);
        record.startedBy = startedBy;
        const nameless = [...startedProbe.unnamedTimers, ...startedProbe.bareCountdowns];
        if (startedProbe.timerCount && nameless.length) {
          record.issues.push(`W2 عدّاد بلا اسم بعد بدء الاختبار: ${nameless.slice(0, 3).join(" | ")}`);
        }
        if (startedProbe.timerCount && !startedProbe.hasPause && startedProbe.timerCount) {
          record.autoStarted = true;
        }
      }
    }
    record.timerCount = Math.max(record.timerCount, startedProbe.timerCount);

    /* نصّ «انتهى» بأي صيغة عربية شائعة في هذا المستودع. «انتهاء» وحدها
       (كما في «بقيت 5 دقائق على انتهاء الوقت») ليست إعلاناً بالانتهاء. */
    const looksExpired = (txt) =>
      /انتهى|انتهت|سُلِّم|سلم الاختبار|انتقلنا إلى القسم/.test(txt || "");

    /* W4 — انتهاء المهلة بلا إعلان (بتسريع العدّاد) */
    if (!SKIP_EXPIRY && startedProbe.timerCount) {
      /* التسريع يُفتح هنا فقط: لو فُتح قبل «ابدأ التحدي» لانتهى مؤقت العشرين
         ثانية قبل أن نراه، فيضيع المؤقت من العدّ. */
      await page.evaluate(() => {
        window.__AUDIT_ACCEL = true;
      });
      record.expiryChecked = true;
      const startBtn = !startedBy && first.startButton
        ? await page.$("::-p-text(ابدأ المؤقت)")
        : null;
      if (startBtn) {
        try {
          await startBtn.click();
        } catch {
          /* الزر اختفى — نتجاهل */
        }
      }
      const initialSeconds = (() => {
        const m = /(\d+):(\d\d)/.exec(startedProbe.timerTexts[0] || "");
        return m ? Number(m[1]) * 60 + Number(m[2]) : null;
      })();

      /* عدّاد قصير (5 دقائق) يصل إلى الصفر قبل أول عيّنة حين يكون التسريع
         شديداً. لا نتظاهر بأننا رأينا الانتقال: نتحقق من وجود إعلان انتهاء
         في الصفحة التي وصل مؤقتها إلى الصفر أصلاً. */
      if (initialSeconds === 0) {
        const announced = startedProbe.liveSnapshot.some(looksExpired);
        record.expiryChecked = true;
        record.expirySeenAs = "zero-at-load";
        if (!announced) {
          record.issues.push("W4 المؤقت بلغ الصفر بلا إعلان في منطقة حيّة");
        }
        if (VERBOSE) console.log(`  [expiry] ${route} zero-at-load announced=${announced}`);
      } else {
      const beforeTexts = new Set(startedProbe.liveSnapshot);
      let sawEnd = false;
      /* نبدأ من قيمة القياس الأولى: بسرعة ×333 قد يصل العدّاد القصير (5 دقائق)
         إلى الصفر قبل أول عيّنة، فيبدو كأنه لم يمضِ قط. */
      let prevSeconds = (() => {
        const m = /(\d+):(\d\d)/.exec(startedProbe.timerTexts[0] || "");
        return m ? Number(m[1]) * 60 + Number(m[2]) : null;
      })();
      for (let i = 0; i < 120; i += 1) {
        await new Promise((r) => setTimeout(r, 250));
        const state = await page.evaluate(() => {
          const t = document.querySelector("[role='timer']");
          return {
            text: t ? (t.textContent || "").trim() : null,
            alerts: [...document.querySelectorAll("[aria-live],[role='status'],[role='alert']")]
              .map((el) => (el.textContent || "").replace(/\s+/g, " ").trim())
              .filter(Boolean),
          };
        });
        const secondsOf = (txt) => {
          const m = /(\d+):(\d\d)/.exec(txt || "");
          return m ? Number(m[1]) * 60 + Number(m[2]) : null;
        };
        const nowSeconds = secondsOf(state.text);
        /* «⏱ 00:00» لا يطابق /^00:00$/ — لذلك يُحسب الانتهاء من الثواني
           المستخرجة، وبشرط أن يكون العدّاد قد مضى فعلاً (لا أن يبدأ صفراً
           لأنه موقوف). */
        const ended = state.text === null || (nowSeconds === 0 && (prevSeconds ?? 0) > 0);
        /* «انتقال» = عاد العدّاد إلى قيمة أكبر بكثير (قسم جديد بدأ) — لا مجرد
           بقائه فوق الدقيقة، وإلا اتُّهم كل مؤقت طويل ظلماً. */
        const advanced =
          nowSeconds !== null && prevSeconds !== null && nowSeconds > prevSeconds + 20;
        if (nowSeconds !== null) prevSeconds = nowSeconds;
        if (ended || advanced) {
          sawEnd = true;
          await new Promise((r) => setTimeout(r, 1800));
          const after = await page.evaluate(() =>
            [...document.querySelectorAll("[aria-live],[role='status'],[role='alert']")]
              .map((el) => (el.textContent || "").replace(/\s+/g, " ").trim())
              .filter(Boolean),
          );
          /* لا يكفي أي ذكر لكلمة «الوقت»: إعلان العتبة («بقيت 5 دقائق على
             انتهاء الوقت») يظهر قبل الانتهاء ويُخفي العيب. نص الانتهاء تحديداً. */
          const announced = after.some(
            (txt) =>
              !beforeTexts.has(txt) && looksExpired(txt),
          );
          if (!announced) {
            record.issues.push(
              ended
                ? "W4 انتهى الوقت بلا إعلان في منطقة حيّة (تسليم صامت)"
                : "W4 انتقال تلقائي للقسم التالي بلا إعلان",
            );
          }
          break;
        }
      }
      if (VERBOSE) console.log(`  [expiry] ${route} sawEnd=${sawEnd} seed=${prevSeconds}`);
      if (!sawEnd) record.expiryChecked = false;
      }
    }
  } catch (err) {
    record.issues.push(`تعذّر الفحص: ${err.message.split("\n")[0]}`);
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
const timers = out.filter((r) => r.timerCount);

console.log(`PAGES ${out.length} WITH_ISSUES ${withIssues.length}`);
console.log(
  `PAGES_WITH_TIMER ${timers.length} EXPIRY_CHECKED ${out.filter((r) => r.expiryChecked).length}`,
);
if (withIssues.length) {
  for (const r of withIssues.slice(0, 12)) console.log(`${r.route} | ${r.issues.join(" ; ")}`);
}
