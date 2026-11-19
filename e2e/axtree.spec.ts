import { expect, test, type Page } from "@playwright/test";

/**
 * الجولة الثامنة عشرة — حراسات شجرة الوصول (Accessibility Tree).
 *
 * الجولات السابقة تقيس DOM والسلوك؛ هذه تقيس ما يحسبه المتصفح ويسلّمه
 * لقارئ الشاشة: دور محسوب + اسم محسوب + حالة محسوبة. الاختبارات هنا من
 * نوعين: (أ) حقن يُثبت أن طبقة الفحص ترى العيب، (ب) تحقق من المحتوى
 * الحقيقي بانعدام العيب — ولا تُعدّ هذه الاختبارات بديلاً عن اختبار قارئ
 * شاشة بشري (قيد معلن في التقرير).
 *
 * A1  أسماء الأدوار التفاعلية المحسوبة.
 * A2  التركيز على عقدة بلا معنى (generic).
 * A3  الصور بلا اسم خارج عنصر تفاعلي مسمّى.
 * A4  بنية القوائم والعناوين (أب listitem · تسلسل مستويات العنوان).
 * A5  بقاء دور الجدول في الشجرة.
 * A6  المناطق الحيّة الظاهرة vs المخفي في الشجرة.
 * A7  الحالات المعلَنة تُهمَل عندما لا يدعمها الدور (سبب الفحص).
 */

type AXProp = { name: string; value: { value?: unknown } };
type AXNode = {
  nodeId?: string;
  ignored?: boolean;
  role?: { value?: string };
  name?: { value?: string };
  properties?: AXProp[];
  childIds?: string[];
  parentId?: string;
  backendDOMNodeId?: number;
};

const CONTROL_ROLES = new Set([
  "button", "link", "checkbox", "radio", "combobox", "menuitem", "menuitemcheckbox",
  "menuitemradio", "option", "spinbutton", "slider", "switch", "tab", "textbox",
  "searchbox", "treeitem",
]);
const INTERACTIVE_ROLES = new Set([
  ...CONTROL_ROLES, "heading", "progressbar",
]);

const propOf = (n: AXNode, name: string): unknown =>
  n.properties?.find((p) => p.name === name)?.value?.value;

/** شجرة الوصول الكاملة للإطار الرئيسي */
async function fullAX(page: Page): Promise<AXNode[]> {
  const cdp = await page.context().newCDPSession(page);
  const { frameTree } = (await cdp.send("Page.getFrameTree")) as { frameTree: { frame: { id: string } } };
  const { nodes } = (await cdp.send("Accessibility.getFullAXTree", {
    frameId: frameTree.frame.id,
  })) as { nodes: AXNode[] };
  await cdp.detach();
  return nodes;
}

const visible = (n: AXNode) => !n.ignored;

test.describe("A1 — الأسماء المحسوبة للأدوار التفاعلية", () => {
  test("/forms: لا دور تفاعلي ظاهر بلا اسم محسوب", async ({ page }) => {
    await page.goto("/forms");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    const nodes = (await fullAX(page)).filter(visible);
    const unnamed = nodes.filter(
      (n) => INTERACTIVE_ROLES.has(n.role?.value || "") && !String(n.name?.value ?? "").trim(),
    );
    expect(
      unnamed.map((n) => ({ role: n.role?.value, name: n.name?.value })),
      "أدوار تفاعلية بلا اسم في شجرة الوصول",
    ).toEqual([]);
  });

  test("الحقن: زر ورابط فارغان يبقيان بلا اسم في الشجرة (طبقة الكشف تعمل)", async ({ page }) => {
    await page.goto("/forms");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    await page.evaluate(() => {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<button id="e2e-empty-btn"></button><a id="e2e-empty-link" href="/about"></a>',
      );
    });
    const nodes = (await fullAX(page)).filter(visible);
    const emptyBtn = nodes.find((n) => n.role?.value === "button" && !String(n.name?.value ?? "").trim());
    const emptyLink = nodes.find((n) => n.role?.value === "link" && !String(n.name?.value ?? "").trim());
    expect(emptyBtn, "الزر الفارغ لم يظهر كـbutton بلا اسم").toBeTruthy();
    expect(emptyLink, "الرابط الفارغ لم يظهر كـlink بلا اسم").toBeTruthy();
  });
});

