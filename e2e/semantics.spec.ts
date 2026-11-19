import { expect, test, type Page } from "@playwright/test";

/**
 * الجولة السادسة عشرة — اللون وحده، والاتساق، وترتيب القراءة.
 *
 * 1.4.1   رابط داخل نص بلا إشارة غير لونية: لونه يختلف عن النص المحيط ≥3:1.
 * 1.4.1   حالة العنصر النشِط تُفرَّق بإشارة غير لونية أو بفرق سطوع ≥3:1.
 * 3.3.2   كل حقل إلزامي له علامة مرئية، وكل علامة مرئية تقابل حقلاً إلزامياً.
 * 3.2.4   الرابط نفسه في الترويسة/التذييل يحمل الاسم نفسه في كل الصفحات.
 * 1.3.2   لا `order`/`flex-reverse`/`tabindex` موجب يعكس ترتيب القراءة،
 *         وتسلسل العناوين في DOM يطابق موضعها المرئي.
 */

const parse = (c: string) => {
  const m = c.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const [r, g, b, a] = m[1].split(",").map(Number);
  return { r, g, b, a: a === undefined ? 1 : a };
};

const luminance = (c: { r: number; g: number; b: number }) => {
  const f = (v: number) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
};

const contrast = (a: { r: number; g: number; b: number }, b: { r: number; g: number; b: number }) => {
  const l1 = luminance(a);
  const l2 = luminance(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

test.describe("1.4.1 — الروابط داخل النص", () => {
  for (const route of ["/about", "/privacy", "/faq", "/grammatik", "/glossar", "/"]) {
    test(`${route}: الرابط لا يتميّز باللون وحده`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
      const bad = await page.evaluate(() => {
        const parseColor = (c: string) => {
          const m = String(c).match(/rgba?\(([^)]+)\)/);
          if (!m) return null;
          const [r, g, b, a] = m[1].split(",").map(Number);
          return { r, g, b, a: a === undefined ? 1 : a };
        };
        const lum = (c: { r: number; g: number; b: number }) => {
          const f = (v: number) => {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
          };
          return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
        };
        const ratio = (a: { r: number; g: number; b: number }, b: { r: number; g: number; b: number }) => {
          const l1 = lum(a);
          const l2 = lum(b);
          return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
        };
        const out: { text: string; ratio: number }[] = [];
        for (const a of document.querySelectorAll("main a[href]")) {
          const r = a.getBoundingClientRect();
          if (r.width < 2 || r.height < 2) continue;
          const cs = getComputedStyle(a);
          if (cs.display !== "inline" && cs.display !== "contents") continue;
          const parent = a.parentElement;
          if (!parent) continue;
          const text = (a.textContent || "").replace(/\s+/g, " ").trim();
          const around = (parent.textContent || "").replace(/\s+/g, " ").replace(text, "").trim();
          if (around.length < 15) continue;
          const cue =
            (cs.textDecorationLine && cs.textDecorationLine !== "none") ||
            (parseFloat(cs.borderBottomWidth) || 0) > 0 ||
            (cs.backgroundImage && cs.backgroundImage !== "none") ||
            a.querySelector("svg,img") !== null;
          if (cue) continue;
          const link = parseColor(cs.color);
          const ctx = parseColor(getComputedStyle(parent).color);
          if (!link || !ctx) continue;
          const v = ratio(link, ctx);
          if (v < 3) out.push({ text: text.slice(0, 30), ratio: Number(v.toFixed(2)) });
        }
        return out;
      });
      expect(bad, `روابط بلا إشارة غير لونية في ${route}: ${JSON.stringify(bad)}`).toEqual([]);
    });
  }
});

test.describe("3.3.2 — علامة الإلزام مرئية ومبرمجة", () => {
  test("/flashcards: الحقلان الإلزاميان معلَّمان، والعلامة تقابل حقل `required`", async ({ page }) => {
    await page.goto("/flashcards");
    const fields = page.locator("input[required]");
    const n = await fields.count();
    expect(n).toBeGreaterThan(0);
    for (let i = 0; i < n; i += 1) {
      const input = fields.nth(i);
      const id = await input.getAttribute("id");
      expect(id).toBeTruthy();
      const label = page.locator(`label[for="${id}"]`);
      await expect(label, `حقل بلا تسمية: ${id}`).toHaveCount(1);
      await expect(label, `حقل إلزامي بلا علامة مرئية: ${id}`).toHaveText(/\*/);
    }
  });

  test("كل علامة «*» على تسمية تقابل حقلاً إلزامياً", async ({ page }) => {
    for (const route of ["/flashcards", "/forms", "/settings"]) {
      await page.goto(route);
      await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
      const orphans = await page.evaluate(() => {
        const out: string[] = [];
        for (const label of document.querySelectorAll("label")) {
          const txt = (label.textContent || "").trim();
          if (!/\*/.test(txt)) continue;
          const id = label.getAttribute("for");
          const field = (id ? document.getElementById(id) : null) || label.querySelector("input,select,textarea");
          if (!field) {
            out.push(`تسمية بلا حقل: ${txt.slice(0, 24)}`);
            continue;
          }
          if (!(field as HTMLInputElement).required && field.getAttribute("aria-required") !== "true") {
            out.push(`علامة بلا إلزام: ${txt.slice(0, 24)}`);
          }
        }
        return out;
      });
      expect(orphans, `علامات إلزام بلا حقل في ${route}`).toEqual([]);
    }
  });
});

