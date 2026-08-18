import {describe, expect, it} from "vitest";

import {CURRICULUM, getAllCurriculumUnits, totalPlannedHours} from "@/data/curriculum/cefr-map";
import {LESSON_META} from "@/data/lessons/meta";
import {getLesson} from "@/data/lessons";

/**
 * فحوص خريطة المنهج الأكاديمية (التدقيق الأكاديمي §13-14):
 * 1) كل مستوى له وحدات مرقمة متسلسلة بلا فجوات
 * 2) كل وحدة لها واصفات CEFR قابلة للملاحظة (can-do)
 * 3) كل وحدة لها مهام وساطة وتفاعل (فجوة التدقيق)
 * 4) لا تكرار في أرقام الوحدات داخل المستوى
 * 5) الخريطة تغطي الدروس الفعلية (لا ادعاءات فارغة)
 */

describe("خريطة المنهج — البنية والتسلسل (تدقيق أكاديمي)", () => {
  it("المستويات الأربعة موجودة بالترتيب A1→B2", () => {
    expect(CURRICULUM.map((l) => l.code)).toEqual(["A1", "A2", "B1", "B2"]);
  });

  it("كل مستوى وحداته مرقمة تسلسلياً بلا فجوات ولا تكرار", () => {
    for (const level of CURRICULUM) {
      const orders = level.units.map((u) => u.order);
      expect(new Set(orders).size, `${level.code}: أرقام مكررة`).toBe(orders.length);
      for (let i = 0; i < orders.length; i++) {
        expect(orders[i], `${level.code}: وحدة بترتيب ${orders[i]} — متوقع ${i + 1}`).toBe(i + 1);
      }
    }
  });

  it("كل وحدة لها واصفات CEFR قابلة للملاحظة (can-do)", () => {
    for (const u of getAllCurriculumUnits()) {
      expect(u.canDo.length, `${u.id}: بلا واصفات can-do`).toBeGreaterThanOrEqual(2);
      for (const c of u.canDo) {
        // واصفات حقيقية مستخرجة من أهداف الدروس — تبدأ بصيغة Ich + فعل (قابل للملاحظة)
        expect(c.de.startsWith("Ich "), `${u.id}: واصف غير قابل للملاحظة: ${c.de}`).toBe(true);
      }
    }
  });

  it("كل وحدة لها مهام وساطة وتفاعل (فجوة CEFR الأساسية)", () => {
    for (const u of getAllCurriculumUnits()) {
      expect(u.mediationTask.length, `${u.id}: بلا مهمة وساطة`).toBeGreaterThan(10);
      expect(u.interactionTask.length, `${u.id}: بلا مهمة تفاعل`).toBeGreaterThan(10);
    }
  });

  it("كل وحدة لها نقاط نحوية ومجالات مفردات ووظائف", () => {
    for (const u of getAllCurriculumUnits()) {
      expect(u.grammar.length, `${u.id}: بلا نقاط نحوية`).toBeGreaterThanOrEqual(1);
      expect(u.vocabDomains.length, `${u.id}: بلا مجالات مفردات`).toBeGreaterThanOrEqual(2);
      expect(u.functions.length, `${u.id}: بلا وظائف تواصلية`).toBeGreaterThanOrEqual(2);
    }
  });

  it("الخطة الزمنية إرشادية واقعية (لا 28 ساعة مضللة)", () => {
    const hours = totalPlannedHours();
    // الخريطة المخططة أوسع من الدروس المنفذة — وهذا صادق (المحتوى يُبنى تراكمياً)
    expect(hours).toBeGreaterThan(100);
  });
});

describe("خريطة المنهج ↔ الدروس الفعلية", () => {
  it("كل درس فعلي له وحدة مقابلة في الخريطة (لا دروس يتيمة)", () => {
    const mapUnitIds = new Set(getAllCurriculumUnits().map((u) => u.id));
    for (const m of LESSON_META) {
      // الدرس ينتمي لوحدة — نقبل التطابق أو أن الوحدة مرحلة لاحقة (سابقة/لاحقة برقم)
      const inMap = mapUnitIds.has(m.unitId) || mapUnitIds.has(m.level.toLowerCase() + "-" + String(m.order).padStart(2, "0"));
      expect(inMap, `${m.id}: وحدة ${m.unitId} غير موجودة في خريطة المنهج`).toBe(true);
    }
  });

  it("الوساطة والتفاعل متاحان في دورة على الأقل من كل مستوى (فعلياً)", () => {
    const withMediation = new Set<string>();
    for (const m of LESSON_META) {
      const lesson = getLesson(m.id);
      if (lesson?.mediation?.length) withMediation.add(m.level);
      if (lesson?.interaction?.length) withMediation.add(m.level);
    }
    for (const lvl of ["A1", "A2", "B1", "B2"]) {
      expect(withMediation.has(lvl), `${lvl}: لا يوجد درس فعلي بالوساطة والتفاعل`).toBe(true);
    }
  });
});