test.describe("A2 — التركيز على عقدة بلا معنى", () => {
  test("/: لا عقدة قابلة للتركيز بدور generic", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    const focusableGeneric = (await fullAX(page)).filter(
      (n) => !n.ignored && propOf(n, "focusable") === true && ["generic", "none", ""].includes(n.role?.value || ""),
    );
    expect(
      focusableGeneric.length,
      `عقد تركيز generic على الصفحة: ${focusableGeneric.length}`,
    ).toBe(0);
  });

  test("الحقن: div بـtabindex يظهر focusable+generic", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    const before = (await fullAX(page)).filter(
      (n) => !n.ignored && propOf(n, "focusable") === true && ["generic", "none", ""].includes(n.role?.value || ""),
    ).length;
    await page.evaluate(() => {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div id="e2e-focus" tabindex="0" style="position:absolute;left:-9999px">منطقة تركيز بلا دور</div>',
      );
    });
    const after = (await fullAX(page)).filter(
      (n) => !n.ignored && propOf(n, "focusable") === true && ["generic", "none", ""].includes(n.role?.value || ""),
    ).length;
    expect(after, "div بـtabindex لم يظهر كعقدة تركيز generic").toBeGreaterThanOrEqual(before + 1);
  });
});

test.describe("A3 — الصور بلا اسم", () => {
  test("الحقن: svg بلا اسم خارج الأزرار يظهر كصورة بلا اسم", async ({ page }) => {
    await page.goto("/forms");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    await page.evaluate(() => {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<svg id="e2e-img" role="img" width="24" height="24" style="position:absolute;left:-9999px"></svg>',
      );
    });
    const nodes = (await fullAX(page)).filter(visible);
    const unnamedImages = nodes.filter(
      (n) => (n.role?.value === "image" || /^graphic/i.test(n.role?.value || "")) && !String(n.name?.value ?? "").trim(),
    );
    expect(unnamedImages.length, "صورة بلا اسم لم تظهر في الشجرة").toBeGreaterThanOrEqual(1);
  });

  test("/: كل صورة بلا اسم داخل عنصر تفاعلي مسمّى", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    /* الخريطة من العقد كلها: الأبوة قد تمرّ بعقد مُهمَلة (tbody…) فلا تُقطع */
    const all = await fullAX(page);
    const byId = new Map(all.map((n) => [n.nodeId || "", n]));
    const strays: string[] = [];
    for (const n of all.filter(visible)) {
      const role = n.role?.value || "";
      if (!(role === "image" || /^graphic/i.test(role))) continue;
      if (String(n.name?.value ?? "").trim()) continue;
      let p: AXNode | undefined = byId.get(n.parentId || "");
      let hops = 0;
      let inNamedControl = false;
      while (p && hops < 25) {
        const pr = p.role?.value || "";
        if (CONTROL_ROLES.has(pr)) {
          if (String(p.name?.value ?? "").trim()) inNamedControl = true;
          break;
        }
        if (pr === "RootWebArea") break;
        p = byId.get(p.parentId || "");
        hops += 1;
      }
      if (!inNamedControl) strays.push(role);
    }
    expect(strays, "صور بلا اسم خارج أي عنصر تفاعلي مسمّى").toEqual([]);
  });
});

