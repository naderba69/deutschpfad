import { describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

/**
 * حارس انحدار للسكربتين اللذين أُصلحا:
 *  - lessons-inventory.mjs كان يفشل بـ MODULE_NOT_FOUND لأن ملفات الدروس المقسّمة
 *    (a1-00.ts → ./a1-00/intro) لم تُحل بعد نسخها إلى ملف مؤقت.
 *  - verify-audio-assets.mjs كان يقرأ مجمِّع الحوارات <level>.ts فقط (وهو فارغ من الحوارات)،
 *    فيبدو فحص المفقودات نظيفاً دون أن يفحص أي حوار.
 */
const ROOT = join(__dirname, "..", "..", "..");

function run(script: string): string {
  return execFileSync("node", [join(ROOT, "scripts", script)], {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 16 * 1024 * 1024,
  });
}

describe("lessons-inventory.mjs", () => {
  const out = run("lessons-inventory.mjs");

  it("يحمّل الدروس المقسّمة دون خطأ وفي مقدمتها a1-00 وb2-13", () => {
    expect(out).toMatch(/^\s{2}a1-00 \|/m);
    expect(out).toMatch(/^\s{2}b2-13 \|/m);
  });

  it("مجموع الملخص يطابق عدد صفوف الدروس المطبوعة", () => {
    const rows = out.split("\n").filter((l) => /^\s{2}[ab][12]-[0-9a-z]+ \|/.test(l)).length;
    const total = Number(out.match(/الإجمالي: (\d+)/)?.[1]);
    expect(rows).toBeGreaterThanOrEqual(52);
    expect(total).toBe(rows);
  });
});

describe("verify-audio-assets.mjs", () => {
  const out = run("verify-audio-assets.mjs");

  it("لا ملفات مفقودة من المراجع الحرفية والحوارات", () => {
    expect(out).toMatch(/مفقودة: 0/);
  });

  it("يقرأ الحوارات الفعلية (مرجعية كبيرة لا تقتصر على المجمِّع)", () => {
    const refs = Number(out.match(/مرجعية: (\d+)/)?.[1]);
    expect(refs).toBeGreaterThanOrEqual(700);
  });

  it("لا يُبلَّغ عن ملفات حوار كيتيمة", () => {
    const orphanLines = out.split("\n").filter((l) => l.startsWith("  ? "));
    expect(orphanLines.some((l) => l.includes("dialogues-"))).toBe(false);
  });
});