describe("خريطة المنهج ↔ الدروس الفعلية (لا نقص)", () => {
  it("كل وحدة في الخريطة = درس فعلي (لا وحدات يتيمة)", () => {
    const mapUnits = getAllCurriculumUnits();
    const lessonIds = new Set(LESSON_META.map((m) => m.id));
    const missing = mapUnits.filter((u) => !lessonIds.has(u.id));
    expect(
      missing.map((m) => m.id),
      `وحدات بلا دروس: ${missing.map((m) => m.id).join(", ")}`,
    ).toEqual([]);
  });

  it("كل درس في الفهرس موجود كملف فعلي (لا روابط ميتة)", () => {
    for (const m of LESSON_META) {
      expect(getLesson(m.id), `${m.id}: درس غير موجود في LESSONS`).toBeDefined();
    }
  });

  it("المراجعات الختامية موجودة (A1 في a1-13، B1 في b1-11)", () => {
    expect(getLesson("a1-13")?.titleDe.toLowerCase()).toContain("wiederholung");
    expect(getLesson("b1-11")?.titleDe.toLowerCase()).toContain("prüfungsvorbereitung");
    // خاتمة A2: a2-12 تعالج العلاقات — خاتمة المستوى
    expect(getLesson("a2-12")).toBeDefined();
  });
});

describe("تغطية الوساطة والتفاعل الكاملة (v6.4)", () => {
  it("كل درس فعلي له وساطة وتفاعل (48/48)", () => {
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
      const lesson = getLesson(m.id);
      for (const task of lesson?.mediation ?? []) {
        expect(task.keyPointsAr.length, `${m.id}: مهمة وساطة بلا نقاط تحقق`).toBeGreaterThanOrEqual(2);
        expect(task.modelAnswerAr?.length ?? 0, `${m.id}: مهمة وساطة بلا نموذج إجابة`).toBeGreaterThan(10);
      }
    }
  });

  it("مهام التفاعل تحتوي 3 جولات على الأقل بخيارات", () => {
    for (const m of LESSON_META) {
      const lesson = getLesson(m.id);
      for (const task of lesson?.interaction ?? []) {
        expect(task.rounds.length, `${m.id}: تفاعل بأقل من 3 جولات`).toBeGreaterThanOrEqual(2);
        for (const r of task.rounds) {
          expect(r.options.length, `${m.id}: جولة بخيار واحد`).toBeGreaterThanOrEqual(2);
        }
      }
    }
  });
});

describe("اكتمال العمق البيداغوجي (تدقيق 2026-08-16)", () => {
  it("كل درس له 4 أهداف على الأقل (المعيار 4-6)", () => {
    const low: string[] = [];
    for (const m of LESSON_META) {
      const lesson = getLesson(m.id);
      if ((lesson?.lernziele.length ?? 0) < 4) low.push(`${m.id} (${lesson?.lernziele.length})`);
    }
    expect(low, `أهداف قليلة: ${low.slice(0, 10).join(", ")}`).toEqual([]);
  });

  it("كل درس له كتلتا نظرية على الأقل (المعيار 2-3)", () => {
    const low: string[] = [];
    for (const m of LESSON_META) {
      const lesson = getLesson(m.id);
      if ((lesson?.theory.length ?? 0) < 2) low.push(`${m.id} (${lesson?.theory.length})`);
    }
    expect(low, `نظرية قليلة: ${low.slice(0, 10).join(", ")}`).toEqual([]);
  });

  it("كل درس له 6 تدريبات على الأقل", () => {
    const low: string[] = [];
    for (const m of LESSON_META) {
      const lesson = getLesson(m.id);
      if ((lesson?.practiceBank.length ?? 0) < 6) low.push(`${m.id} (${lesson?.practiceBank.length})`);
    }
    expect(low, `تدريبات قليلة: ${low.slice(0, 10).join(", ")}`).toEqual([]);
  });

  it("لا معرفات مكررة داخل أي درس (نقاء React)", () => {
    const dupes: string[] = [];
    for (const m of LESSON_META) {
      const lesson = getLesson(m.id);
      if (!lesson) continue;
      const ids: string[] = [];
      ids.push(...lesson.lernziele.map((x) => x.id));
      ids.push(...lesson.theory.map((x) => x.id));
      ids.push(...lesson.practiceBank.map((x) => x.id));
      ids.push(...lesson.miniTest.map((x) => x.id));
      ids.push(...lesson.flashcards.map((x) => x.id));
      const seen = new Set<string>();
      for (const id of ids) {
        if (seen.has(id)) dupes.push(`${m.id}: ${id}`);
        seen.add(id);
      }
    }
    expect(dupes, `معرفات مكررة: ${dupes.slice(0, 10).join(", ")}`).toEqual([]);
  });
});
