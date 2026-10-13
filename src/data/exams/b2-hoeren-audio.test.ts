/**
 * ═══════════════════════════════════════════════════════════
 *  بيان مقاطع صوت B2 — حراسة دائمة
 *   · البنية: 3 نماذج × 4 أجزاء
 *   · التقسيم: الجزء 1 → 5 حوارات، الجزء 3 → 7 إعلانات، غيرهما مقطع واحد
 *   · الأسماء مطابقة لدستور A1–B1 (hoeren-tN…)
 *   · لا يُفقد نص عند التقسيم (الالتقاء يعيد النص الأصلي كلمة بكلمة)
 *   · عدد مرات التشغيل من بيانات الامتحان لا من تقدير يدوي
 *  + حراسة تزامن وثيقة الإنتاج `docs/B2-EXAM-AUDIO-PRODUCTION.md` مع البيانات.
 * ═══════════════════════════════════════════════════════════
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { B2_HOEREN_SETS } from "@/data/exams";
import {
  B2_HOEREN_AUDIO,
  B2_HOEREN_SET_KEYS,
  maxPlaysForTeil,
  splitHoerenSegments,
} from "@/data/exams/b2-hoeren-audio";
import { buildB2AudioProductionDoc } from "@/data/exams/b2-hoeren-audio-doc";

/** كلمات نص بعد إسقاط الشرطات الفاصلة ومسافات التنسيق */
const words = (s: string) =>
  s
    .replace(/—/g, " ")
    .split(/\s+/)
    .filter(Boolean);

describe("بيان صوت B2 — البنية والتسمية", () => {
  it("ثلاثة نماذج × أربعة أجزاء، ولكل جزء بيان مجلد ومقاطع", () => {
    expect(B2_HOEREN_AUDIO).toHaveLength(B2_HOEREN_SETS.length);
    expect(B2_HOEREN_SETS).toHaveLength(3);
    B2_HOEREN_AUDIO.forEach((specs, si) => {
      expect(specs, `النموذج ${si}`).toHaveLength(4);
      specs.forEach((spec, ti) => {
        expect(spec.base).toBe(`/audio/exam-b2/${B2_HOEREN_SET_KEYS[si]}`);
        expect(spec.segments.length, `النموذج ${si} الجزء ${ti + 1}`).toBeGreaterThan(0);
        expect(spec.segments.every((s) => s.text.trim().length > 20)).toBe(true);
      });
    });
  });

  it("التقسيم: الجزء 1 خمسة حوارات، الجزء 3 سبعة إعلانات، والباقي مقطع واحد", () => {
    for (const [si, specs] of B2_HOEREN_AUDIO.entries()) {
      expect(specs[0].segments.length, `النموذج ${si} الجزء 1`).toBe(5);
      expect(specs[1].segments.length, `النموذج ${si} الجزء 2`).toBe(1);
      expect(specs[2].segments.length, `النموذج ${si} الجزء 3`).toBe(7);
      expect(specs[3].segments.length, `النموذج ${si} الجزء 4`).toBe(1);
    }
  });

  it("تسمية الملفات مطابقة لدستور A1–B1 ولا تكرار داخل الجزء", () => {
    for (const [si, specs] of B2_HOEREN_AUDIO.entries()) {
      specs.forEach((spec, ti) => {
        const names = spec.segments.map((s) => s.file);
        expect(new Set(names).size, `تكرار أسماء في النموذج ${si} الجزء ${ti + 1}`).toBe(names.length);
        for (const name of names) {
          expect(name).toMatch(/^hoeren-t[1-4](-(g|a)\d+)?\.mp3$/);
        }
      });
      expect(specs[0].segments.map((s) => s.file)).toEqual([
        "hoeren-t1-g1.mp3",
        "hoeren-t1-g2.mp3",
        "hoeren-t1-g3.mp3",
        "hoeren-t1-g4.mp3",
        "hoeren-t1-g5.mp3",
      ]);
      expect(specs[2].segments.map((s) => s.file)).toEqual([
        "hoeren-t3-a1.mp3",
        "hoeren-t3-a2.mp3",
        "hoeren-t3-a3.mp3",
        "hoeren-t3-a4.mp3",
        "hoeren-t3-a5.mp3",
        "hoeren-t3-a6.mp3",
        "hoeren-t3-a7.mp3",
      ]);
      expect(specs[1].segments[0].file).toBe("hoeren-t2.mp3");
      expect(specs[3].segments[0].file).toBe("hoeren-t4.mp3");
    }
  });

  it("لا يُفقد نص عند التقسيم: التقاء المقاطع = النص الأصلي", () => {
    for (const [si, set] of B2_HOEREN_SETS.entries()) {
      set.forEach((teil, ti) => {
        const spec = B2_HOEREN_AUDIO[si][ti];
        expect(words(spec.segments.map((s) => s.text).join(" ")), `النموذج ${si} الجزء ${teil.teil}`).toEqual(
          words(teil.audioText),
        );
      });
    }
  });

  it("نص بلا فواصل مدعومة يبقى مقطعاً واحداً بدل تقسيم خاطئ", () => {
    expect(splitHoerenSegments("Ein einzelner Text ohne Markierungen.")).toEqual([
      "Ein einzelner Text ohne Markierungen.",
    ]);
  });

  it("عدد مرات التشغيل من بيانات الامتحان (B2: مرة واحدة لكل الأجزاء)", () => {
    for (const set of B2_HOEREN_SETS) {
      for (const teil of set) {
        expect(maxPlaysForTeil(teil)).toBe(teil.allowRepeat === true ? 2 : 1);
      }
    }
    expect(B2_HOEREN_AUDIO.flat().every((s) => s.maxPlays === 1)).toBe(true);
  });
});

describe("وثيقة إنتاج المقاطع — تزامن مع البيانات", () => {
  const docPath = path.join(process.cwd(), "docs", "B2-EXAM-AUDIO-PRODUCTION.md");

  it("الوثيقة موجودة ومطابقة للبيانات (أو تُصدَّر بـ EXPORT_B2_SCRIPTS=1)", () => {
    const generated = buildB2AudioProductionDoc();
    if (process.env.EXPORT_B2_SCRIPTS === "1") {
      fs.writeFileSync(docPath, generated, "utf8");
    }
    expect(fs.existsSync(docPath), "وثيقة الإنتاج مفقودة — صدّرها بـ EXPORT_B2_SCRIPTS=1").toBe(true);
    const onDisk = fs.readFileSync(docPath, "utf8");
    expect(
      onDisk === generated,
      "وثيقة الإنتاج قديمة — أعد تصديرها: EXPORT_B2_SCRIPTS=1 npx vitest run src/data/exams/b2-hoeren-audio.test.ts",
    ).toBe(true);
  });

  it("الوثيقة تسرد كل ملفات النماذج الثلاثة (42 ملفاً)", () => {
    const doc = buildB2AudioProductionDoc();
    const files = B2_HOEREN_AUDIO.flatMap((specs) => specs.flatMap((s) => s.segments.map((seg) => seg.file)));
    expect(files).toHaveLength(42);
    for (const f of new Set(files)) {
      expect(doc.includes(`#### ${f}`) || doc.includes(f), `الملف ${f} غير مذكور في الوثيقة`).toBe(true);
    }
  });
});
