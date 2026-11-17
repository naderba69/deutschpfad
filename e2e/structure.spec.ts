import { expect, test, type Page } from "@playwright/test";

/**
 * الجولة الثالثة عشرة — الدلالة البنيوية والاسم والوصف.
 *
 * الأدوات الآلية (`scripts/audit-structure.mjs`) تمسح 189 مساراً؛ هذه الحراسة
 * تثبت أن الخصائص المقيسة تبقى قائمة بعد أي تعديل، على صفحات تمثّل أنماط
 * الواجهة كلها: الرئيسية، قاموس، درس خطوة بخطوة، إعدادات، نموذج رسمي،
 * امتحان، لوحة تحكم، صفحة تقييم كتابة.
 *
 * 1.3.1 / 2.4.6  خريطة عناوين سليمة: h1 واحد، بلا قفز مستوى.
 * 2.4.4 / 4.1.2  كل رابط/زر له اسم ميسور.
 * 2.4.6          معالم متكررة مميَّزة بأسماء، والاسم غير مكرر.
 * 1.3.1 / 4.1.1  لا `id` مكرر (يكسر label[for] وaria-labelledby).
 * 4.1.2          لا عناصر تفاعلية متداخلة، ولا إشارات ARIA معلّقة.
 */

const PAGES = [
  "/",
  "/glossar",
  "/lesson/a1-01",
  "/settings",
  "/forms",
  "/tests/a1-exam",
  "/dashboard",
  "/schreib-bewertung",
];

/** الاسم الميسور كما يحسبه المتصفح فعلياً — يُعيد قائمة العناصر بلا اسم. */
async function unnamedControls(page: Page) {
  return page.evaluate(() => {
    const norm = (s: string | null | undefined) => (s || "").replace(/\s+/g, " ").trim();
    const name = (el: Element) => {
      const lb = el.getAttribute("aria-labelledby");
      if (lb) {
        const t = lb
          .split(/\s+/)
          .map((id) => norm(document.getElementById(id)?.textContent))
          .join(" ")
          .trim();
        if (t) return t;
      }
      const aria = norm(el.getAttribute("aria-label"));
      if (aria) return aria;
      if (["INPUT", "SELECT", "TEXTAREA"].includes(el.tagName)) {
        const lab =
          (el.id && document.querySelector(`label[for='${CSS.escape(el.id)}']`)) ||
          el.closest("label");
        const lt = lab ? norm(lab.textContent) : "";
        if (lt) return lt;
      }
      const clone = el.cloneNode(true) as Element;
      clone.querySelectorAll("[aria-hidden='true'], [hidden], .sr-only").forEach((n) => n.remove());
      return norm(clone.textContent);
    };
    const sel =
      "a[href],button,[role=button],[role=link],input:not([type=hidden]),select,textarea,summary";
    const out: { tag: string; cls: string }[] = [];
    for (const el of document.querySelectorAll(sel)) {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      if (cs.display === "none" || cs.visibility === "hidden" || r.width === 0) continue;
      if (el.closest("[hidden], [aria-hidden='true']")) continue;
      if (el.tagName === "INPUT" && ["submit", "button", "reset"].includes((el as HTMLInputElement).type))
        continue;
      if (!name(el)) out.push({ tag: el.tagName.toLowerCase(), cls: (el.className || "").toString().slice(0, 60) });
    }
    return out;
  });
}

test.describe("1.3.1 / 2.4.6 — خريطة العناوين", () => {
  for (const route of PAGES) {
    test(`عنوان واحد h1 وبلا قفز مستوى في ${route}`, async ({ page }) => {
      await page.goto(route);
      await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible({ timeout: 15_000 });
      const outline = await page.evaluate(() => {
        const hs = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].filter((h) => {
          const r = h.getBoundingClientRect();
          return r.width > 0 && r.height > 0 && !h.closest("[hidden]");
        });
        return hs.map((h) => Number(h.tagName[1]));
      });
      expect(outline.length).toBeGreaterThan(0);
      expect(outline.filter((l) => l === 1).length, "عدد عناوين h1").toBe(1);
      for (let i = 1; i < outline.length; i += 1) {
        expect(
          outline[i] - outline[i - 1],
          `تدرّج العناوين: ${outline.join(" → ")}`,
        ).toBeLessThanOrEqual(1);
      }
    });
  }
});

test.describe("2.4.4 / 4.1.2 — اسم ميسور لكل عنصر تفاعلي", () => {
  for (const route of ["/", "/glossar", "/settings", "/forms", "/lesson/a1-01"]) {
    test(`كل رابط وزر في ${route} له اسم`, async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState("networkidle");
      const missing = await unnamedControls(page);
      expect(missing, `عناصر بلا اسم: ${JSON.stringify(missing)}`).toEqual([]);
    });
  }
});

