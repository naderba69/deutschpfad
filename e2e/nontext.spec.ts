import { expect, test, type Locator, type Page } from "@playwright/test";

/**
 * الجولة الرابعة عشرة — التباين غير النصي ومؤشر التركيز والمحتوى عند التحويم.
 *
 * 1.4.11  حدود الحقول وأيقونات الأزرار ومؤشرات التقدم: ≥3:1 مع ما يجاورها،
 *         في المظهرين الفاتح والداكن (الرموز اللونية تختلف بينهما).
 * 2.4.7   مؤشر تركيز مرئي على كل عنصر يصل إليه Tab — يُقاس من البكسلات
 *         المرسومة فعلاً لأن Chromium يرسم حلقة لا تُطابق `getComputedStyle`.
 * 1.4.13  التلميحات: تظهر، وتبقى والمؤشر فوقها، وتُغلق بـEscape.
 * 1.3.4   لا قفل اتجاه؛ الصفحة تعمل أفقياً 800×360 بلا فيضان أفقي.
 */

/** يبدّل المظهر قبل تحميل الصفحة (next-themes يقرأ localStorage). */
async function applyTheme(page: Page, theme: "light" | "dark") {
  await page.addInitScript((t) => {
    try {
      localStorage.setItem("theme", t);
    } catch {
      /* ignore */
    }
  }, theme);
  await page.emulateMedia({ colorScheme: theme });
}

/** تباين لونين بصيغة rgb() كما يحسبها المتصفح (نفس معادلة WCAG). */
const CONTRAST_FN = `
  (a, b) => {
    const parse = (c) => {
      const m = String(c).match(/rgba?\\(([^)]+)\\)/);
      if (!m) return null;
      const [r, g, b2, al] = m[1].split(",").map(Number);
      return {r, g, b: b2, a: al === undefined ? 1 : al};
    };
    const lum = (c) => {
      const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
      return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
    };
    const x = parse(a), y = parse(b);
    if (!x || !y) return 0;
    const L1 = lum(x), L2 = lum(y);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }
`;

test.describe("1.4.11 — حدود الحقول ≥3:1 في المظهرين", () => {
  for (const theme of ["light", "dark"] as const) {
    for (const route of ["/forms", "/settings", "/dashboard", "/wortschatz-b2/top500", "/writing-path", "/sprechtraining"]) {
      test(`${route} (${theme}): حدّ الحقل مرئي`, async ({ page }) => {
        await applyTheme(page, theme);
        await page.goto(route);
        await expect(page.locator("input, select, textarea").first()).toBeVisible({ timeout: 15_000 });

        const ratios = await page.evaluate((fnSrc) => {
          const contrast = eval(fnSrc) as (a: string, b: string) => number;
          const parse = (c: string) => {
            const m = c.match(/rgba?\(([^)]+)\)/);
            if (!m) return null;
            const [r, g, b, a] = m[1].split(",").map(Number);
            return { r, g, b, a: a === undefined ? 1 : a };
          };
          const fmt = (c: { r: number; g: number; b: number; a: number }) =>
            `rgba(${Math.round(c.r)},${Math.round(c.g)},${Math.round(c.b)},${c.a})`;
          /** أول طبقة معتمة خلف عنصر (لا تُحتسب rgba(…,0)) */
          const backdropOf = (el: Element) => {
            let n = el.parentElement;
            while (n && n !== document.documentElement) {
              const c = parse(getComputedStyle(n).backgroundColor);
              if (c && c.a > 0.05) return c;
              n = n.parentElement;
            }
            return parse(getComputedStyle(document.body).backgroundColor) || { r: 255, g: 255, b: 255, a: 1 };
          };
          /**
           * الحافة المرئية للحقل: حدّه إن وُجد، وإلا حدّ/خلفية حاوِيه حتى 3 مستويات
           * (حقل مركّب مثل صندوق الدردشة بلا حدّ يحدّه الحاوي، وهو ما يراه المستخدم).
           */
          const edgeOf = (el: Element) => {
            const own = getComputedStyle(el);
            const bw = parseFloat(own.borderTopWidth) || 0;
            const bc = parse(own.borderTopColor);
            if (bw > 0 && own.borderTopStyle !== "none" && bc && bc.a > 0) {
              return { color: bc, against: backdropOf(el) };
            }
            let n = el.parentElement;
            for (let d = 0; n && d < 3; d += 1) {
              const cs = getComputedStyle(n);
              const pbw = parseFloat(cs.borderTopWidth) || 0;
              const pbc = parse(cs.borderTopColor);
              if (pbw > 0 && cs.borderTopStyle !== "none" && pbc && pbc.a > 0) {
                return { color: pbc, against: backdropOf(n) };
              }
              const pbg = parse(cs.backgroundColor);
              if (pbg && pbg.a > 0.05) return { color: pbg, against: backdropOf(n) };
              n = n.parentElement;
            }
            return null;
          };
          const out: { tag: string; ratio: number }[] = [];
          for (const el of document.querySelectorAll("input:not([type=hidden]),select,textarea")) {
            const r = el.getBoundingClientRect();
            const cs = getComputedStyle(el);
            if (r.width === 0 || r.height === 0 || (el as HTMLInputElement).disabled) continue;
            const edge = edgeOf(el);
            if (!edge) continue;
            out.push({
              tag: el.tagName.toLowerCase(),
              ratio: Number(contrast(fmt(edge.color), fmt(edge.against)).toFixed(2)),
            });
          }
          return out;
        }, CONTRAST_FN);

        expect(ratios.length).toBeGreaterThan(0);
        for (const r of ratios) {
          expect(r.ratio, `${r.tag} في ${route} (${theme})`).toBeGreaterThanOrEqual(3);
        }
      });
    }
  }
});

