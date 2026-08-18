import {describe, expect, it} from "vitest";

import {
  B2_GRAMMATIK,
  B2_HOEREN_SETS,
  B2_LESEN_SETS,
  GOETHE_B2_EXAM,
  countHoerenQuestions,
  countLesenQuestions,
} from "@/data/exams";
import {B2_READING_EXAM} from "@/data/reading/b2-exam-library";
import {B2_TOP500} from "@/data/vocabulary/b2-top500";
import {B2_EXAM_TOPICS} from "@/data/vocabulary/b2-topics";
import {FALLSTRICKE} from "@/data/exams/fallstricke";
import {WRITING_TASKS} from "@/data/writing-path";
import {getTasksByStage, STAGE_ORDER} from "@/data/writing-path";
import {lessonB205} from "@/data/lessons/b2/b2-05";
import {SCHREIB_MODELLE} from "@/data/schreibmodelle";
import {EXAM_STRATEGIEN} from "@/data/exams/strategien";

describe("محرك امتحان Goethe-B2 الرسمي", () => {
  it("القراءة: 5 أجزاء و30 سؤالاً بالضبط (كما في الامتحان الرسمي)", () => {
    expect(GOETHE_B2_EXAM.lesen).toHaveLength(5);
    expect(countLesenQuestions(GOETHE_B2_EXAM)).toBe(30);
  });

  it("الاستماع: 4 أجزاء و30 سؤالاً بالضبط", () => {
    expect(GOETHE_B2_EXAM.hoeren).toHaveLength(4);
    expect(countHoerenQuestions(GOETHE_B2_EXAM)).toBe(30);
  });

  it("الكتابة: مهمتان (منتدى ≥150 + رسمية ≥100) بالمدد الرسمية", () => {
    expect(GOETHE_B2_EXAM.schreiben).toHaveLength(2);
    const [forumsbeitrag, email] = GOETHE_B2_EXAM.schreiben;
    expect(forumsbeitrag.teil).toBe(1);
    expect(forumsbeitrag.minWords).toBeGreaterThanOrEqual(150);
    expect(email.teil).toBe(2);
    expect(email.minWords).toBeGreaterThanOrEqual(100);
    expect(GOETHE_B2_EXAM.schreibenMinutes).toBe(75);
  });

  it("المدد الرسمية: قراءة 65 · استماع 40 · شفهي 15", () => {
    expect(GOETHE_B2_EXAM.lesenMinutes).toBe(65);
    expect(GOETHE_B2_EXAM.hoerenMinutes).toBe(40);
    expect(GOETHE_B2_EXAM.sprechenMinutes).toBe(15);
    expect(GOETHE_B2_EXAM.passThreshold).toBe(60);
  });

  it("كل أجزاء القراءة والاستماع لها وقت ونقاط موجبة", () => {
    for (const teil of [...GOETHE_B2_EXAM.lesen, ...GOETHE_B2_EXAM.hoeren]) {
      expect(teil.minutes).toBeGreaterThan(0);
      expect(teil.points).toBeGreaterThan(0);
    }
  });

  it("لا معرفات مكررة في أسئلة MCQ لكل جزء", () => {
    for (const teil of [...GOETHE_B2_EXAM.lesen, ...GOETHE_B2_EXAM.hoeren]) {
      const ids = (teil.questions ?? []).map((q) => q.id);
      expect(new Set(ids).size, `معرفات مكررة في Teil ${teil.teil}`).toBe(ids.length);
    }
  });

  it("كل MCQ له correctIndex صالح داخل الخيارات", () => {
    for (const teil of [...GOETHE_B2_EXAM.lesen, ...GOETHE_B2_EXAM.hoeren]) {
      for (const q of teil.questions ?? []) {
        expect(q.correct).toBeGreaterThanOrEqual(0);
        expect(q.correct).toBeLessThan(q.options.length);
      }
    }
  });

  it("Teil 3 (قراءة): الفتحات كلها معرّفة في بنك الجمل والبنك فيه جمل زائدة", () => {
    const teil3 = GOETHE_B2_EXAM.lesen.find((t) => t.teil === 3)!;
    expect(teil3.kind).toBe("gap");
    const bankIds = new Set(teil3.gap!.sentenceBank.map((s) => s.id));
    expect(teil3.gap!.gapOrder).toHaveLength(6);
    for (const id of teil3.gap!.gapOrder) {
      expect(bankIds.has(id), `جملة ${id} غير موجودة في البنك`).toBe(true);
    }
    // جملتان زائدتان على الأقل (8 في البنك، 6 مستخدمة)
    expect(teil3.gap!.sentenceBank.length - teil3.gap!.gapOrder.length).toBeGreaterThanOrEqual(2);
    // لا تكرار في الترتيب
    expect(new Set(teil3.gap!.gapOrder).size).toBe(6);
  });

  it("Teil 1 (قراءة): 6 نصوص و8 عناوين بلا تكرار (allowRepeat=false)", () => {
    const teil1 = GOETHE_B2_EXAM.lesen.find((t) => t.teil === 1)!;
    expect(teil1.items).toHaveLength(6);
    expect(teil1.categories).toHaveLength(8);
    expect(teil1.allowRepeat).toBe(false);
    for (const it of teil1.items!) {
      expect(teil1.categories!.some((c) => c.id === it.categoryId)).toBe(true);
    }
  });

  it("Teil 4 (قراءة): 4 مواقف و8 عبارات مع إمكانية التكرار", () => {
    const teil4 = GOETHE_B2_EXAM.lesen.find((t) => t.teil === 4)!;
    expect(teil4.items).toHaveLength(8);
    expect(teil4.categories).toHaveLength(4);
    expect(teil4.allowRepeat).toBe(true);
  });

  it("التحدث: مواضيع Vortrag ≥3 ومواضيع Diskussion ≥3 بحجج", () => {
    expect(GOETHE_B2_EXAM.sprechen.vortrag.length).toBeGreaterThanOrEqual(3);
    expect(GOETHE_B2_EXAM.sprechen.diskussion.length).toBeGreaterThanOrEqual(3);
    for (const d of GOETHE_B2_EXAM.sprechen.diskussion) {
      expect(d.pro.length).toBeGreaterThanOrEqual(2);
      expect(d.kontra.length).toBeGreaterThanOrEqual(2);
    }
    for (const v of GOETHE_B2_EXAM.sprechen.vortrag) {
      expect(v.leitfragen.length).toBeGreaterThanOrEqual(3);
    }
  });

  /* ═══════ المرحلة 2: ثلاثة نماذج لكل مهارة ═══════ */
  it("القراءة: 3 نماذج كاملة × 30 سؤالاً (المرحلة 2)", () => {
    expect(B2_LESEN_SETS).toHaveLength(3);
    for (const set of B2_LESEN_SETS) {
      expect(set).toHaveLength(5);
      const n = countLesenQuestions({ ...GOETHE_B2_EXAM, lesen: set });
      expect(n).toBe(30);
    }
  });

  it("الاستماع: 3 نماذج كاملة × 30 سؤالاً (المرحلة 2)", () => {
    expect(B2_HOEREN_SETS).toHaveLength(3);
    for (const set of B2_HOEREN_SETS) {
      expect(set).toHaveLength(4);
      const n = countHoerenQuestions({ ...GOETHE_B2_EXAM, hoeren: set });
      expect(n).toBe(30);
    }
  });

  it("بنك القواعد والمفردات B2: 60 سؤالاً (30 قواعد + 30 مفردات) بلا تكرار", () => {
    expect(B2_GRAMMATIK).toHaveLength(60);
    const gram = B2_GRAMMATIK.filter((q: { skill: string }) => q.skill === "grammatik");
    const wort = B2_GRAMMATIK.filter((q: { skill: string }) => q.skill === "wortschatz");
    expect(gram).toHaveLength(30);
    expect(wort).toHaveLength(30);
    const ids = B2_GRAMMATIK.map((q: { id: string }) => q.id);
    expect(new Set(ids).size).toBe(60);
    for (const q of B2_GRAMMATIK) {
      expect(q.correct).toBeGreaterThanOrEqual(0);
      expect(q.correct).toBeLessThan(q.options.length);
    }
  });

  it("مكتبة القراءة B2: نصوص بأسئلة صحيحة (المرحلة 2)", () => {
    expect(B2_READING_EXAM.length).toBeGreaterThanOrEqual(10);
    for (const t of B2_READING_EXAM) {
      expect(t.questions.length).toBeGreaterThanOrEqual(3);
      for (const q of t.questions) {
        expect(q.correct).toBeGreaterThanOrEqual(0);
        expect(q.correct).toBeLessThan(q.options.length);
      }
    }
  });

  it("نماذج الكتابة: sm-3 مطابق لمهمتَي المحرك (Homeoffice + Beschwerde)", () => {
    const sm3 = SCHREIB_MODELLE.find((m: { id: string }) => m.id === "sm-3");
    expect(sm3).toBeDefined();
    expect(sm3!.forum.length).toBe(2); // Gut + Sehr gut
    expect(sm3!.email.length).toBe(2);
  });

  it("استراتيجيات الامتحان: كل الأجزاء الـ 13 مغطاة", () => {
    expect(EXAM_STRATEGIEN).toHaveLength(13); // 5 قراءة + 4 استماع + 2 كتابة + 2 تحدث
    for (const s of EXAM_STRATEGIEN) {
      expect(s.steps.length).toBeGreaterThanOrEqual(3);
      expect(s.traps.length).toBeGreaterThanOrEqual(1);
    }
  });

  /* ═══════ المرحلة 3: الإتقان ═══════ */

  it("درس b2-05: أُضيفت كتلة Funktionsverbgefüge (نظرية ≥ 3) + تمارين e16-e20", () => {
    expect(lessonB205.theory.some((t) => t.id === "t6")).toBe(true);
    expect(lessonB205.practiceBank.length).toBeGreaterThanOrEqual(15);
    expect(lessonB205.practiceBank.some((p) => p.id === "e20")).toBe(true);
  });

  it("Top 500: 500+ كلمة فريدة موزعة على الـ18 موضوعاً بتواتر 1-3", () => {
    expect(B2_TOP500.length).toBeGreaterThanOrEqual(500);
    const words = B2_TOP500.map((e) => e.de);
    expect(new Set(words).size).toBe(words.length); // لا تكرار
    const topics = new Set(B2_TOP500.map((e) => e.topic));
    for (const t of B2_EXAM_TOPICS) {
      expect(topics.has(t.id), `الموضوع ${t.id} غير ممثل`).toBe(true);
    }
    for (const e of B2_TOP500) {
      expect([1, 2, 3]).toContain(e.freq);
      expect(e.de.length).toBeGreaterThan(0);
      expect(e.ar.length).toBeGreaterThan(0);
    }
    // التوازن: كل موضوع ≥ 20 كلمة
    const byTopic: Record<string, number> = {};
    for (const e of B2_TOP500) byTopic[e.topic] = (byTopic[e.topic] ?? 0) + 1;
    for (const t of B2_EXAM_TOPICS) {
      expect((byTopic[t.id] ?? 0)).toBeGreaterThanOrEqual(20);
    }
  });

  it("فخاخ الامتحان: 12 تمريناً بشرح مصيدة + صحيح", () => {
    expect(FALLSTRICKE).toHaveLength(12);
    for (const f of FALLSTRICKE) {
      expect(f.options.length).toBeGreaterThanOrEqual(3);
      expect(f.correct).toBeGreaterThanOrEqual(0);
      expect(f.correct).toBeLessThan(f.options.length);
      expect(f.trap).toBeGreaterThanOrEqual(0);
      expect(f.trap).toBeLessThan(f.options.length);
      expect(f.trap).not.toBe(f.correct); // المصيدة ≠ الصحيح
      expect(f.whyTrap.length).toBeGreaterThan(10);
      expect(f.whyCorrect.length).toBeGreaterThan(10);
    }
  });

  it("مسار الكتابة: مرحلة الترجمة فيها 20 مهمة عربية→ألمانية", () => {
    const translation = getTasksByStage("translation");
    expect(translation).toHaveLength(20);
    for (const t of translation) {
      expect(t.taskType).toBe("Übersetzung");
      expect(t.requires.length).toBeGreaterThanOrEqual(4); // كلمات مفتاحية للتقييم
      expect(t.exampleDe.length).toBeGreaterThan(20);
    }
    // ترتيب المراحل يشمل الترجمة في النهاية
    expect(STAGE_ORDER.map((s: { key: string }) => s.key)).toContain("translation");
  });

  it("المقيّم يدعم Übersetzung: نص بكل المفاتيح يحصل على Erfüllung مرتفع", async () => {
    const { evaluateWriting } = await import("@/lib/writing/goethe-local");
    const good = await evaluateWriting(
      "Die Arbeitslosigkeit ist im letzten Jahr gesunken, aber die Unternehmen suchen Experten. Es ist wichtig, in die Bildung zu investieren.",
      "Übersetzung",
      ["Arbeitslosigkeit", "gesunken", "Experten", "investieren", "Bildung"],
    );
    expect(good.scores[0].score).toBeGreaterThanOrEqual(4); // Erfüllung
  });
});
