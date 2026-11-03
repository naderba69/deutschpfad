/**
 * ═══════════════════════════════════════════════════════════
 *  تسجيلات محاكاة B2 (الدفعة 120) — حراسة دائمة
 *   · 4 نصوص استماع، لكلٍّ `audioFile` + `spokenText` + `maxPlays`
 *   · النص المنطوق هو نصّ التوليد نفسه، ويساوي سطور الحوار بالكلمة
 *     (بلا أسماء المتحدثين — اتفاقية `ExamHoerenTeil.audioSegments`)
 *   · الملفات الأربعة موجودة و`mp3` صالحة للتشغيل (`isPlayableMp3`)
 *   · كل نصّ ضمن حدّ مقطع النطق الواحد (`MAX_SEGMENT_CHARS`)
 *   · التسجيلات مُولَّدة TTS (voice-03) — والواجهة تعلن ذلك بصدق
 * ═══════════════════════════════════════════════════════════
 */
import path from "node:path";

import { describe, expect, it } from "vitest";

import { MAX_SEGMENT_CHARS } from "@/data/exams/b2-hoeren-audio";
import { B2_SIM_AUDIO_BASE, LISTENING, READING } from "@/data/exams/b2-simulation-data";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

/** كلمات نص بعد إسقاط الشرطات الفاصلة ومسافات التنسيق */
const words = (s: string) =>
  s
    .replace(/—/g, " ")
    .split(/\s+/)
    .filter(Boolean);

describe("تسجيلات محاكاة B2 — البنية والوفاء بالنص", () => {
  it("أربعة نصوص استماع، ولكلٍّ ملفٌ ونصٌّ منطوقٌ ومرات تشغيل", () => {
    expect(LISTENING).toHaveLength(4);
    for (const t of LISTENING) {
      expect(t.audioFile, `b2-sim/${t.id}`).toMatch(/^h[1-4]\.mp3$/);
      expect(t.audioFile, `b2-sim/${t.id}`).toBe(`${t.id}.mp3`);
      expect(t.spokenText.trim().length, `b2-sim/${t.id}`).toBeGreaterThan(20);
      expect(t.maxPlays, `b2-sim/${t.id}`).toBe(2);
    }
  });

  it("النص المنطوق يساوي سطور الحوار بالكلمة (بلا أسماء متحدثين)", () => {
    for (const t of LISTENING) {
      const derived = t.lines.map((l) => l.de).join(" ").trim();
      expect(words(t.spokenText), `b2-sim/${t.id}`).toEqual(words(derived));
    }
  });

  it("كل نصٍّ ضمن حدّ مقطع النطق الواحد (بلا تقسيم)", () => {
    for (const t of LISTENING) {
      expect(t.spokenText.length, `b2-sim/${t.id} → ${t.spokenText.length}`).toBeLessThanOrEqual(
        MAX_SEGMENT_CHARS,
      );
    }
  });

  it("الملفات الأربعة موجودة وصالحة للتشغيل", () => {
    const broken: string[] = [];
    for (const t of LISTENING) {
      const file = path.join("public", B2_SIM_AUDIO_BASE.replace(/^\//, ""), t.audioFile);
      if (!isPlayableMp3(file)) broken.push(`b2-sim/${t.id} → ${t.audioFile}`);
    }
    expect(broken, "تسجيلات مفقودة أو غير صالحة").toEqual([]);
  });

  it("مجلد التسجيلات هو المُعلن (لا مسارات مطلقة أو متداخلة)", () => {
    expect(B2_SIM_AUDIO_BASE).toBe("/audio/exam-b2-sim");
  });

  it("بنكا الأسئلة كما هما: 5 قراءة × 2 و4 استماع × 2", () => {
    expect(READING).toHaveLength(5);
    expect(READING.every((t) => t.questions.length === 2)).toBe(true);
    expect(LISTENING.every((t) => t.questions.length === 2)).toBe(true);
  });
});
