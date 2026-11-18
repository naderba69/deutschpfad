import { expect, test, type Page } from "@playwright/test";

/**
 * الجولة الخامسة عشرة — حراسات «ما تبقّى من AA».
 *
 * 2.4.2   عنوان الصفحة: موجود، واصف، وفريد بين المسارات.
 * 2.5.3   الاسم المرئي جزء من الاسم الميسور (الإدخال الصوتي ينطق ما يُرى).
 * 3.2.3   ترتيب روابط التنقل الرئيسي واحد في كل صفحة.
 * 2.3.1   لا وميض أكثر من ثلاث مرات في الثانية (يُقاس من البكسلات).
 * 2.1.4   لا `accesskey` بحرف واحد بلا مفتاح تعديل.
 * 3.2.1   التركيز لا ينقل الصفحة.
 * 3.2.2   تغيير قيمة قائمة لا ينقل الصفحة.
 */

/** الاسم الميسور كما يحسبه المستعرض لزر/رابط ذي تسمية صريحة. */
const LABEL_FN = `
  (el) => {
    const aria = el.getAttribute("aria-label");
    if (aria && aria.trim()) return aria;
    const by = el.getAttribute("aria-labelledby");
    if (by) {
      return by.split(/\\s+/).map((id) => document.getElementById(id)?.textContent || "").join(" ").trim();
    }
    return "";
  }
`;

const norm = (s: string) =>
  s
    .replace(/[\u064B-\u0652\u0670\u06D6-\u06ED]/g, "")
    .replace(/[\u200e\u200f\u061c]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

test.describe("2.4.2 — عنوان الصفحة فريد وواصف", () => {
  test("لا عنوانان متطابقان بين مسارات مختلفة", async ({ request }) => {
    const sitemap = await (await request.get("/sitemap.xml")).text();
    const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
      (m) => new URL(m[1]).pathname || "/",
    );
    /* مسارات التحويل لا ترد في sitemap؛ نضيفها صريحاً لاختبار استبعادها */
    const unique = [...new Set([...routes, "/review", "/tests/b2-simulation"])].filter(
      (r) => r && r !== "/",
    );
    /* التحويلات ترث عنوان هدفها؛ لا تُحتسب تكراراً */
    const titles = new Map<string, string[]>();
    const redirects = new Set<string>();
    for (const route of unique) {
      const res = await request.get(route, { maxRedirects: 0 });
      if (res.status() >= 300 && res.status() < 400) {
        redirects.add(route);
        continue;
      }
      const html = await res.text();
      const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1]?.trim() || "";
      expect(title, `عنوان فارغ في ${route}`).not.toBe("");
      titles.set(title, [...(titles.get(title) || []), route]);
    }
    const duplicates = [...titles.entries()].filter(([, rs]) => rs.length > 1);
    expect(duplicates, `عناوين مكررة: ${JSON.stringify(duplicates)}`).toEqual([]);
    expect(unique.length).toBeGreaterThan(150);
    expect([...redirects].sort()).toEqual(["/review", "/tests/b2-simulation"]);
  });
});

test.describe("2.5.3 — النص المرئي داخل الاسم الميسور", () => {
  for (const route of ["/verben", "/settings", "/dashboard", "/forms", "/glossar", "/tests/unit/a1-03"]) {
    test(`${route}: كل زر بنص مرئي يُنطق بما يظهر منه`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
      const bad = await page.evaluate((fnSrc) => {
        const nameOf = eval(fnSrc) as (el: Element) => string;
        const out: { visible: string; name: string }[] = [];
        for (const el of document.querySelectorAll("a[href],button,[role=button],[role=link]")) {
          const name = nameOf(el);
          if (!name) continue;
          const r = el.getBoundingClientRect();
          if (r.width < 2 || r.height < 2) continue;
          const visible = ((el as HTMLElement).innerText || "").trim();
          if (!/[\u0600-\u06FFA-Za-zÄÖÜäöüß]/.test(visible)) continue;
          const n = name
            .replace(/[\u064B-\u0652\u0670\u06D6-\u06ED]/g, "")
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();
          const v = visible
            .replace(/[\u064B-\u0652\u0670\u06D6-\u06ED]/g, "")
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();
          if (!n.includes(v)) out.push({ visible: visible.slice(0, 40), name: name.slice(0, 60) });
        }
        return out;
      }, LABEL_FN);
      expect(bad, `أزرار لا ينطق اسمها ما تراه في ${route}: ${JSON.stringify(bad)}`).toEqual([]);
    });
  }
});

test.describe("3.2.3 — اتساق التنقل", () => {
  test("ترتيب روابط التنقل الرئيسي نفسه في خمس صفحات", async ({ page }) => {
    const seq = async (route: string) => {
      await page.goto(route);
      await expect(page.locator("header nav").first()).toBeVisible({ timeout: 15_000 });
      return page.evaluate(() =>
        [...document.querySelectorAll("header nav a[href]")].map((a) => new URL((a as HTMLAnchorElement).href).pathname),
      );
    };
    const first = await seq("/");
    expect(first.length).toBeGreaterThan(0);
    for (const route of ["/about", "/glossar", "/settings", "/learning-path"]) {
      expect(await seq(route), `تنقل مختلف في ${route}`).toEqual(first);
    }
  });
});

