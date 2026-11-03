/**
 * ═══════════════════════════════════════════════════════════
 *  البيانات المخفية في الدروس (الدفعة 123) — حراسة
 *  من المسح الشامل للحقول: حقلان مكتوبان لم يكونا يُعرضان:
 *   · `keyWords` — مصطلحات ألمانية لكل درس (53) — تُعرض اليوم
 *     في رأس الدرس (`data-testid="lesson-keywords"`)
 *   · `instructionDe` — التعليمات الألمانية الأصلية للتمارين (29)
 *     — تُعرض بجانب `instructionAr` في مكوّنات التمارين العشرة
 *  الحراسة تمنع: فقدان التصريحات، أو شرحاً بلا ألمانية.
 * ═══════════════════════════════════════════════════════════
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { LESSON_META } from "@/data/lessons/meta";

const GERMAN = /[A-Za-zÄÖÜäöüß]{3,}/;
/** المصطلحات المستقلة قد تكون أدوات قصيرة سليمة (am · ob · zu) */
const GERMAN_TERM = /[A-Za-zÄÖÜäöüß]{2,}/;

describe("بيانات الدروس المخفية — keyWords (الدفعة 123)", () => {
  it("كل درس يحمل مصطلحات غير فارغة (أرضية 52 درساً)", () => {
    expect(LESSON_META.length).toBeGreaterThanOrEqual(52);
    const empty = LESSON_META.filter((m) => !(m.keyWords?.length)).map((m) => m.id);
    expect(empty, "دروس بلا مصطلحات").toEqual([]);
  });

  it("كل مصطلح يحوي الألمانية (مصطلحات لا كلمات عامة)", () => {
    const weak = LESSON_META.filter((m) => (m.keyWords ?? []).some((k) => !GERMAN_TERM.test(k))).map(
      (m) => `${m.id}: ${(m.keyWords ?? []).filter((k) => !GERMAN_TERM.test(k)).join("، ")}`,
    );
    expect(weak, "مصطلحات بلا لاتينية").toEqual([]);
  });
});

describe("بيانات الدروس المخفية — instructionDe (الدفعة 123)", () => {
  /** كل قيم instructionDe المكتوبة في ملفات الدروس */
  const collect = (): string[] => {
    const out: string[] = [];
    const walk = (dir: string) => {
      for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, f.name);
        if (f.isDirectory()) walk(p);
        else if (f.name.endsWith(".ts") && !f.name.endsWith(".test.ts")) {
          const s = fs.readFileSync(p, "utf8");
          for (const m of s.matchAll(/instructionDe: "([^"]*)"/g)) out.push(m[1]);
        }
      }
    };
    walk("src/data/lessons");
    return out;
  };

  it("التصريحات موجودة (أرضية 29 تعليماً)", () => {
    const texts = collect();
    expect(texts.length, `instructionDe=${texts.length} · الأرضية=29`).toBeGreaterThanOrEqual(29);
  });

  it("كل تعليم ألماني غير فارغ وبالألمانية (لا تعليم عربي مقلّد)", () => {
    const texts = collect();
    expect(texts.filter((t) => !t.trim()), "تعليمات فارغة").toEqual([]);
    const weak = texts.filter((t) => !GERMAN.test(t)).map((t) => `«${t.slice(0, 40)}»`);
    expect(weak, "تعليمات بلا لاتينية").toEqual([]);
  });
});
