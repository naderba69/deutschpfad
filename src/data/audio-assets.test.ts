/**
 * ═══════════════════════════════════════════════════════════
 *  تدقيق أصول الصوت — حارس انحدار دائم
 *  يتأكد أن كل ملف صوتي تشير إليه المنصة موجود فعلاً و MP3 صالح
 *  (لا ملف فارغ ولا ملف Placeholder):
 *   · حوارات الحياة اليومية A1–B2 (90 مقطعاً لكل مستوى = جولة لكل ملف)
 *   · صوت الاستماع A1/A2/B1 (14 ملفاً لكل مستوى) — تسجيلات صوتية
 *   · صوت الاستماع B2 (5 ملفات mp3 لكل نموذج a/b/c في public/audio/exam-b2/)
 *   · وترويسات مصادر الاستماع تعلن **حالة الصوت الحقيقية** المُقاسة على القرص
 *     (مسجّل بعدده أو آلي) — فلا تتقادم جملة «غير مسجّلة بعد» بصمت
 *   · جُمل الشريك والإجابات النموذجية في التحدث A1/A2/B1
 *  أي نقص أو ملف تالف يُسقط الاختبار — فلا يمر نقص بصمت.
 * ═══════════════════════════════════════════════════════════
 */
import fs from "node:fs";
import path from "node:path";

import {describe, expect, it} from "vitest";

import {A1_SPRECHEN} from "@/data/exams/a1-sprechen";
import {A2_SPRECHEN} from "@/data/exams/a2-sprechen";
import {B1_SPRECHEN} from "@/data/exams/b1-sprechen";
import {DAILY_DIALOGUES, getDialoguesByLevel} from "@/data/dialogues";
import {B2_HOEREN_SET_KEYS, expectedB2Files} from "@/data/exams/b2-hoeren-audio";
import {LEVEL_MODELS} from "@/data/exams/level-models";

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

describe("أصول الصوت — نماذج استماع B2 (5 ملفات لكل نموذج)", () => {
  it("البيان يطلب 5 ملفات بأسماء A1–B1 لكل نموذج من الثلاثة", () => {
    B2_HOEREN_SET_KEYS.forEach((key, si) => {
      const files = expectedB2Files(si);
      expect(files, `النموذج ${key}`).toHaveLength(5);
      expect(files).toContain("hoeren-t1.mp3");
      expect(files).toContain("hoeren-t4-b.mp3");
    });
  });

  for (const [si, key] of B2_HOEREN_SET_KEYS.entries()) {
    it(`exam-b2/${key}: إمّا مكتمل (5 ملفات صالحة) أو غير مُنتَج بعد — لا أنصاف`, () => {
      const dir = path.join(AUDIO_ROOT, "exam-b2", key);
      const expected = expectedB2Files(si);
      const present = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".mp3")) : [];
      if (present.length === 0) {
        // مقبول: النموذج لم يُنتَج بعد، والامتحان يقرأ نقصه آلياً ويعلن ذلك للمتعلم
        return;
      }
      const broken = expected.filter((f) => !isPlayableMp3(path.join(dir, f)));
      expect(
        broken,
        `نموذج ${key}: مقاطع ناقصة/تالفة (${broken.length}) — إمّا 5 ملفات كاملة أو مجلد فارغ`,
      ).toEqual([]);
      const orphans = present.filter((f) => !expected.includes(f));
      expect(orphans, `نموذج ${key}: ملفات لا موضع لها في البيان`).toEqual([]);
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

/* ═══════════════════════════════════════════════════════════
   ادعاءات الصوت في ترويسات المصادر — مطابقة القرص
   الدافع (تدقيق 2026-10-16): سبع ترويسات كانت تدّعي النطق الآلي أو «غير مسجّلة
   بعد» والنموذج مسجّل بالكامل على القرص (وأخرى بلا إعلان أصلاً) — فلا أحد
   يمسك تقادم الجملة. هذا الحارس يقرأ الترويسة ويقارنها ببيان المقاطع وبالقرص.
   ═══════════════════════════════════════════════════════════ */
describe("أصول الصوت — ترويسات المصادر تعلن الحالة الحقيقية", () => {
  /** ادعاء نطق آلي حصراً — الكلمة «آلي» مسموحة في سياق «احتياط» فقط */
  const TTS_ONLY_CLAIM = /غير مسجّلة|بنطق آلي|عبر TTS|عبر المحرك/;

  function headerOf(relFile: string): string {
    const src = fs.readFileSync(path.join(process.cwd(), "src", "data", "exams", relFile), "utf8");
    const end = src.indexOf("*/");
    expect(end, `${relFile}: ترويسة غير موجودة`).toBeGreaterThan(0);
    return src.slice(0, end);
  }

  function filesOnDisk(relBase: string): string[] {
    const dir = path.join(AUDIO_ROOT, relBase.replace(/^\/audio\//, ""));
    return fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".mp3")).sort() : [];
  }

  function checkClaim(label: string, relFile: string, base: string, declared: string[]) {
    const header = headerOf(relFile);
    const disk = filesOnDisk(base);
    const problems: string[] = [];
    if (declared.length === 0) {
      problems.push(`${label}: لا مقاطع في البيان`);
    } else {
      if (TTS_ONLY_CLAIM.test(header)) {
        problems.push(`${label} (${relFile}): الترويسة تدّعي نطقاً آلياً والبيان فيه ${declared.length} مقطعاً`);
      }
      if (!/مسجّل/.test(header)) problems.push(`${label} (${relFile}): الترويسة لا تعلن التسجيل`);
      if (!header.includes(String(declared.length))) {
        problems.push(`${label} (${relFile}): الترويسة لا تذكر العدد ${declared.length}`);
      }
      for (const f of declared) {
        if (!disk.includes(f)) problems.push(`${label}: ملف مفقود على القرص ${base}/${f}`);
      }
      for (const f of disk) {
        if (!declared.includes(f)) problems.push(`${label}: ملف يتيم بلا موضع في البيان ${base}/${f}`);
      }
    }
    return problems;
  }

  it("A1–B1: كل نموذج استماع مطابق لترويسته (العدد والملفات)", () => {
    const problems: string[] = [];
    for (const level of ["A1", "A2", "B1"] as const) {
      const models = LEVEL_MODELS[level];
      for (let mi = 0; mi < models.length; mi++) {
        const model = models[mi];
        const relFile = mi === 0 ? `${level.toLowerCase()}-hoeren.ts` : `${level.toLowerCase()}-model${mi + 1}-hoeren.ts`;
        const bases = [...new Set(model.audio.filter((t) => t.files.length > 0).map((t) => t.base))];
        if (bases.length === 0) {
          problems.push(`${model.id}: نموذج بلا مقاطع — يجب حذفه أو تسجيله`);
          continue;
        }
        for (const base of bases) {
          const declared = model.audio.filter((t) => t.base === base).flatMap((t) => t.files).sort();
          problems.push(...checkClaim(model.id, relFile, base, declared));
        }
      }
    }
    expect(problems).toEqual([]);
  });

  it("B2: النماذج a/b/c مطابقة لترويساتها", () => {
    const problems: string[] = [];
    B2_HOEREN_SET_KEYS.forEach((key, si) => {
      const relFile = key === "a" ? "b2-hoeren.ts" : `b2-hoeren-${key}.ts`;
      problems.push(...checkClaim(`B2-${key.toUpperCase()}`, relFile, `exam-b2/${key}`, expectedB2Files(si).sort()));
    });
    expect(problems).toEqual([]);
  });
});
