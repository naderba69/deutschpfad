/**
 * ═══════════════════════════════════════════════════════════
 *  حراسة النماذج التدريبية A1–B1 — كل نموذج بكل أجزائه
 *  تحرس ثلاثة أشياء لا يجوز أن تنكسر مع أي نموذج جديد:
 *   1) البنية: 4 استماع · 4 قراءة · 2 كتابة · 3 تحدث، والنقاط 100/100.
 *   2) صحة كل سؤال: الإجابة الصحيحة داخل الخيارات، ولكل عبارة سبب عربي،
 *      ولا تكرار لمعرّف سؤال داخل النموذج (كان ممكناً بين الملفات).
 *   3) الصوت الصادق: كل جزء له مسار صوت، والنص الاحتياطي هو نصّ الجزء نفسه،
 *      وأي نموذج بلا مقاطع مسجّلة **يجب** أن يُعلن النطق الآلي في نصّه المعروض.
 * ═══════════════════════════════════════════════════════════
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { LEVEL_MODELS } from "@/data/exams/level-models";
import type { ExamLevel } from "@/data/exams/level-audio";

const LEVELS: ExamLevel[] = ["A1", "A2", "B1"];
const PUBLIC_DIR = path.join(process.cwd(), "public");

describe("النماذج التدريبية — البنية", () => {
  it("كل مستوى له نموذج واحد على الأقل بمعرّف مميّز", () => {
    for (const level of LEVELS) {
      const models = LEVEL_MODELS[level];
      expect(models.length, level).toBeGreaterThanOrEqual(1);
      const ids = models.map((m) => m.id);
      expect(new Set(ids).size, level).toBe(ids.length);
      for (const m of models) expect(m.id, level).toBe(`${level}-${m.id.split("-")[1]}`);
    }
  });

  it("كل نموذج: 4+4+2+3 أجزاء والنقاط 100 للاستماع و100 للقراءة", () => {
    for (const level of LEVELS) {
      for (const model of LEVEL_MODELS[level]) {
        const tag = `${model.id}`;
        expect(model.hoeren.map((t) => t.teil), `${tag} استماع`).toEqual([1, 2, 3, 4]);
        expect(model.hoeren.reduce((s, t) => s + t.points, 0), `${tag} نقاط الاستماع`).toBe(100);
        expect(model.lesen.map((t) => t.teil), `${tag} قراءة`).toEqual([1, 2, 3, 4]);
        expect(model.lesen.reduce((s, t) => s + t.points, 0), `${tag} نقاط القراءة`).toBe(100);
        expect(model.schreiben.map((t) => t.teil), `${tag} كتابة`).toEqual([1, 2]);
        expect(model.sprechen.map((t) => t.teil), `${tag} تحدث`).toEqual([1, 2, 3]);
      }
    }
  });

  /**
   * الأعداد المقيسة فعلاً (وليست تقديراً): الاستماع 15 عنصراً في المستويات
   * الثلاثة (rf 4 · mcq 4 · mcq 4 · mcq 3)، والقراءة 12 في A1 (جزؤه الرابع
   * سؤالان) و14 في A2/B1 (جزؤه الرابع rf بأربع عبارات) — وهي الأرقام المعلنة
   * في رأس كل ملف بيانات. أي نموذج جديد يخالف مستوىً يوقفه هذا الحارس.
   */
  const LESEN_ITEMS: Record<ExamLevel, number> = { A1: 12, A2: 14, B1: 14 };

  it("عدد العناصر القابلة للتصحيح مطابق للمعلن لكل مستوى", () => {
    for (const level of LEVELS) {
      for (const model of LEVEL_MODELS[level]) {
        const hItems = model.hoeren.reduce(
          (s, t) => s + (t.statements?.length ?? 0) + (t.questions?.length ?? 0) + (t.items?.length ?? 0),
          0,
        );
        const lItems = model.lesen.reduce(
          (s, t) => s + (t.statements?.length ?? 0) + (t.questions?.length ?? 0) + (t.items?.length ?? 0) + (t.gap?.gapOrder.length ?? 0),
          0,
        );
        expect(hItems, `${model.id} استماع`).toBe(15);
        expect(lItems, `${model.id} قراءة`).toBe(LESEN_ITEMS[level]);
      }
    }
  });
});

