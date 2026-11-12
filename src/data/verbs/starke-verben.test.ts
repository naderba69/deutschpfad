/**
 * ═══════════════════════════════════════════════════════════
 *  حراسة جدول الأفعال الشاذة (الدفعة 125) — كانت بلا أي حارس
 *   · 63 فعلاً على الأقل، حقول التصريف كاملة غير فارغة
 *   · `hilfsverb` ∈ {haben, sein} · `level` ∈ A1–B2 · لا تكرار
 *   · `note` (عند وجودها) محتوى عربي غير فارغ — وتُعرض في
 *     الجدول (`starke-verben-table`) والتدريب (`verb-drill`)
 * ═══════════════════════════════════════════════════════════
 */
import fs from "node:fs";

import { describe, expect, it } from "vitest";

import { STARK_VERBEN, type StarkeVerb } from "@/data/verbs/starke-verben";

const AR = /[\u0600-\u06FF]/;
const LEVELS = new Set(["A1", "A2", "B1", "B2"]);

describe("أفعال شاذة — سلامة البيانات", () => {
  it("63 فعلاً على الأقل والتصريفات كاملة غير فارغة", () => {
    expect(STARK_VERBEN.length, `الرصيد=${STARK_VERBEN.length}`).toBeGreaterThanOrEqual(63);
    const empty: string[] = [];
    for (const v of STARK_VERBEN) {
      for (const key of ["infinitiv", "präsens3", "präteritum", "partizip2", "ar"] as const) {
        if (!v[key]?.trim()) empty.push(`${v.infinitiv || "?"}.${key}`);
      }
    }
    expect(empty, "حقول فارغة").toEqual([]);
  });

  it("hilfsverb وlevel من المفردات المعروفة ولا تكرار للمصدر", () => {
    const bad: string[] = [];
    for (const v of STARK_VERBEN) {
      if (v.hilfsverb !== "haben" && v.hilfsverb !== "sein") bad.push(`${v.infinitiv}.hilfsverb=${v.hilfsverb}`);
      if (!LEVELS.has(v.level)) bad.push(`${v.infinitiv}.level=${v.level}`);
    }
    expect(bad, "قيم خارج المفردات").toEqual([]);
    const seen = new Set<string>();
    const dup: string[] = [];
    for (const v of STARK_VERBEN) {
      const k = `${v.infinitiv}|${v.level}`;
      if (seen.has(k)) dup.push(k);
      seen.add(k);
    }
    expect(dup, "تكرار").toEqual([]);
  });

  it("الملاحظات محتوى عربي غير فارغ — وتُعرض في الجدول والتدريب", () => {
    const empty: string[] = [];
    for (const v of STARK_VERBEN as StarkeVerb[]) {
      if (v.note !== undefined && (!v.note.trim() || !AR.test(v.note))) empty.push(v.infinitiv);
    }
    expect(empty, "ملاحظات فارغة أو بلا عربية").toEqual([]);
    // حراسة العرض: المكوّنان يعرضان `note` صراحة
    const table = __BUNDLE__();
    expect(table.table, "الجدول لا يعرض note").toBeTruthy();
    expect(table.drill, "التدريب لا يعرض note").toBeTruthy();
  });
});

// قراءة مصدر المكوّنين مباشرة (حراسة عرض خفيفة — والتثبيت الحقيقي عبر E2E)
function __BUNDLE__(): { table: boolean; drill: boolean } {
  const table = fs.readFileSync("src/components/verbs/starke-verben-table.tsx", "utf8");
  const drill = fs.readFileSync("src/components/verbs/verb-drill.tsx", "utf8");
  return {
    table: /\.note\b/.test(table) && /text-destructive/.test(table),
    drill: /verb\.note\b/.test(drill) && /text-destructive/.test(drill),
  };
}