test.describe("1.4.1 — حالة العنصر النشِط", () => {
  for (const route of ["/glossar", "/verben", "/learning-path", "/tests/unit/a1-03"]) {
    test(`${route}: العنصر النشِط لا يُفرَّق باللون وحده`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
      const bad = await page.evaluate(() => {
        const parseColor = (c: string) => {
          const m = String(c).match(/rgba?\(([^)]+)\)/);
          if (!m) return null;
          const [r, g, b, a] = m[1].split(",").map(Number);
          return { r, g, b, a: a === undefined ? 1 : a };
        };
        const lum = (c: { r: number; g: number; b: number }) => {
          const f = (v: number) => {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
          };
          return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
        };
        const ratio = (a: { r: number; g: number; b: number }, b: { r: number; g: number; b: number }) => {
          const l1 = lum(a);
          const l2 = lum(b);
          return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
        };
        const bg = (el: Element) => {
          let n: Element | null = el;
          for (let d = 0; n && d < 3; d += 1) {
            const c = parseColor(getComputedStyle(n).backgroundColor);
            if (c && c.a > 0.05) return c;
            n = n.parentElement;
          }
          return { r: 255, g: 255, b: 255, a: 1 };
        };
        const cue = (el: Element) => {
          const cs = getComputedStyle(el);
          return {
            weight: cs.fontWeight,
            deco: cs.textDecorationLine,
            border: cs.borderBottomWidth,
            shadow: cs.boxShadow,
            icon: el.querySelector("svg,img") !== null,
            children: el.children.length,
          };
        };
        const out: string[] = [];
        for (const el of document.querySelectorAll(
          '[aria-current="page"],[aria-current="step"],[aria-selected="true"],[aria-pressed="true"]',
        )) {
          const r = el.getBoundingClientRect();
          if (r.width < 2 || r.height < 2) continue;
          const role = el.getAttribute("role") || "";
          if (role === "radio" || role === "checkbox") continue;
          const group = el.closest("nav,ul,ol,[role=tablist],[role=group]");
          if (!group) continue;
          const peer = [...group.querySelectorAll(el.tagName.toLowerCase())].find(
            (p) =>
              p !== el &&
              !p.hasAttribute("aria-current") &&
              p.getAttribute("aria-selected") !== "true" &&
              p.getBoundingClientRect().width > 2,
          );
          if (!peer) continue;
          const a = cue(el);
          const b = cue(peer);
          const nonColor =
            a.weight !== b.weight ||
            a.deco !== b.deco ||
            a.border !== b.border ||
            a.shadow !== b.shadow ||
            a.icon !== b.icon ||
            a.children !== b.children;
          if (nonColor) continue;
          if (ratio(bg(el), bg(peer)) >= 3) continue;
          out.push((el.textContent || "").trim().slice(0, 30));
        }
        return out;
      });
      expect(bad, `حالات بلون وحده في ${route}: ${JSON.stringify(bad)}`).toEqual([]);
    });
  }
});

test.describe("3.2.4 — اتساق التحديد", () => {
  test("روابط الترويسة/التذييل تحمل الاسم نفسه في ست صفحات", async ({ page }) => {
    const collect = async (route: string) => {
      await page.goto(route);
      await expect(page.locator("header").first()).toBeVisible({ timeout: 15_000 });
      return page.evaluate(() => {
        const map: Record<string, string[]> = {};
        for (const scope of [document.querySelector("header"), document.querySelector("footer")]) {
          if (!scope) continue;
          for (const a of scope.querySelectorAll("a[href]")) {
            const r = a.getBoundingClientRect();
            if (r.width < 2 || r.height < 2) continue;
            const name =
              (a.getAttribute("aria-label") || "").trim() ||
              (a.textContent || "").replace(/\s+/g, " ").trim();
            if (!name) continue;
            /* نسبة التقدّم تتغيّر مع المستخدم وليست اختلافاً في التحديد */
            const stable = name.replace(/^(\d+%|…)\s*—\s*/, "");
            const href = new URL((a as HTMLAnchorElement).href).pathname;
            map[href] = [...(map[href] || []), stable];
          }
        }
        return map;
      });
    };
    const reference = await collect("/");
    for (const route of ["/about", "/glossar", "/settings", "/learning-path", "/lesson/a1-01"]) {
      const map = await collect(route);
      for (const [href, names] of Object.entries(map)) {
        const ref = reference[href];
        if (!ref) continue;
        for (const name of names) {
          expect(ref, `الرابط ${href} باسم «${name}» في ${route} بينما في / هو ${JSON.stringify(ref)}`).toContain(name);
        }
      }
    }
  });
});