describe("النماذج التدريبية — صحة الأسئلة", () => {
  it("كل إجابة صحيحة داخل الخيارات، وكل عبارة rf لها سبب عربي", () => {
    for (const level of LEVELS) {
      for (const model of LEVEL_MODELS[level]) {
        for (const parts of [model.hoeren, model.lesen]) {
          for (const part of parts) {
            for (const q of part.questions ?? []) {
              expect(q.correct, `${model.id}/${part.title}/${q.id}`).toBeGreaterThanOrEqual(0);
              expect(q.correct, `${model.id}/${part.title}/${q.id}`).toBeLessThan(q.options.length);
              expect(q.whyAr?.length ?? 0, `${model.id}/${q.id}: لا سبب عربي`).toBeGreaterThan(5);
            }
            for (const s of part.statements ?? []) {
              expect(s.whyAr?.length ?? 0, `${model.id}/${s.id}: لا سبب عربي`).toBeGreaterThan(5);
              expect(typeof s.isTrue, `${model.id}/${s.id}`).toBe("boolean");
            }
          }
        }
      }
    }
  });

  it("لا تكرار لمعرّف سؤال داخل النموذج الواحد", () => {
    for (const level of LEVELS) {
      for (const model of LEVEL_MODELS[level]) {
        const ids: string[] = [];
        for (const parts of [model.hoeren, model.lesen]) {
          for (const part of parts) {
            ids.push(...(part.questions ?? []).map((q) => q.id));
            ids.push(...(part.statements ?? []).map((s) => s.id));
            ids.push(...(part.items ?? []).map((i) => i.id));
          }
        }
        expect(new Set(ids).size, `${model.id}: ${ids.join(",")}`).toBe(ids.length);
      }
    }
  });

  it("الكتابة: حد أدنى للكلمات ونقاط مطلوبة وبنية وعبارات", () => {
    for (const level of LEVELS) {
      for (const model of LEVEL_MODELS[level]) {
        for (const t of model.schreiben) {
          expect(t.minWords, `${model.id} كتابة ${t.teil}`).toBeGreaterThan(0);
          expect(t.requires.length, `${model.id} كتابة ${t.teil}`).toBeGreaterThanOrEqual(2);
          expect(t.aufgabeDe.length, `${model.id} كتابة ${t.teil}`).toBeGreaterThan(40);
          expect(t.struktur.length).toBeGreaterThanOrEqual(3);
          expect(t.redemittel.length).toBeGreaterThanOrEqual(3);
        }
      }
    }
  });

  it("التحدث: كل جزء بحوار وعبارات نموذجية وقائمة فحص", () => {
    for (const level of LEVELS) {
      for (const model of LEVEL_MODELS[level]) {
        for (const part of model.sprechen) {
          expect(part.turns.length, `${model.id} تحدث ${part.teil}`).toBeGreaterThan(0);
          expect(part.checklistAr.length, `${model.id} تحدث ${part.teil}`).toBeGreaterThanOrEqual(2);
          for (const turn of part.turns) {
            expect(turn.partnerDe.length).toBeGreaterThan(3);
            expect(turn.modelDe.length).toBeGreaterThan(3);
            expect(turn.modelAr.length).toBeGreaterThan(2);
          }
        }
      }
    }
  });
});

