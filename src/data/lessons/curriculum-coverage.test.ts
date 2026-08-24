import {describe, expect, it} from "vitest";

import {getLesson} from "@/data/lessons";
import {LESSON_META} from "@/data/lessons/meta";

/**
 * تغطية المنهج — تُقاس على الدروس الفعلية مباشرة.
 *
 * أُنقذت هذه الفحوص من `src/data/curriculum/cefr-map.test.ts` عند حذف
 * خريطة `cefr-map.ts`. تلك الخريطة كانت مشتقّة من الدروس بنسبة 100%،
 * فكانت فحوصها تسأل «هل تعكس المرآةُ ما أمامها؟» — وجوابه نعم دائماً.
 * ما بقي هنا هو ما يفحص المحتوى نفسه، لا انعكاسه.
 */

describe("تغطية المنهج — الوساطة والتفاعل", () => {
  it("كل درس فعلي له وساطة وتفاعل (49/49)", () => {
    const missing: string[] = [];
    for (const m of LESSON_META) {
      const lesson = getLesson(m.id);
      if (!lesson?.mediation?.length) missing.push(`${m.id}: بلا وساطة`);
      if (!lesson?.interaction?.length) missing.push(`${m.id}: بلا تفاعل`);
    }
    expect(missing, `ناقص: ${missing.slice(0, 8).join(" | ")}`).toEqual([]);
  });

  it("مهام الوساطة تحتوي نقاط تحقق (keyPoints) ونموذج إجابة", () => {
    for (const m of LESSON_META) {
      for (const task of getLesson(m.id)?.mediation ?? []) {
        expect(task.keyPointsAr.length, `${m.id}: مهمة وساطة بلا نقاط تحقق`).toBeGreaterThanOrEqual(2);
        expect(task.modelAnswerAr?.length ?? 0, `${m.id}: مهمة وساطة بلا نموذج إجابة`).toBeGreaterThan(10);
      }
    }
  });

  it("مهام التفاعل تحتوي جولات متعددة بخيارات", () => {
    for (const m of LESSON_META) {
      for (const task of getLesson(m.id)?.interaction ?? []) {
        expect(task.rounds.length, `${m.id}: تفاعل بأقل من جولتين`).toBeGreaterThanOrEqual(2);
        for (const r of task.rounds) {
          expect(r.options.length, `${m.id}: جولة بخيار واحد`).toBeGreaterThanOrEqual(2);
        }
      }
    }
  });
});

describe("تغطية المنهج — العمق البيداغوجي", () => {
  it("كل درس له 4 أهداف على الأقل (المعيار 4-6)", () => {
    const low: string[] = [];
    for (const m of LESSON_META) {
      const n = getLesson(m.id)?.lernziele.length ?? 0;
      if (n < 4) low.push(`${m.id} (${n})`);
    }
    expect(low, `أهداف قليلة: ${low.slice(0, 10).join(", ")}`).toEqual([]);
  });

  it("كل هدف صياغته can-do قابلة للملاحظة (تبدأ بـ Ich)", () => {
    // كان هذا يُفحص على canDo في الخريطة — وهي منسوخة حرفياً من lernziele.
    // فحصه هنا على المصدر يجعله ذا معنى.
    const bad: string[] = [];
    for (const m of LESSON_META) {
      for (const z of getLesson(m.id)?.lernziele ?? []) {
        if (!z.de.startsWith("Ich ")) bad.push(`${m.id}: ${z.de}`);
      }
    }
    expect(bad, `أهداف غير قابلة للملاحظة: ${bad.slice(0, 6).join(" | ")}`).toEqual([]);
  });

  it("كل درس له كتلتا نظرية على الأقل (المعيار 2-3)", () => {
    const low: string[] = [];
    for (const m of LESSON_META) {
      const n = getLesson(m.id)?.theory.length ?? 0;
      if (n < 2) low.push(`${m.id} (${n})`);
    }
    expect(low, `نظرية قليلة: ${low.slice(0, 10).join(", ")}`).toEqual([]);
  });

  it("كل كتلة نظرية تحمل عنواناً نحوياً حقيقياً لا عنوان الدرس", () => {
    // العطب الذي أخفته الخريطة: كانت تسجّل عنوان الدرس كـ«نقطة نحوية» 48/48.
    const echoes: string[] = [];
    for (const m of LESSON_META) {
      for (const t of getLesson(m.id)?.theory ?? []) {
        if (t.titleDe.trim() === m.titleDe.trim()) echoes.push(`${m.id}: ${t.titleDe}`);
      }
    }
    expect(echoes, `كتل تكرّر عنوان الدرس: ${echoes.slice(0, 6).join(" | ")}`).toEqual([]);
  });

  it("لا عنوان كتلة نظرية مكرر عبر درسين (لا ازدواج تدريس)", () => {
    const byTitle = new Map<string, string[]>();
    for (const m of LESSON_META) {
      for (const t of getLesson(m.id)?.theory ?? []) {
        const k = t.titleDe.toLowerCase().trim();
        byTitle.set(k, [...(byTitle.get(k) ?? []), m.id]);
      }
    }
    const dups = [...byTitle.entries()].filter(([, v]) => v.length > 1);
    expect(
      dups.map(([k, v]) => `«${k}» في ${v.join("، ")}`),
      "عناوين نظرية مكررة",
    ).toEqual([]);
  });

  it("كل درس له 6 تدريبات على الأقل", () => {
    const low: string[] = [];
    for (const m of LESSON_META) {
      const n = getLesson(m.id)?.practiceBank.length ?? 0;
      if (n < 6) low.push(`${m.id} (${n})`);
    }
    expect(low, `تدريبات قليلة: ${low.slice(0, 10).join(", ")}`).toEqual([]);
  });

  it("لا معرفات مكررة داخل أي درس (نقاء React)", () => {
    const dupes: string[] = [];
    for (const m of LESSON_META) {
      const lesson = getLesson(m.id);
      if (!lesson) continue;
      const ids = [
        ...lesson.lernziele.map((x) => x.id),
        ...lesson.theory.map((x) => x.id),
        ...lesson.practiceBank.map((x) => x.id),
        ...lesson.miniTest.map((x) => x.id),
        ...lesson.flashcards.map((x) => x.id),
      ];
      const seen = new Set<string>();
      for (const id of ids) {
        if (seen.has(id)) dupes.push(`${m.id}: ${id}`);
        seen.add(id);
      }
    }
    expect(dupes, `معرفات مكررة: ${dupes.slice(0, 10).join(", ")}`).toEqual([]);
  });
});

describe("تغطية المنهج — سلامة الفهرس", () => {
  it("كل درس في الفهرس موجود كملف فعلي (لا روابط ميتة)", () => {
    for (const m of LESSON_META) {
      expect(getLesson(m.id), `${m.id}: درس غير موجود في LESSONS`).toBeDefined();
    }
  });

  it("المراجعات الختامية موجودة (A1 في a1-13، B1 في b1-11)", () => {
    expect(getLesson("a1-13")?.titleDe.toLowerCase()).toContain("wiederholung");
    expect(getLesson("b1-11")?.titleDe.toLowerCase()).toContain("prüfungsvorbereitung");
    expect(getLesson("a2-12")).toBeDefined();
  });
});