test.describe("1.3.3 — لا تعليمات تعتمد على اللون أو الموضع وحدهما", () => {
  for (const route of ["/", "/lesson/a1-01", "/tests/a1-exam", "/dashboard", "/principles", "/about"]) {
    test(`${route}: التعليمات لا تحيل إلى «الزر الأخضر» أو «على اليمين»`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
      const hits = await page.evaluate(() => {
        const re =
          /(?:اضغط|انقر|اختر|حدّد|حدد|كليك|klick|dr(?:ü|u)ck|w(?:ä|a)hl)[^.\n]{0,40}?(?:الزر\s+(?:الأحمر|الأخضر|الأزرق|الأصفر|الدائري|المربع)|على اليمين|على اليسار|في الأعلى|في الأسفل|den\s+(?:roten|gr(?:ü|u)nen|blauen)\s+(?:Knopf|Button)|rechts|links)/i;
        const out: string[] = [];
        for (const el of document.querySelectorAll("main p, main li, main dd, main figcaption, main span")) {
          if (el.closest("a,button")) continue;
          const r = el.getBoundingClientRect();
          if (r.width < 2 || r.height < 2) continue;
          const direct = [...el.childNodes]
            .filter((n) => n.nodeType === Node.TEXT_NODE)
            .map((n) => n.textContent || "")
            .join(" ")
            .replace(/\s+/g, " ")
            .trim();
          if (direct.length < 20) continue;
          const m = direct.match(re);
          if (m) out.push(m[0].slice(0, 48));
        }
        return out;
      });
      expect(hits, `تعليمات حسّية في ${route}: ${JSON.stringify(hits)}`).toEqual([]);
    });
  }

  test("الفاحص نفسه يكشف عيباً محقوناً", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    const found = await page.evaluate(() => {
      const p = document.createElement("p");
      p.textContent = "اضغط الزر الأخضر الموجود على اليمين لإكمال الخطوة التالية في الدرس.";
      document.querySelector("main")?.appendChild(p);
      const re = /(?:اضغط|انقر|اختر)[^.\n]{0,40}?(?:الزر\s+الأخضر|على اليمين)/i;
      return re.test(p.textContent || "");
    });
    expect(found).toBe(true);
  });
});

test.describe("1.3.2 · 2.4.3 — ترتيب القراءة والتركيز", () => {
  for (const route of ["/", "/about", "/glossar", "/learning-path", "/dashboard"]) {
    test(`${route}: لا إعادة ترتيب عبر CSS ولا tabindex موجب`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
      const bad = await page.evaluate(() => {
        const out: string[] = [];
        for (const el of document.querySelectorAll("main *, header *, footer *")) {
          const r = el.getBoundingClientRect();
          if (r.width < 2 || r.height < 2) continue;
          const cs = getComputedStyle(el);
          if (cs.order && cs.order !== "0") out.push(`order:${cs.order}`);
          if (/reverse/.test(cs.flexDirection)) out.push(`flex:${cs.flexDirection}`);
          if (/dense/.test(cs.gridAutoFlow)) out.push(`grid:${cs.gridAutoFlow}`);
          const ti = el.getAttribute("tabindex");
          if (ti !== null && Number(ti) > 0) out.push(`tabindex:${ti}`);
        }
        return [...new Set(out)];
      });
      expect(bad, `إعادة ترتيب في ${route}: ${JSON.stringify(bad)}`).toEqual([]);
    });

    test(`${route}: العناوين تتبع ترتيبها المرئي من أعلى الصفحة`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
      const inversions = await page.evaluate(() => {
        const heads = [...document.querySelectorAll("main h1,main h2,main h3,main h4,main h5,main h6")]
          .filter((el) => {
            const r = el.getBoundingClientRect();
            return r.width > 2 && r.height > 2;
          })
          .map((el, i) => {
            const r = el.getBoundingClientRect();
            return { i, top: Math.round(r.top + window.scrollY), text: (el.textContent || "").trim().slice(0, 24) };
          });
        const out: string[] = [];
        for (let i = 0; i < heads.length; i += 1) {
          for (let j = i + 1; j < heads.length; j += 1) {
            if (heads[j].top < heads[i].top - 24) {
              out.push(`${heads[j].text} فوق ${heads[i].text}`);
              break;
            }
          }
          if (out.length >= 5) break;
        }
        return out;
      });
      expect(inversions, `ترتيب عناوين مقلوب في ${route}: ${JSON.stringify(inversions)}`).toEqual([]);
    });
  }
});
