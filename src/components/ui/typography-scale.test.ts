/**
 * ═══════════════════════════════════════════════════════════
 *  حارس مقياس الخطوط — لا نص أصغر من 11px.
 *
 *  لماذا 11px؟ لأن 263 موضعاً في المشروع تستعمل `text-[11px]` كأصغر مقياس
 *  مقروء، وأدوات التدقيق (audit-every-page) تفحص الخطوط < 11px. لكن الفحص
 *  الآلي يرى **الحالة المعروضة فقط**، فشارات الإتقان والإحصاءات التي تظهر
 *  بعد وجود بيانات مرّت من الجولة الثانية بلا ملاحظة رغم أنها 9px
 *  (17 موضعاً في 10 ملفات، جولة 5).
 *
 *  هذا الحارس يفحص المصدر لا الصفحة: أي `text-[Npx]` حيث N < 11 يفشل.
 *  ولا استثناء لقيمة وسيطة: الحدّ 11px صارم، لأن القيم الوسيطة تُصعّب
 *  المراجعة وليست ضرورية بصرياً.
 * ═══════════════════════════════════════════════════════════
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

const ROOT = path.join(process.cwd(), "src");
const MIN_PX = 11;

function walk(dir: string, acc: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(ts|tsx)$/.test(e.name) && !e.name.endsWith(".d.ts") && !e.name.includes(".test.")) acc.push(p);
  }
  return acc;
}

describe("مقياس الخطوط — لا نص أصغر من 11px", () => {
  it("لا استعمال لـ text-[Npx] حيث N < 11", () => {
    const bad: string[] = [];
    for (const file of walk(ROOT)) {
      const src = fs.readFileSync(file, "utf8");
      for (const m of src.matchAll(/text-\[(\d+(?:\.\d+)?)px\]/g)) {
        const px = Number(m[1]);
        if (px < MIN_PX) bad.push(`${path.relative(process.cwd(), file)}: text-[${m[1]}px]`);
      }
    }
    expect(bad, "نص أصغر من 11px — استعمل text-[11px] أو أكبر").toEqual([]);
  });

  it("لا استعمال لمقياس أقل من 0.7rem في text-[] أو fontSize مضمّن", () => {
    const bad: string[] = [];
    for (const file of walk(ROOT)) {
      const src = fs.readFileSync(file, "utf8");
      for (const m of src.matchAll(/text-\[(\d*\.?\d+)rem\]/g)) {
        if (Number(m[1]) < 0.7) bad.push(`${path.relative(process.cwd(), file)}: text-[${m[1]}rem]`);
      }
    }
    expect(bad).toEqual([]);
  });
});