test.describe("2.3.1 — لا وميض", () => {
  /** يقيس تغيّرات السطوع في مربّع عنصر على مدى ثانية من البكسلات المرسومة. */
  const transitions = async (page: Page, selector: string) => {
    const box = await page.locator(selector).boundingBox();
    if (!box) return 0;
    const clip = {
      x: Math.max(0, Math.round(box.x)),
      y: Math.max(0, Math.round(box.y)),
      width: Math.max(8, Math.round(box.width)),
      height: Math.max(8, Math.round(box.height)),
    };
    const lums: number[] = [];
    for (let i = 0; i < 14; i += 1) {
      const shot = await page.screenshot({ clip });
      lums.push(
        await page.evaluate(async (src) => {
          const img = new Image();
          img.src = src;
          await img.decode();
          const c = document.createElement("canvas");
          c.width = img.naturalWidth;
          c.height = img.naturalHeight;
          const ctx = c.getContext("2d");
          if (!ctx) return 0;
          ctx.drawImage(img, 0, 0);
          const { data } = ctx.getImageData(0, 0, c.width, c.height);
          let sum = 0;
          let n = 0;
          for (let k = 0; k < data.length; k += 16) {
            const f = (v: number) => {
              v /= 255;
              return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
            };
            sum += 0.2126 * f(data[k]) + 0.7152 * f(data[k + 1]) + 0.0722 * f(data[k + 2]);
            n += 1;
          }
          return n ? sum / n : 0;
        }, `data:image/png;base64,${shot.toString("base64")}`),
      );
      await page.waitForTimeout(70);
    }
    let count = 0;
    for (let k = 1; k < lums.length; k += 1) if (Math.abs(lums[k] - lums[k - 1]) >= 0.08) count += 1;
    return count;
  };

  test("الصفحة الرئيسية: لا عنصر يومض، والمقياس نفسه يكشف وميضاً محقوناً", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1").first()).toBeVisible({ timeout: 15_000 });
    /* ثلاث ومضات في الثانية تحتاج دورة أقصر من 333ms؛ والحركة اللانهائية
       يجب ألا تكون أسرع من ثانية. حركة دخول واحدة 700ms ليست وميضاً. */
    const risky = await page.evaluate(() =>
      document
        .getAnimations()
        .map((a) => {
          const t = a.effect?.getTiming?.() || {};
          return {
            name: (a as Animation & { animationName?: string; transitionProperty?: string }).animationName ||
              (a as Animation & { transitionProperty?: string }).transitionProperty ||
              "?",
            duration: Number(t.duration) || 0,
            infinite: t.iterations === Infinity,
          };
        })
        .filter((a) => a.duration > 0 && ((a.infinite && a.duration < 1000) || a.duration < 333)),
    );
    expect(risky, `حركات قد تومض: ${JSON.stringify(risky)}`).toEqual([]);

    /* تحكّم سلبي: عطل وميض 120ms يُرصد فعلاً بنفس الدالة */
    await page.evaluate(() => {
      const d = document.createElement("div");
      d.id = "__flash_probe";
      d.style.cssText = "position:fixed;top:0;left:0;width:80px;height:80px;z-index:9999";
      document.body.appendChild(d);
      d.animate([{ backgroundColor: "#000" }, { backgroundColor: "#fff" }], {
        duration: 120,
        iterations: Infinity,
        direction: "alternate",
      });
    });
    expect(await transitions(page, "#__flash_probe")).toBeGreaterThanOrEqual(3);
  });
});

test.describe("2.1.4 — لا اختصارات حرف واحد", () => {
  for (const route of ["/", "/settings", "/tests/unit/a1-03", "/lesson/a1-01"]) {
    test(`${route}: لا accesskey بحرف واحد`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
      const keys = await page.evaluate(() =>
        [...document.querySelectorAll("[accesskey]")]
          .map((el) => el.getAttribute("accesskey") || "")
          .filter((k) => [...k].length === 1),
      );
      expect(keys).toEqual([]);
    });
  }
});

test.describe("3.2.1 · 3.2.2 — لا تغيير سياق بلا طلب", () => {
  test("Tab عبر 15 محطة لا ينقل الصفحة", async ({ page }) => {
    await page.goto("/settings");
    await expect(page.locator("h1").first()).toBeVisible({ timeout: 15_000 });
    const url = page.url();
    for (let i = 0; i < 15; i += 1) {
      await page.keyboard.press("Tab");
      await page.waitForTimeout(50);
      expect(page.url(), `انتقال عند المحطة ${i + 1}`).toBe(url);
    }
  });

  test("تغيير قيمة قائمة لا ينقل الصفحة (مع إثبات أن الفحص يكشف النقل)", async ({ page }) => {
    await page.goto("/wortschatz-b2/top500");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    const url = page.url();
    const selects = page.locator("select:visible");
    const n = await selects.count();
    for (let i = 0; i < n; i += 1) {
      const select = selects.nth(i);
      const options = await select.locator("option").evaluateAll((os) =>
        (os as HTMLOptionElement[]).map((o) => o.value),
      );
      if (options.length < 2) continue;
      const current = await select.inputValue();
      const next = options.find((v) => v !== current);
      if (next === undefined) continue;
      await select.selectOption(next);
      await page.waitForTimeout(200);
      expect(page.url()).toBe(url);
      await select.selectOption(current);
    }

    /* تحكّم سلبي: قائمة تنقل عند التغيير — يجب أن يُكتشف ذلك بالمسار نفسه */
    await page.evaluate(() => {
      const s = document.createElement("select");
      s.id = "__ctx_probe";
      s.setAttribute("aria-label", "سياق");
      s.innerHTML = "<option>A</option><option>B</option>";
      /* حقن عطل مقصود لاختبار الحراسة نفسها */
      s.addEventListener("change", () => {
        // eslint-disable-next-line @next/next/no-location-assign-relative-destination
        window.location.href = "/about";
      });
      document.body.appendChild(s);
    });
    await page.selectOption("#__ctx_probe", "B");
    await page.waitForURL("**/about", { timeout: 10_000 });
    expect(new URL(page.url()).pathname).toBe("/about");
  });
});