test.describe("A4 — البنية", () => {
  test("الحقن: <li> خارج قائمة يبقى listitem بدوره وأبوه ليس list", async ({ page }) => {
    await page.goto("/forms");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    await page.evaluate(() => {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div style="position:absolute;left:-9999px"><li id="e2e-li">عنصر خارج قائمة</li></div>',
      );
    });
    const all = await fullAX(page);
    const byId = new Map(all.map((n) => [n.nodeId || "", n]));
    const strays = all.filter((n) => {
      if (n.ignored || n.role?.value !== "listitem") return false;
      let p: AXNode | undefined = byId.get(n.parentId || "");
      let hops = 0;
      while (p && p.ignored && hops < 30) {
        p = byId.get(p.parentId || "");
        hops += 1;
      }
      const pr = p?.role?.value || "";
      return pr !== "list" && pr !== "group";
    });
    expect(strays.length, "<li> خارج قائمة لم يُعلَّم كأب غير list").toBeGreaterThanOrEqual(1);
  });

  test("/lesson/a1-01: تسلسل مستويات العناوين في الشجرة بلا قفزة", async ({ page }) => {
    await page.goto("/lesson/a1-01");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    const all = await fullAX(page);
    const byId = new Map(all.map((n) => [n.nodeId || "", n]));
    const seq: number[] = [];
    const walk = (n?: AXNode) => {
      if (!n) return;
      if (!n.ignored && n.role?.value === "heading") seq.push(Number(propOf(n, "level")) || 0);
      for (const cid of n.childIds || []) walk(byId.get(cid));
    };
    walk(all.find((n) => n.role?.value === "RootWebArea"));
    expect(seq.length, "لا عناوين في الشجرة").toBeGreaterThan(0);
    expect(seq[0], "أول عنوان ليس المستوى1").toBe(1);
    const skips: string[] = [];
    let prev = 0;
    for (const lv of seq) {
      if (prev && lv - prev > 1) skips.push(`${prev}→${lv}`);
      if (lv) prev = lv;
    }
    expect(skips, `قفزات مستوى: ${skips.join(",")}`).toEqual([]);
  });
});

test.describe("A5 — بقاء دور الجدول", () => {
  test("/verben: جدول DOM الظاهر له دور table في الشجرة", async ({ page }) => {
    await page.goto("/verben");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    const nodes = (await fullAX(page)).filter(visible);
    const backendIds = new Set(nodes.filter((n) => ["table", "grid", "treegrid"].includes(n.role?.value || "")).map((n) => n.backendDOMNodeId));
    const cdp = await page.context().newCDPSession(page);
    const { result } = (await cdp.send("Runtime.evaluate", {
      expression: 'document.querySelector("table")',
    })) as { result: { objectId?: string } };
    expect(result.objectId, "لا يوجد جدول في DOM").toBeTruthy();
    const { node } = (await cdp.send("DOM.describeNode", { objectId: result.objectId })) as {
      node: { backendNodeId: number };
    };
    await cdp.detach();
    expect(backendIds.has(node.backendNodeId), "الجدول فقد دور table في شجرة الوصول").toBe(true);
  });
});

test.describe("A6 — المناطق الحيّة", () => {
  test("الحقن: status ظاهر يظهر في الشجرة، وalert داخل aria-hidden لا يظهر", async ({ page }) => {
    await page.goto("/forms");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    /* نثبت القياس بعد اكتمال الـhydration كي لا يزحف عدّاد الـannouncer بين القياسين */
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(300);
    /* اسم role=status لا يأتي من المحتوى (ARIA: name from author فقط)،
     * فالدليل: (أ) زيادة عدّاد عقد status، (ب) بقاء النص كعقدة نصية،
     * (ج) غياب نص المخفي كلياً. */
    const before = (await fullAX(page)).filter(visible);
    const statusBefore = before.filter((n) => n.role?.value === "status").length;
    const alertBefore = before.filter((n) => n.role?.value === "alert").length;
    await page.evaluate(() => {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div id="e2e-status" role="status" style="position:absolute;left:-9999px">حالة معلنة ظاهرة</div>' +
          '<div id="e2e-hidden" role="alert" aria-hidden="true" style="position:absolute;left:-9999px">مخفي عن الشجرة</div>',
      );
    });
    const after = (await fullAX(page)).filter(visible);
    const statusAfter = after.filter((n) => n.role?.value === "status").length;
    const alertAfter = after.filter((n) => n.role?.value === "alert").length;
    expect(statusAfter, "عقد status الظاهرة لم تزد في الشجرة").toBeGreaterThanOrEqual(statusBefore + 1);
    expect(alertAfter, "alert داخل aria-hidden زاد عدّاد الشجرة").toBe(alertBefore);
    const names = after.map((n) => String(n.name?.value ?? ""));
    expect(
      names.some((x) => x.includes("حالة معلنة ظاهرة")),
      "نص المنطقة الحيّة الظاهرة غائب عن الشجرة",
    ).toBe(true);
    expect(
      names.some((x) => x.includes("مخفي عن الشجرة")),
      "محتوى aria-hidden تسرّب إلى شجرة الوصول",
    ).toBe(false);
  });
});

