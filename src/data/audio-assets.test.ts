/**
 * ═══════════════════════════════════════════════════════════
 *  تدقيق أصول الصوت البشري — حارس انحدار دائم
 *  يتأكد أن كل ملف صوتي تشير إليه المنصة موجود فعلاً و MP3 صالح
 *  (لا ملف فارغ ولا ملف Placeholder):
 *   · حوارات الحياة اليومية A1–B2 (90 مقطعاً لكل مستوى = جولة لكل ملف)
 *   · صوت الاستماع A1/A2/B1 (14 ملفاً لكل مستوى)
 *   · جُمل الشريك والإجابات النموذجية في التحدث A1/A2/B1
 *  أي نقص أو ملف تالف يُسقط الاختبار — فلا يمر «B2 غير مكتمل» بصمت.
 * ═══════════════════════════════════════════════════════════
 */
import fs from "node:fs";
import path from "node:path";

import {describe, expect, it} from "vitest";

import {A1_SPRECHEN} from "@/data/exams/a1-sprechen";
import {A2_SPRECHEN} from "@/data/exams/a2-sprechen";
import {B1_SPRECHEN} from "@/data/exams/b1-sprechen";
import {DAILY_DIALOGUES, getDialoguesByLevel} from "@/data/dialogues";

const AUDIO_ROOT = path.join(process.cwd(), "public", "audio");

/** MP3 صالح: حجم معقول + رأس ID3 أو تزامن إطار MPEG */
function isPlayableMp3(file: string): boolean {
  if (!fs.existsSync(file)) return false;
  const buf = fs.readFileSync(file);
  if (buf.length < 2000) return false;
  const hasId3 = buf.subarray(0, 3).toString("latin1") === "ID3";
  const hasSync = buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0;
  return hasId3 || hasSync;
}

function assertClip(relPath: string) {
  const abs = path.join(AUDIO_ROOT, relPath);
  expect(fs.existsSync(abs), `ملف صوت مفقود: ${relPath}`).toBe(true);
  expect(isPlayableMp3(abs), `ملف صوت غير صالح: ${relPath}`).toBe(true);
}

describe("أصول الصوت — حوارات الحياة اليومية", () => {
  it("كل جولة في كل حوار لها مقطع صوتي بشري", () => {
    const missing: string[] = [];
    for (const d of DAILY_DIALOGUES) {
      const dir = `dialogues-${d.level.toLowerCase()}`;
      d.turns.forEach((_, i) => {
        const rel = `${dir}/${d.id}-${i + 1}.mp3`;
        if (!isPlayableMp3(path.join(AUDIO_ROOT, rel))) missing.push(rel);
      });
    }
    expect(missing, `مقاطع ناقصة/تالفة (${missing.length})`).toEqual([]);
  });

  it("كل المستويات الأربعة مكتملة — بما فيها B2 (15 حواراً × 90 مقطعاً)", () => {
    for (const lv of ["A1", "A2", "B1", "B2"] as const) {
      const dialogues = getDialoguesByLevel(lv);
      expect(dialogues.length, `حوارات ${lv}`).toBe(15);
      const expected = dialogues.reduce((n, d) => n + d.turns.length, 0);
      const dir = path.join(AUDIO_ROOT, `dialogues-${lv.toLowerCase()}`);
      const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mp3"));
      expect(files.length, `مقاطع ${lv}`).toBe(expected);
      expect(files.every((f) => isPlayableMp3(path.join(dir, f))), `مقطع تالف في ${lv}`).toBe(true);
    }
  });

  it("لا مقاطع يتيمة: كل ملف في مجلد المستوى يخص جولة موجودة", () => {
    const orphan: string[] = [];
    for (const lv of ["a1", "a2", "b1", "b2"]) {
      const dir = path.join(AUDIO_ROOT, `dialogues-${lv}`);
      const known = new Set(
        DAILY_DIALOGUES.filter((d) => d.level.toLowerCase() === lv).flatMap((d) =>
          d.turns.map((_, i) => `${d.id}-${i + 1}.mp3`),
        ),
      );
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith(".mp3") && !known.has(f)) orphan.push(`dialogues-${lv}/${f}`);
      }
    }
    expect(orphan, "مقاطع بلا جولة مقابلة").toEqual([]);
  });
});

describe("أصول الصوت — نماذج الاستماع A1/A2/B1", () => {
  const FILES = [
    "hoeren-t1.mp3",
    "hoeren-t2-g1-a.mp3",
    "hoeren-t2-g1-b.mp3",
    "hoeren-t2-g2-a.mp3",
    "hoeren-t2-g2-b.mp3",
    "hoeren-t2-g3-a.mp3",
    "hoeren-t2-g3-b.mp3",
    "hoeren-t2-g4-a.mp3",
    "hoeren-t2-g4-b.mp3",
    "hoeren-t3.mp3",
    "hoeren-t4-a.mp3",
    "hoeren-t4-b.mp3",
    "hoeren-t4-c.mp3",
    "hoeren-t4-d.mp3",
  ];

  for (const lv of ["a1", "a2", "b1"]) {
    it(`${lv}: 14 ملفاً لكل الأجزاء الأربعة`, () => {
      for (const f of FILES) assertClip(`exam-${lv}/${f}`);
      const dir = path.join(AUDIO_ROOT, `exam-${lv}`);
      expect(fs.readdirSync(dir).filter((f) => f.endsWith(".mp3")).length).toBe(FILES.length);
    });
  }
});

describe("أصول الصوت — التحدث (جُمل الشريك + الإجابات النموذجية)", () => {
  const LEVELS = [
    {lv: "a1", parts: A1_SPRECHEN},
    {lv: "a2", parts: A2_SPRECHEN},
    {lv: "b1", parts: B1_SPRECHEN},
  ];

  for (const {lv, parts} of LEVELS) {
    it(`${lv}: ملف لكل جملة شريك (t) وكل إجابة نموذجية (m)`, () => {
      const missing: string[] = [];
      for (const part of parts) {
        part.turns.forEach((_, i) => {
          for (const prefix of ["t", "m"]) {
            const rel = `speaking-${lv}/${prefix}${part.teil}-${i + 1}.mp3`;
            if (!isPlayableMp3(path.join(AUDIO_ROOT, rel))) missing.push(rel);
          }
        });
      }
      expect(missing, `ملفات تحدث ناقصة/تالفة (${missing.length})`).toEqual([]);
    });
  }
});