describe("النماذج التدريبية — الصوت الصادق", () => {
  it("لكل جزء استماع مسار صوت بنصّ الجزء نفسه وعدد مرات التشغيل الرسمي", () => {
    for (const level of LEVELS) {
      for (const model of LEVEL_MODELS[level]) {
        expect(model.audio.length, model.id).toBe(model.hoeren.length);
        model.hoeren.forEach((part, i) => {
          const track = model.audio[i];
          expect(track.fallbackText, `${model.id} جزء ${part.teil}`).toBe(part.audioText);
          expect(track.maxPlays, `${model.id} جزء ${part.teil}`).toBe(part.allowRepeat ? 2 : 1);
        });
      }
    }
  });

  it("كل ملف صوت مُشار إليه موجود على القرص وحجمه معقول وترويسته MP3", () => {
    const problems: string[] = [];
    for (const level of LEVELS) {
      for (const model of LEVEL_MODELS[level]) {
        for (const track of model.audio) {
          for (const file of track.files) {
            const full = path.join(PUBLIC_DIR, track.base, file);
            const label = `${model.id} → ${track.base}/${file}`;
            if (!fs.existsSync(full)) {
              problems.push(`مفقود: ${label}`);
              continue;
            }
            const buf = fs.readFileSync(full);
            if (buf.length < 2000) problems.push(`صغير (${buf.length} B): ${label}`);
            // ترويسة MP3: وسم ID3 أو تزامن إطار MPEG (0xFF 0xEx) — نفس ما يفحصه mp3check
            const hasId3 = buf.subarray(0, 3).toString("latin1") === "ID3";
            const hasSync = buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0;
            if (!hasId3 && !hasSync) problems.push(`ليست MP3: ${label}`);
          }
        }
      }
    }
    expect(problems).toEqual([]);
  });

  it("لا ملف صوتي في مجلدات النماذج الثانية خارج المُشار إليه (ولا ملف مفقود)", () => {
    const problems: string[] = [];
    for (const level of LEVELS) {
      const byBase = new Map<string, Set<string>>();
      for (const model of LEVEL_MODELS[level]) {
        const base = model.audio[0].base;
        const files = byBase.get(base) ?? new Set<string>();
        for (const track of model.audio) for (const file of track.files) files.add(file);
        byBase.set(base, files);
      }
      for (const [base, used] of byBase) {
        // مجلد الجذر يخصّ النموذج الأول ويُفحَص في level-audio.test.ts؛ هنا المجلدات
        // الفرعية لكل نموذج مرقّم (m2، m3، …) — فلا يبقى ملف يتيم في أي منها
        if (!/\/m\d+$/.test(base)) continue;
        const dir = path.join(PUBLIC_DIR, base);
        const onDisk = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".mp3")) : [];
        for (const file of onDisk) if (!used.has(file)) problems.push(`يتيم: ${base}/${file}`);
        for (const file of used) if (!onDisk.includes(file)) problems.push(`مفقود: ${base}/${file}`);
      }
    }
    expect(problems).toEqual([]);
  });

  it("تسجيلات التحدث تُستخدم فقط لجولاتها المسجّلة (لا نموذج يسمع نصّ غيره)", () => {
    for (const level of LEVELS) {
      const byBase = new Map<string, string[]>();
      for (const model of LEVEL_MODELS[level]) {
        if (!model.speakingAudioBase) continue;
        const signature = JSON.stringify(model.sprechen);
        const seen = byBase.get(model.speakingAudioBase) ?? [];
        // كل نموذج يُشير إلى نفس مجلد التسجيلات يجب أن تكون جولاته مطابقة
        if (seen.length > 0) expect(signature, `${model.id} يشير إلى تسجيلات نموذج آخر بجولات مختلفة`).toBe(seen[0]);
        else seen.push(signature);
        byBase.set(model.speakingAudioBase, seen);
      }
      // وفي المقابل: أي نموذج بجولات مختلفة **لا** يجوز أن يُشير إلى تسجيلات
      const bases = new Set(LEVEL_MODELS[level].map((m) => m.speakingAudioBase).filter(Boolean));
      for (const base of bases) {
        const users = LEVEL_MODELS[level].filter((m) => m.speakingAudioBase === base);
        const sigs = new Set(users.map((m) => JSON.stringify(m.sprechen)));
        expect(sigs.size, `${base}: ${users.length} نماذج بجولات متباعدة`).toBe(1);
      }
    }
  });

  it("النصّ المعروض يعلن حالة الصوت الحقيقية (مُسجَّل · آلي · أو الاثنان معاً)", () => {
    for (const level of LEVELS) {
      for (const model of LEVEL_MODELS[level]) {
        const withFiles = model.audio.filter((t) => t.files.length > 0).length;
        if (withFiles === 0) {
          expect(model.audioNoteAr, `${model.id} يجب أن يعلن النطق الآلي`).toContain("نطق آلي");
        } else {
          expect(model.audioNoteAr, `${model.id} يعلن المقاطع المسجّلة`).toContain("مسجّلة");
          // نموذج جزئي التسجيل لا يجوز أن يمرّ بلا إعلان الجزء الآلي
          if (withFiles < model.audio.length) {
            expect(model.audioNoteAr, `${model.id} جزئي التسجيل فعليه إعلان النطق الآلي`).toContain("نطق آلي");
          }
        }
      }
    }
  });

  it("كل جزء مسجَّل: نصّ لكل ملف (عددها واحد) وصيغة المقاطع مألوفة", () => {
    const problems: string[] = [];
    for (const level of LEVELS) {
      for (const model of LEVEL_MODELS[level]) {
        model.hoeren.forEach((part, i) => {
          const track = model.audio[i];
          if (track.files.length === 0) {
            if (track.texts && track.texts.length > 0) problems.push(`${model.id} جزء ${part.teil}: مقاطع نصّية بلا ملفات`);
            return;
          }
          // التصريح بالمقاطع (`audioSegments`) هو الشرط: من صرّح بها يجب أن تطابق
          // ملفاته عدداً ونصّاً؛ والنموذج الأول لم يعلن تقسيمه النصّي أصلاً
          // (يجمع البديل الآلي نصّ الجزء كاملاً) فيُترك على حاله بلا إنكار.
          if (part.audioSegments) {
            if (part.audioSegments.length !== track.files.length) {
              problems.push(`${model.id} جزء ${part.teil}: ${track.files.length} ملفاً مقابل ${part.audioSegments.length} نصّ مقطع`);
            }
            if (!track.texts || track.texts.join("\u0001") !== part.audioSegments.join("\u0001")) {
              problems.push(`${model.id} جزء ${part.teil}: البديل الآلي لكل ملف لا يطابق المقاطع المُعلَنة`);
            }
          }
        });
      }
    }
    expect(problems).toEqual([]);
  });

  /** تطبيع للمقارنة: حروف صغيرة، ووسوم المتحدثين وعلامات الترقيم لا تُحتسب */
  const normalize = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}ß\s]/gu, " ")
      .split(/\s+/)
      .filter(Boolean);

  it("كلمات كل مقطع مأخوذة من نصّ الجزء نفسه وبالترتيب (لا تسجيل يخالف النصّ)", () => {
    const problems: string[] = [];
    for (const level of LEVELS) {
      for (const model of LEVEL_MODELS[level]) {
        for (const part of model.hoeren) {
          if (!part.audioSegments) continue;
          const full = normalize(part.audioText);
          let cursor = 0;
          for (const segment of part.audioSegments) {
            const words = normalize(segment);
            const start = full.indexOf(words[0], cursor);
            if (start === -1) { problems.push(`${model.id} جزء ${part.teil}: «${words[0]}» ليست في النص`); break; }
            const slice = full.slice(start, start + words.length).join(" ");
            if (slice !== words.join(" ")) problems.push(`${model.id} جزء ${part.teil}: مقطع مختلف عن النص: «${segment.slice(0, 40)}…»`);
            cursor = start + words.length;
          }
        }
      }
    }
    expect(problems).toEqual([]);
  });

  it("لا نموذجان يشغّلان ملفات مسجّلة من مجلد واحد (لا يُسمع صوت نموذج في غيره)", () => {
    for (const level of LEVELS) {
      // الحارس على من **يشغّل ملفات** فعلاً: النموذج الذي لا ملفات له يقرأ بنطق
      // آلي فلا يهمّ مجلده المحتمل — ويهمّ ألا تتقاسم نماذج مسجّلة مجلداً واحداً.
      const playing = LEVEL_MODELS[level].filter((m) => m.audio.some((t) => t.files.length > 0));
      const bases = playing.map((m) => m.audio[0].base);
      expect(new Set(bases).size, `${level}: ${playing.map((m) => m.id).join(" · ")} → ${bases.join(" · ")}`).toBe(bases.length);
    }
  });
});
