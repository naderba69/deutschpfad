/**
 * ═══════════════════════════════════════════════════════════
 *  حارس سقف الحجم (ratchet) — المرحلة 4 من docs/REFACTOR-PLAN.md
 *
 *  القاعدة: لا ملف فوق 600 سطر (كوداً أو محتوى).
 *  القائمة أدناه = الدين القائم المُعترف به (ملفات لم تُقسَّم بعد):
 *   · ملف جديد > 600            → فشل (لا مونوليثات جديدة)
 *   · ملف مسجَّل نما فوق حدّه    → فشل (الدين لا يزيد)
 *   · ملف مسجَّل صار ≤ 600       → فشل (احذفه من القائمة — سُدِّد الدين)
 *  عند تقسيم ملف احذف سطره؛ وعند إضافة ملف كبير يكون القرار واعياً وباديَ الأثر.
 * ═══════════════════════════════════════════════════════════
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

const CAP = 600;
const ROOT = path.join(process.cwd(), "src");

/** [مسار, عدد الأسطر المسجَّل] — الفرق بين الجرد القديم والسقف */
const KNOWN_OVERSIZE: readonly [string, number][] = [
  /**
   * اختبارا التدقيق الشامل للدرس (a2-10/a2-11): حجمهما يتبع المحتوى الذي
   * يدقّقانه حرفياً (جدول المفاتيح، البدائل، الجمل، الأمثلة، والفقرات).
   * رُقّي الدرسان إلى المعيار الأكاديمي في المرحلة 5 (نصّ قراءة + تدريبات
   * + نظرية أعمق) فشمل التدقيق الجديد — وهذا النمو مقصود ومُعلَن.
   */
  ["src/data/lessons/a2/a2-05.test.ts", 705],
  ["src/data/lessons/a2/a2-08.test.ts", 695],
  ["src/data/lessons/a2/a2-03.test.ts", 682],
  ["src/data/lessons/a1/a1-11.test.ts", 680],
  ["src/data/lessons/integrity.test.ts", 668],
  ["src/data/dialogues/a1.ts", 621],
  ["src/data/dialogues/a2.ts", 611],
  ["src/data/dialogues/b1.ts", 611],
  ["src/data/dialogues/b2.ts", 611],
  ["src/data/vocabulary/b1-extra2.ts", 609],
];

function walk(dir: string, acc: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(ts|tsx)$/.test(e.name) && !e.name.endsWith(".d.ts")) acc.push(p);
  }
  return acc;
}

const linesOf = (f: string) => fs.readFileSync(f, "utf8").split("\n").length;
const rel = (f: string) => path.relative(process.cwd(), f).split(path.sep).join("/");

describe("سقف حجم الملفات (600 سطراً) — حارس تدرّجي", () => {
  const known = new Map(KNOWN_OVERSIZE);

  it("لا ملف جديد يتجاوز السقف", () => {
    const offenders = walk(ROOT)
      .filter((f) => linesOf(f) > CAP && !known.has(rel(f)))
      .map((f) => `${rel(f)} (${linesOf(f)} سطراً)`);
    expect(offenders, `ملفات جديدة فوق ${CAP} سطراً — قسّمها أو سجّلها بقرار واعٍ:`).toEqual([]);
  });

  it("الدين المسجَّل لا يزيد، ويُحذف سطره إن سُدِّد", () => {
    const grown: string[] = [];
    const stale: string[] = [];
    for (const [file, recorded] of KNOWN_OVERSIZE) {
      const abs = path.join(process.cwd(), file);
      if (!fs.existsSync(abs)) { stale.push(`${file} (غير موجود)`); continue; }
      const n = linesOf(abs);
      if (n > recorded) grown.push(`${file}: ${recorded} → ${n} سطراً`);
      if (n <= CAP) stale.push(`${file} (صار ${n} سطراً — احذفه من القائمة)`);
    }
    expect(grown, "الدين المسجَّل نما:").toEqual([]);
    expect(stale, "أسطر يجب حذفها من القائمة (انخفض الحجم تحت السقف):").toEqual([]);
  });
});
