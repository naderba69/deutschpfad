/**
 * ═══════════════════════════════════════════════════════════
 *  حراسة صوت الاستماع لنماذج A1/A2/B1 — دائمة
 *  يكشف هذا الحارس ثلاثة أنواع من العطب التي كانت ممكنة قبل التوحيد:
 *   1) اسم ملف في الكود بلا ملف على القرص (يسمعه المتعلم صمتاً).
 *   2) ملف على القرص غير مُشار إليه (صوت مدفوع الثمن لا يصل لأحد).
 *   3) عدد مرات تشغيل مكتوب يدوياً في المكوّن بدل قراءته من بيانات الجزء.
 *  ويحرس كذلك أن النص الاحتياطي (النطق الآلي) هو نصّ الجزء نفسه لا نصّ آخر.
 * ═══════════════════════════════════════════════════════════
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { isPlayableMp3 } from "@/lib/audio/mp3-file";
import {
  LEVEL_AUDIO,
  LEVEL_AUDIO_BASE,
  LEVEL_AUDIO_FILES,
  LEVEL_EXAM_DATA,
  MODEL2_AUDIO_BASE,
  MODEL2_FILE_PLAN,
  MODEL3_AUDIO_BASE,
  MODEL3_FILE_PLAN,
  maxPlaysFor,
  type ExamLevel,
} from "@/data/exams/level-audio";

const LEVELS: ExamLevel[] = ["A1", "A2", "B1"];
const PUBLIC_DIR = path.join(process.cwd(), "public");

/** كل الملفات المشار إليها في مستوى */
function referenced(level: ExamLevel): string[] {
  return LEVEL_AUDIO[level].flatMap((t) => t.files);
}