test.describe("2.4.6 — معالم المساعدة والتنقل", () => {
  for (const route of ["/", "/settings", "/tests/a1-exam", "/lesson/a1-01"]) {
    test(`معالم ${route} مسماة وغير متطابقة`, async ({ page }) => {
      await page.goto(route);
      const landmarks = await page.evaluate(() => {
        const out: { type: string; name: string }[] = [];
        for (const el of document.querySelectorAll("nav, aside, form, table")) {
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) continue;
          const name =
            (el.getAttribute("aria-label") || "").trim() ||
            (el.getAttribute("aria-labelledby") || "").trim() ||
            (el.querySelector(":scope > caption")?.textContent || "").trim();
          out.push({ type: el.tagName.toLowerCase(), name });
        }
        return out;
      });
      const byType = new Map<string, string[]>();
      for (const l of landmarks) {
        if (!byType.has(l.type)) byType.set(l.type, []);
        byType.get(l.type)!.push(l.name);
      }
      for (const [type, names] of byType) {
        if (names.length < 2) continue;
        expect(names.filter(Boolean).length, `كل <${type}> يحتاج اسماً عند تكراره`).toBe(names.length);
        expect(new Set(names).size, `أسماء <${type}> مكررة: ${names.join(" | ")}`).toBe(names.length);
      }
    });
  }
});

test("1.3.1 / 4.1.1 — لا id مكرر، حتى بعد فتح كل الإفصاحات", async ({ page }) => {
  for (const route of PAGES) {
    await page.goto(route);
    await page.evaluate(() => document.querySelectorAll("details").forEach((d) => ((d as HTMLDetailsElement).open = true)));
    const dups = await page.evaluate(() => {
      const seen = new Map<string, number>();
      for (const el of document.querySelectorAll("[id]")) seen.set(el.id, (seen.get(el.id) || 0) + 1);
      return [...seen.entries()].filter(([, n]) => n > 1).map(([id, n]) => `${id}×${n}`);
    });
    expect(dups, `id مكرر في ${route}`).toEqual([]);
  }
});

test("4.1.2 — لا تفاعلي متداخل ولا إشارة ARIA معلّقة", async ({ page }) => {
  for (const route of PAGES) {
    await page.goto(route);
    const problems = await page.evaluate(() => {
      const sel = "a[href],button,[role=button],[role=link],input,select,textarea";
      const nested: string[] = [];
      for (const el of document.querySelectorAll(sel)) {
        const outer = el.parentElement?.closest(sel);
        if (outer) nested.push(`${el.tagName.toLowerCase()} داخل ${outer.tagName.toLowerCase()}`);
      }
      const dangling: string[] = [];
      for (const attr of ["aria-labelledby", "aria-describedby", "aria-controls"]) {
        for (const el of document.querySelectorAll(`[${attr}]`)) {
          const missing = (el.getAttribute(attr) || "")
            .split(/\s+/)
            .filter(Boolean)
            .filter((id) => !document.getElementById(id));
          if (missing.length) dangling.push(`${attr}→${missing.join(",")}`);
        }
      }
      return { nested, dangling };
    });
    expect(problems.nested, `تفاعلي متداخل في ${route}`).toEqual([]);
    expect(problems.dangling, `إشارة ARIA معلّقة في ${route}`).toEqual([]);
  }
});

test("تحكّم سلبي — الحراسة تكشف عيباً محقوناً (لا تمرّ عليه)", async ({ page }) => {
  await page.goto("/about");
  await page.evaluate(() => {
    const main = document.querySelector("main")!;
    const empty = document.createElement("button");
    empty.type = "button";
    empty.innerHTML = '<span aria-hidden="true">✕</span>';
    main.appendChild(empty);

    const jump = document.createElement("h5");
    jump.textContent = "مستوى مخفي";
    main.appendChild(jump);

    const firstId = document.querySelector("[id]")!.id;
    const dup = document.createElement("div");
    dup.id = firstId;
    main.appendChild(dup);

    const link = document.createElement("a");
    link.href = "/about";
    const inner = document.createElement("button");
    inner.type = "button";
    inner.textContent = "داخلي";
    link.appendChild(inner);
    main.appendChild(link);

    const dangling = document.createElement("div");
    dangling.setAttribute("role", "group");
    dangling.setAttribute("aria-labelledby", "__missing");
    main.appendChild(dangling);
  });

  const missing = await unnamedControls(page);
  expect(missing.length, "الزر بلا اسم لم يُكتشف").toBeGreaterThan(0);

  const found = await page.evaluate(() => {
    const hs = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => Number(h.tagName[1]));
    const jump = hs.some((l, i) => i > 0 && l - hs[i - 1] > 1);
    const ids = new Map<string, number>();
    for (const el of document.querySelectorAll("[id]")) ids.set(el.id, (ids.get(el.id) || 0) + 1);
    const dup = [...ids.values()].some((n) => n > 1);
    const nested = Boolean(document.querySelector("a button, button a, a a, button button"));
    const dangling = Boolean(document.querySelector("[aria-labelledby='__missing']"));
    return { jump, dup, nested, dangling };
  });
  expect(found).toEqual({ jump: true, dup: true, nested: true, dangling: true });
});

test("2.4.6 — مراحل نموذج الامتحان قائمة مسمّاة لا معلم تنقل ثانٍ", async ({ page }) => {
  await page.goto("/tests/a1-exam");
  const phases = page.getByRole("list", { name: "مراحل النموذج" });
  await expect(phases).toBeVisible();
  await expect(phases.getByRole("listitem")).toHaveCount(6);
  await expect(phases.locator("[aria-current='step']")).toHaveCount(1);
  await expect(page.locator("nav nav, nav[aria-label='مراحل النموذج']")).toHaveCount(0);
});