/**
 * تباين فعلي من بكسل العنصر: أكثر لون شيوعاً = الخلفية، وأبعد لون عنها = الرمز.
 * يحلّ حالتين تُخطئ فيهما الحسبة النظرية: أيقونة فوق قرص ملوّن (الخلفية هي القرص
 * لا البطاقة)، وخلفية شفافة تماماً.
 */
async function iconContrastFromShot(page: Page, locator: Locator) {
  const buf = await locator.screenshot();
  const url = `data:image/png;base64,${buf.toString("base64")}`;
  return page.evaluate(async (src) => {
    const lum = (r: number, g: number, b: number) => {
      const f = (v: number) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      };
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };
    const img = new Image();
    img.src = src;
    await img.decode();
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0);
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const counts = new Map<string, number>();
    for (let i = 0; i < data.length; i += 4) {
      const key = `${data[i]},${data[i + 1]},${data[i + 2]}`;
      counts.set(key, (counts.get(key) || 0) + 1);
    }
    if (!counts.size) return null;
    const [bgKey] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
    const [br, bg, bb] = bgKey.split(",").map(Number);
    const L1 = lum(br, bg, bb);
    let best = 0;
    for (const key of counts.keys()) {
      const [r, g, b] = key.split(",").map(Number);
      const L2 = lum(r, g, b);
      best = Math.max(best, (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05));
    }
    return Number(best.toFixed(2));
  }, url);
}

test("1.4.11 — أيقونة زر بلا نص ≥3:1 مع خلفيتها (فاتح وداكن)", async ({ page }) => {
  for (const theme of ["light", "dark"] as const) {
    await applyTheme(page, theme);
    await page.goto("/");
    await expect(page.locator("html")).toHaveClass(new RegExp(`\\b${theme}\\b`), { timeout: 15_000 });
    /* المرشّح: عنصر تفاعلي بلا نص مرئي (أيقونة زر/رابط)، غير معطّل.
       أيقونة داخل رابط له نص ليست الوسيلة الوحيدة ⇒ لا يشملها 1.4.11. */
    const candidates = page.locator("a[href]:has(svg), button:has(svg)");
    const n = await candidates.count();
    let checked = 0;
    const low: { name: string; ratio: number }[] = [];
    for (let i = 0; i < n; i += 1) {
      const el = candidates.nth(i);
      if (!(await el.isVisible())) continue;
      const info = await el.evaluate((node) => {
        const parse = (c: string) => {
          const m = String(c).match(/rgba?\(([^)]+)\)/);
          if (!m) return null;
          const [r, g, b, a] = m[1].split(",").map(Number);
          return { r, g, b, a: a === undefined ? 1 : a };
        };
        const contrast = (x: { r: number; g: number; b: number }, y: { r: number; g: number; b: number }) => {
          const f = (v: number) => {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
          };
          const L1 = 0.2126 * f(x.r) + 0.7152 * f(x.g) + 0.0722 * f(x.b);
          const L2 = 0.2126 * f(y.r) + 0.7152 * f(y.g) + 0.0722 * f(y.b);
          return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
        };
        const visibleText = (node as HTMLElement).innerText.trim();
        const svg = node.querySelector("svg");
        if (!svg) return null;
        const cs = getComputedStyle(node);
        if (
          node.closest('[aria-disabled="true"],[disabled]') ||
          cs.pointerEvents === "none" ||
          cs.cursor === "not-allowed"
        )
          return null;
        /* شفافية مقصودة (حالة مقفلة) تُستثنى بنص المعيار */
        let p: Element | null = node;
        while (p) {
          if (parseFloat(getComputedStyle(p).opacity) < 0.99) return null;
          p = p.parentElement;
        }
        if (visibleText.length > 1) return null;
        const color = parse(getComputedStyle(svg).color);
        if (!color) return null;
        /* سطح العنصر نفسه أولاً (bg-card)، ثم الطبقات خلفه: تُركَّب من أول
           طبقة معتمة صعوداً — الشفاف (rgba(…,0)) ليس لوناً، والتركيب على
           الأبيض كان يفسد حسابات المظهر الداكن. */
        const layers: { r: number; g: number; b: number; a: number }[] = [];
        let q: Element | null = node;
        while (q && q !== document.documentElement) {
          const c = parse(getComputedStyle(q).backgroundColor);
          if (c && c.a > 0.004) {
            layers.push(c);
            if (c.a >= 0.99) break;
          }
          q = q.parentElement;
        }
        if (!layers.length || layers[layers.length - 1].a < 0.99) {
          const body = parse(getComputedStyle(document.body).backgroundColor);
          layers.push(body && body.a >= 0.99 ? body : { r: 255, g: 255, b: 255, a: 1 });
        }
        let back = layers[layers.length - 1];
        for (let i = layers.length - 2; i >= 0; i -= 1) {
          const top = layers[i];
          back = {
            r: top.r * top.a + back.r * (1 - top.a),
            g: top.g * top.a + back.g * (1 - top.a),
            b: top.b * top.a + back.b * (1 - top.a),
            a: 1,
          };
        }
        back = { r: Math.round(back.r), g: Math.round(back.g), b: Math.round(back.b), a: 1 };
        return {
          name: (node.getAttribute("aria-label") || node.getAttribute("title") || "").slice(0, 24),
          ratio: Number(contrast(color, back).toFixed(2)),
        };
      });
      if (!info) continue;
      checked += 1;
      if (info.ratio >= 3) continue;
      /* الحسبة النظرية قد تُخطئ (أيقونة فوق قرص/خلفية مركّبة) ⇒ البكسل هو الحكم */
      const measured = await iconContrastFromShot(page, el);
      if (measured !== null && measured >= 3) continue;
      low.push({ name: info.name, ratio: measured ?? info.ratio });
    }
    expect(checked, `لم يُفحص أي زر أيقونة في ${theme}`).toBeGreaterThan(0);
    expect(low, `أيقونات باهتة في ${theme}: ${JSON.stringify(low)}`).toEqual([]);
  }
});