test.describe("A7 — الحالات المعلَنة", () => {
  test("الحقن: aria-expanded على generic يُهمَل في الشجرة (سبب وجود الفحص)", async ({ page }) => {
    await page.goto("/forms");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    await page.evaluate(() => {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<span id="e2e-state" aria-expanded="true" aria-pressed="true" style="position:absolute;left:-9999px">حالة</span>',
      );
    });
    const cdp = await page.context().newCDPSession(page);
    const { result } = (await cdp.send("Runtime.evaluate", {
      expression: 'document.querySelector("#e2e-state")',
    })) as { result: { objectId?: string } };
    const { nodes } = (await cdp.send("Accessibility.getPartialAXTree", {
      objectId: result.objectId,
      fetchRelatives: false,
    })) as { nodes: AXNode[] };
    await cdp.detach();
    const node = nodes.find((n) => !n.ignored);
    expect(node, "العنصر المحقون غير موجود في الشجرة").toBeTruthy();
    expect(node?.role?.value, "دور العنصر المحقون").toBe("generic");
    expect(propOf(node as AXNode, "expanded"), "aria-expanded لم يُهمَل").toBeUndefined();
    expect(propOf(node as AXNode, "pressed"), "aria-pressed لم يُهمَل").toBeUndefined();
  });

  test("/forms: الحالات المعلَنة بقيمة صحيحة تظهر في الشجرة بقيمتها", async ({ page }) => {
    await page.goto("/forms");
    await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
    /* عناصر DOM الحاملة لحالة بصحة true */
    const declared = await page.evaluate(() => {
      const attrs = ["aria-checked", "aria-pressed", "aria-expanded", "aria-selected", "aria-required", "aria-disabled", "aria-invalid"];
      const all = [...document.querySelectorAll("*")];
      const out: { idx: number; attr: string; value: string }[] = [];
      all.forEach((el, idx) => {
        const cs = getComputedStyle(el);
        if (cs.display === "none" || cs.visibility === "hidden" || el.closest('[aria-hidden="true"],[inert],[hidden]')) return;
        for (const a of attrs) {
          const v = el.getAttribute(a);
          if (v && v !== "false" && v !== "off") {
            out.push({ idx, attr: a, value: v });
            break;
          }
        }
      });
      return out;
    });
    /* كل عنصر معلَن يجب أن يحمل خاصية الشجرة المقابلة بقيمة مطابقة */
    const cdp = await page.context().newCDPSession(page);
    const failures: string[] = [];
    const map: Record<string, string> = {
      "aria-checked": "checked",
      "aria-pressed": "pressed",
      "aria-expanded": "expanded",
      "aria-selected": "selected",
      "aria-required": "required",
      "aria-disabled": "disabled",
      "aria-invalid": "invalid",
    };
    for (const d of declared) {
      const { result } = (await cdp.send("Runtime.evaluate", {
        expression: `document.querySelectorAll("*")[${d.idx}]`,
      })) as { result: { objectId?: string } };
      if (!result.objectId) continue;
      const { nodes } = (await cdp.send("Accessibility.getPartialAXTree", {
        objectId: result.objectId,
        fetchRelatives: false,
      })) as { nodes: AXNode[] };
      const node = nodes.find((n) => !n.ignored);
      const axVal = node ? propOf(node, map[d.attr]) : undefined;
      const domBool = d.value === "true" ? true : d.value === "mixed" ? "mixed" : d.value;
      const same =
        typeof axVal === "boolean" ? axVal === domBool : String(axVal ?? "false") === String(domBool);
      if (!node || !same) failures.push(`${d.attr}=${d.value} → AX:${String(axVal)}`);
    }
    await cdp.detach();
    expect(failures, `حالات لم تصل إلى الشجرة: ${failures.join(" | ")}`).toEqual([]);
  });
});