describe("صوت A1/A2/B1 — البيانات والقرص على اتفاق", () => {
  it("كل مستوى: أربعة أجزاء، ولكل جزء مقاطعه من نفس مجلده", () => {
    for (const level of LEVELS) {
      expect(LEVEL_AUDIO[level], level).toHaveLength(LEVEL_EXAM_DATA[level].length);
      LEVEL_AUDIO[level].forEach((track, i) => {
        const part = LEVEL_EXAM_DATA[level][i];
        expect(track.base, `${level} جزء ${i + 1}`).toBe(LEVEL_AUDIO_BASE[level]);
        expect(track.files.length, `${level} جزء ${part.teil}`).toBeGreaterThan(0);
        expect(track.maxPlays, `${level} جزء ${part.teil}`).toBe(maxPlaysFor(part));
      });
    }
  });

  it("كل ملف مُشار إليه موجود على القرص وبحجم غير صفري", () => {
    const missing: string[] = [];
    for (const level of LEVELS) {
      for (const file of referenced(level)) {
        const full = path.join(PUBLIC_DIR, LEVEL_AUDIO_BASE[level], file);
        if (!fs.existsSync(full) || fs.statSync(full).size < 2000) missing.push(`/${LEVEL_AUDIO_BASE[level]}/${file}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it("14 ملفاً لنموذج A1 الأساسي لها ترويسة MP3 قابلة للتشغيل", () => {
    const failures: string[] = [];
    for (const file of referenced("A1")) {
      const full = path.join(PUBLIC_DIR, LEVEL_AUDIO_BASE.A1, file);
      if (!isPlayableMp3(full)) failures.push(file);
    }
    expect(referenced("A1")).toHaveLength(14);
    expect(failures).toEqual([]);
  });

  it("14 ملفاً لنموذج A2 الأساسي لها ترويسة MP3 قابلة للتشغيل", () => {
    const failures: string[] = [];
    for (const file of referenced("A2")) {
      const full = path.join(PUBLIC_DIR, LEVEL_AUDIO_BASE.A2, file);
      if (!isPlayableMp3(full)) failures.push(file);
    }
    expect(referenced("A2")).toHaveLength(14);
    expect(failures).toEqual([]);
  });

  it("14 ملفاً لنموذج B1 الأساسي لها ترويسة MP3 قابلة للتشغيل", () => {
    const failures: string[] = [];
    for (const file of referenced("B1")) {
      const full = path.join(PUBLIC_DIR, LEVEL_AUDIO_BASE.B1, file);
      if (!isPlayableMp3(full)) failures.push(file);
    }
    expect(referenced("B1")).toHaveLength(14);
    expect(failures).toEqual([]);
  });

  it("14 ملفاً لنموذج A1 الثاني لها ترويسة MP3 قابلة للتشغيل", () => {
    const files = Object.values(MODEL2_FILE_PLAN.A1).flat();
    expect(files).toHaveLength(14);
    for (const file of files) {
      const full = path.join(PUBLIC_DIR, MODEL2_AUDIO_BASE.A1, file);
      expect(fs.existsSync(full), full).toBe(true);
      expect(isPlayableMp3(full), full).toBe(true);
    }
  });

  it("17 ملفاً لنموذج A2 الثاني لها ترويسة MP3 قابلة للتشغيل", () => {
    const files = Object.values(MODEL2_FILE_PLAN.A2).flat();
    expect(files).toHaveLength(17);
    for (const file of files) {
      const full = path.join(PUBLIC_DIR, MODEL2_AUDIO_BASE.A2, file);
      expect(fs.existsSync(full), full).toBe(true);
      expect(isPlayableMp3(full), full).toBe(true);
    }
  });

  it("15 ملفاً لنموذج B1 الثاني لها ترويسة MP3 قابلة للتشغيل", () => {
    const files = Object.values(MODEL2_FILE_PLAN.B1).flat();
    expect(files).toHaveLength(15);
    for (const file of files) {
      const full = path.join(PUBLIC_DIR, MODEL2_AUDIO_BASE.B1, file);
      expect(fs.existsSync(full), full).toBe(true);
      expect(isPlayableMp3(full), full).toBe(true);
    }
  });

  it("15 ملفاً لنموذج A2 الثالث لها ترويسة MP3 قابلة للتشغيل", () => {
    const files = Object.values(MODEL3_FILE_PLAN.A2).flat();
    expect(files).toHaveLength(15);
    for (const file of files) {
      const full = path.join(PUBLIC_DIR, MODEL3_AUDIO_BASE.A2, file);
      expect(fs.existsSync(full), full).toBe(true);
      expect(isPlayableMp3(full), full).toBe(true);
    }
  });

  it("13 ملفاً لنموذج A1 الثالث لها ترويسة MP3 قابلة للتشغيل", () => {
    const files = Object.values(MODEL3_FILE_PLAN.A1).flat();
    expect(files).toHaveLength(13);
    for (const file of files) {
      const full = path.join(PUBLIC_DIR, MODEL3_AUDIO_BASE.A1, file);
      expect(fs.existsSync(full), full).toBe(true);
      expect(isPlayableMp3(full), full).toBe(true);
    }
  });

  it("19 ملفاً لنموذج B1 الثالث لها ترويسة MP3 قابلة للتشغيل", () => {
    const files = Object.values(MODEL3_FILE_PLAN.B1).flat();
    expect(files).toHaveLength(19);
    for (const file of files) {
      const full = path.join(PUBLIC_DIR, MODEL3_AUDIO_BASE.B1, file);
      expect(fs.existsSync(full), full).toBe(true);
      expect(isPlayableMp3(full), full).toBe(true);
    }
  });

  it("لا ملف صوتي في مجلدات exam-a1/a2/b1 خارج المُشار إليه", () => {
    const orphans: string[] = [];
    for (const level of LEVELS) {
      const dir = path.join(PUBLIC_DIR, LEVEL_AUDIO_BASE[level]);
      const onDisk = fs.readdirSync(dir).filter((f) => f.endsWith(".mp3"));
      const used = new Set(referenced(level));
      for (const file of onDisk) if (!used.has(file)) orphans.push(`/${LEVEL_AUDIO_BASE[level]}/${file}`);
      for (const file of used) if (!onDisk.includes(file)) orphans.push(`مفقود: ${level}/${file}`);
    }
    expect(orphans).toEqual([]);
  });

  it("النص الاحتياطي للنطق الآلي هو نصّ الجزء نفسه", () => {
    for (const level of LEVELS) {
      LEVEL_AUDIO[level].forEach((track, i) => {
        const part = LEVEL_EXAM_DATA[level][i];
        expect(track.fallbackText, `${level} جزء ${part.teil}`).toBe(part.audioText);
        expect(track.fallbackText.length, `${level} جزء ${part.teil}`).toBeGreaterThan(40);
      });
    }
  });

  it("جدول الملفات يغطي الأجزاء الأربعة بالبنية المُنتَجة (1 · 8 · 1 · 4)", () => {
    expect(Object.keys(LEVEL_AUDIO_FILES).map(Number).sort()).toEqual([1, 2, 3, 4]);
    expect(LEVEL_AUDIO_FILES[1]).toHaveLength(1);
    expect(LEVEL_AUDIO_FILES[2]).toHaveLength(8);
    expect(LEVEL_AUDIO_FILES[3]).toHaveLength(1);
    expect(LEVEL_AUDIO_FILES[4]).toHaveLength(4);
    // 14 ملفاً لكل مستوى — الرقم الذي يقيسه اختبار E2E طلباً فعلياً
    for (const level of LEVELS) expect(referenced(level), level).toHaveLength(14);
  });

  it("عدد مرات التشغيل يتبع `allowRepeat` في البيانات (لا رقم الجزء)", () => {
    for (const level of LEVELS) {
      const parts = LEVEL_EXAM_DATA[level];
      const repeats = parts.filter((p) => p.allowRepeat).map((p) => p.teil);
      const doubled = LEVEL_AUDIO[level]
        .map((track, i) => ({ track, teil: parts[i].teil }))
        .filter((x) => x.track.maxPlays === 2)
        .map((x) => x.teil);
      expect(doubled, level).toEqual(repeats);
      // الأجزاء التي تُشغَّل مرتين في النماذج الثلاثة: 1 و3 (كما في النص التعريفي)
      expect(repeats, level).toEqual([1, 3]);
    }
  });
});