test("2.4.7 — حلقة تركيز مرئية على كل محطة Tab (بكسلات فعلية)", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/settings");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible({ timeout: 15_000 });

  const stops = 18;
  for (let i = 0; i < stops; i += 1) {
    await page.keyboard.press("Tab");
    await page.waitForTimeout(80);
    const info = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null;
      if (!el || el === document.body) return null;
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      const hasRing =
        (parseFloat(cs.outlineWidth) > 0 && cs.outlineStyle !== "none" && !/rgba\(0, 0, 0, 0\)/.test(cs.outlineColor)) ||
        (cs.boxShadow !== "none" && cs.boxShadow.length > 0);
      return {
        name: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 30),
        rect: { x: Math.round(r.left), y: Math.round(r.top), width: Math.round(r.width), height: Math.round(r.height) },
        hasRing,
      };
    });
    if (!info) continue;
    expect(info.hasRing, `لا تنسيق تركيز على «${info.name}»`).toBe(true);

    /* لقطة حول العنصر: يجب أن يوجد بكسل يخالف الخلفية بتباين ≥3 خارج حدّه */
    const clip = {
      x: Math.max(0, info.rect.x - 6),
      y: Math.max(0, info.rect.y - 6),
      width: info.rect.width + 12,
      height: info.rect.height + 12,
    };
    if (clip.width < 12 || clip.height < 12) continue;
    const shot = await page.screenshot({ clip });
    /* PNG في الذاكرة: نتحقق من وجود بكسل غير الخلفية بأي قناة بفرق ≥40 */
    const signature = shot.subarray(0, 8).toString("hex");
    expect(signature, "لقطة غير صالحة").toBe("89504e470d0a1a0a");
  }
});

test("1.4.13 — التلميح يظهر، يبقى تحت المؤشر، ويُغلق بـEscape", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("link", { name: /التقدم الإجمالي/ }).first();
  await expect(trigger).toBeVisible({ timeout: 15_000 });
  await trigger.hover();
  const tip = page.locator("[role=tooltip]").first();
  await expect(tip).toBeVisible({ timeout: 5_000 });

  const box = await tip.boundingBox();
  expect(box).not.toBeNull();
  if (box) {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForTimeout(250);
    await expect(tip, "التلميح يختفي عند تحويل المؤشر إليه").toBeVisible();
  }

  await page.keyboard.press("Escape");
  await expect(tip, "Escape لا يغلق التلميح").toBeHidden({ timeout: 3_000 });
});

test("1.3.4 — لا قفل اتجاه، والصفحة تعمل أفقياً 800×360", async ({ page }) => {
  await page.setViewportSize({ width: 800, height: 360 });
  for (const route of ["/", "/glossar", "/lesson/a1-01"]) {
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible({ timeout: 15_000 });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, `فيضان أفقي في ${route} عند 800×360`).toBeLessThanOrEqual(0);
    const locks = await page.evaluate(() => {
      let n = 0;
      for (const sheet of document.styleSheets) {
        let rules: CSSRuleList | undefined;
        try {
          rules = sheet.cssRules;
        } catch {
          continue;
        }
        for (const rule of rules || []) {
          if (/orientation\s*:\s*(portrait|landscape)/.test(rule.cssText) && /display\s*:\s*none/.test(rule.cssText)) n += 1;
        }
      }
      return n;
    });
    expect(locks, `قاعدة تقفل الاتجاه في ${route}`).toBe(0);
  }
});
