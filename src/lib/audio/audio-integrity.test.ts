/**
 * ═══════════════════════════════════════════════════════════
 *  سلامة الصوت الشاملة (الدفعة 124) — الجرد الكامل لـ public/audio
 *   · كل ملفٍ صالحٌ للتشغيل (`isPlayableMp3`) — لا ملف معطوب
 *   · حوارات (360 ملفاً كانت بلا حارس): كل سطرٍ في كل حوارٍ له
 *     ملف `<id>-<رقم>.mp3`، ولا ملف يتيم في مجلدات الحوارات
 *   · شفهي A1–B1 (42 ملفاً): كل جملة شريك `t<teil>-<n>` ونموذجها
 *     `m<teil>-<n>` موجودان — بلا يتامى
 *   · أسماء المجلدات مطابقة للصيغة المعروفة + أرضيات الجرد لكل
 *     مجلد (الرصيد 592 — تُحدَّث عمداً عند إنتاج تسجيلات جديدة)
 *   · امتحانات A1–B1 وB2 ومحاكاتها والبودكاست حراسها الخاصة
 *     (level-audio · b2-hoeren-audio · b2-sim-audio · podcasts/audio)
 *     — هنا الجرد العام والفحص الآلي للقرص.
 * ═══════════════════════════════════════════════════════════
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { A1_SPRECHEN } from "@/data/exams/a1-sprechen";
import { A2_SPRECHEN } from "@/data/exams/a2-sprechen";
import { B1_SPRECHEN } from "@/data/exams/b1-sprechen";
import type { A1SpeakingPart } from "@/data/exams/a1-sprechen";
import { A1_DIALOGUES } from "@/data/dialogues/a1";
import { A2_DIALOGUES } from "@/data/dialogues/a2";
import { B1_DIALOGUES } from "@/data/dialogues/b1";
import { B2_DIALOGUES } from "@/data/dialogues/b2";
import type { DailyDialogue } from "@/data/dialogues/types";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

const ROOT = path.join("public", "audio");

const listMp3 = (dir: string, prefix = ""): string[] => {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...listMp3(path.join(dir, e.name), rel));
    else if (e.name.endsWith(".mp3")) out.push(rel);
  }
  return out.sort();
};

describe("سلامة الصوت الشاملة — كل ملفٍ صالح للتشغيل", () => {
  it("592 ملفاً على الأقل ولا ملف معطوب أو ناقص الرأس", () => {
    const broken: string[] = [];
    let total = 0;
    for (const dir of fs.readdirSync(ROOT)) {
      const full = path.join(ROOT, dir);
      if (!fs.statSync(full).isDirectory()) continue;
      for (const f of listMp3(full)) {
        total++;
        if (!isPlayableMp3(path.join(full, f))) broken.push(`${dir}/${f}`);
      }
    }
    expect(broken, "ملفات غير صالحة").toEqual([]);
    expect(total, `الرصيد=${total} · الأرضية=592`).toBeGreaterThanOrEqual(592);
  });

  it("أسماء الملفات مطابقة للصيغة المعروفة لكل مجلد", () => {
    const PATTERNS: Record<string, RegExp> = {
      "dialogues-a1": /^[\w-]+-\d+\.mp3$/,
      "dialogues-a2": /^[\w-]+-\d+\.mp3$/,
      "dialogues-b1": /^[\w-]+-\d+\.mp3$/,
      "dialogues-b2": /^[\w-]+-\d+\.mp3$/,
      "speaking-a1": /^[mt]\d+-\d+\.mp3$/,
      "speaking-a2": /^[mt]\d+-\d+\.mp3$/,
      "speaking-b1": /^[mt]\d+-\d+\.mp3$/,
      "exam-b2-sim": /^h[1-4]\.mp3$/,
    };
    const odd: string[] = [];
    for (const [dir, pat] of Object.entries(PATTERNS)) {
      for (const f of listMp3(path.join(ROOT, dir))) {
        if (!pat.test(f)) odd.push(`${dir}/${f}`);
      }
    }
    expect(odd, "أسماء خارج الصيغة — المجلدات الفرعية (m2/m3) تُسمّى كذلك").toEqual([]);
  });

  it("أرضيات الجرد لكل مجلد (لا يُفقد ملف دون قرار)", () => {
    const FLOORS: Record<string, number> = {
      "dialogues-a1": 90,
      "dialogues-a2": 90,
      "dialogues-b1": 90,
      "dialogues-b2": 90,
      "exam-a1": 41,
      "exam-a2": 46,
      "exam-b1": 48,
      "exam-b2": 15,
      "exam-b2-sim": 4,
      podcasts: 20,
      "speaking-a1": 16,
      "speaking-a2": 14,
      "speaking-b1": 12,
      "speaking-b2": 16,
    };
    const short: string[] = [];
    for (const [dir, floor] of Object.entries(FLOORS)) {
      const n = listMp3(path.join(ROOT, dir)).length;
      if (n < floor) short.push(`${dir}: ${n} < ${floor}`);
    }
    expect(short, "مجلدات ناقصة").toEqual([]);
  });
});

describe("سلامة الصوت الشاملة — الحوارات (360 ملفاً تُحرس أخيراً)", () => {
  const ALL: DailyDialogue[] = [...A1_DIALOGUES, ...A2_DIALOGUES, ...B1_DIALOGUES, ...B2_DIALOGUES];

  it("كل سطرٍ في كل حوارٍ له ملف مسجّل صالح", () => {
    const missing: string[] = [];
    let expected = 0;
    for (const d of ALL) {
      const dir = path.join(ROOT, `dialogues-${d.level.toLowerCase()}`);
      d.turns.forEach((_, i) => {
        expected++;
        const file = path.join(dir, `${d.id}-${i + 1}.mp3`);
        if (!isPlayableMp3(file)) missing.push(`${d.id}-${i + 1}`);
      });
    }
    expect(missing, "حوارات بلا تسجيل").toEqual([]);
    expect(expected, `سطور=${expected} · الأرضية=360`).toBeGreaterThanOrEqual(360);
  });

  it("لا ملف يتيم في مجلدات الحوارات", () => {
    const expected = new Set<string>();
    for (const d of ALL) {
      d.turns.forEach((_, i) => expected.add(`${d.id}-${i + 1}.mp3`));
    }
    const orphans: string[] = [];
    for (const dir of ["dialogues-a1", "dialogues-a2", "dialogues-b1", "dialogues-b2"]) {
      for (const f of listMp3(path.join(ROOT, dir))) {
        if (!expected.has(f)) orphans.push(`${dir}/${f}`);
      }
    }
    expect(orphans, "ملفات يتيمة").toEqual([]);
  });
});

describe("سلامة الصوت الشاملة — الشفهي A1–B1 (t/m لكل جملة)", () => {
  const SETS: { dir: string; parts: A1SpeakingPart[] }[] = [
    { dir: "speaking-a1", parts: A1_SPRECHEN },
    { dir: "speaking-a2", parts: A2_SPRECHEN },
    { dir: "speaking-b1", parts: B1_SPRECHEN },
  ];

  it("كل جملة شريك t ونموذجها m موجودان وصالحان", () => {
    const missing: string[] = [];
    for (const { dir, parts } of SETS) {
      for (const part of parts) {
        part.turns.forEach((_, j) => {
          for (const prefix of ["t", "m"]) {
            const file = path.join(ROOT, dir, `${prefix}${part.teil}-${j + 1}.mp3`);
            if (!isPlayableMp3(file)) missing.push(`${dir}/${prefix}${part.teil}-${j + 1}`);
          }
        });
      }
    }
    expect(missing, "تسجيلات شفهي مفقودة").toEqual([]);
  });

  it("لا ملف يتيم في مجلدات الشفهي a1–b1", () => {
    const expected = new Set<string>();
    for (const { dir, parts } of SETS) {
      for (const part of parts) {
        part.turns.forEach((_, j) => {
          expected.add(`t${part.teil}-${j + 1}.mp3`);
          expected.add(`m${part.teil}-${j + 1}.mp3`);
        });
      }
    }
    const orphans: string[] = [];
    for (const { dir } of SETS) {
      for (const f of listMp3(path.join(ROOT, dir))) {
        if (!expected.has(f)) orphans.push(`${dir}/${f}`);
      }
    }
    expect(orphans, "ملفات يتيمة").toEqual([]);
  });
});
