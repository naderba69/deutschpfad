/**
 * ═══════════════════════════════════════════════════════════
 *  حارس أطقم B2 — الكتابة والتحدث (الطقم الثاني أُضيف 2026-10-16)
 *
 *  الفجوة التي أنشأته: القراءة والاستماع بثلاثة أطقم كاملة، والكتابة والتحدث
 *  بطقم واحد — فمن يُعيد الامتحان يقرأ النصّين نفسهما ويحفظهما. الحارس يثبّت:
 *   1) كل طقم كتابة: مهمتان بالصيغة الرسمية (50+50 نقطة · 45+30 دقيقة ·
 *      ≥150 و≥100 كلمة) وبنية وعبارات مساعدة كافية، ونصّ المهمة يذكر حدّ
 *      الكلمات صراحةً — فلا يخفي الطقم الحدّ عن المتعلم.
 *   2) كل طقم تحدث: 4 عروض + 4 مناقشات، و3 أسئلة إرشادية لكل عرض، و3 حجج
 *      لكل طرف في كل مناقشة، والمدد الرسمية (15 تحضير · 4 + 5).
 *   3) لا تكرار بين الأطقم (لا طقم منسوخ ليملأ العدد).
 *   4) الإجابة النموذجية: **كل** موضوع في **كل** طقم يحملها (16/16)، وفيها
 *      توجيه عربي وجملتان ألمانيتان على الأقل بين «...» — القاعدة كانت مقيّدة
 *      بالطقم الثاني وحده فمرّ الطقم الأول بلا نماذج أصلاً (تدقيق 2026-10-16).
 *   5) الامتحان الكامل يقرأ من الأطقم (الطقم الأول افتراضاً).
 * ═══════════════════════════════════════════════════════════
 */
import { describe, expect, it } from "vitest";

import { B2_SCHREIBEN_B } from "@/data/exams/b2-schreiben-b";
import { B2_SPRECHEN_B } from "@/data/exams/b2-sprechen-b";
import { B2_SCHREIBEN_SETS, B2_SPRECHEN_SETS, GOETHE_B2_EXAM } from "@/data/exams";
import type { ExamSprechen } from "@/types/exam";

/** جمل ألمانية مقتبسة بين «...» — النمط المتَّبع في الإجابات النموذجية */
function quotedGerman(text: string): string[] {
  return [...text.matchAll(/«([^»]{20,})»/g)].map((m) => m[1]);
}

describe("أطقم B2 — الكتابة", () => {
  it("طقمان كاملان، كل طقم مهمتان بالصيغة الرسمية", () => {
    expect(B2_SCHREIBEN_SETS).toHaveLength(2);
    for (const set of B2_SCHREIBEN_SETS) {
      expect(set).toHaveLength(2);
      expect(set.map((t) => t.teil)).toEqual([1, 2]);
      expect(set.map((t) => t.points)).toEqual([50, 50]);
      expect(set.map((t) => t.minutes)).toEqual([45, 30]);
      expect(set.map((t) => t.minWords)).toEqual([150, 100]);
      for (const task of set) {
        expect(task.aufgabeDe.length, task.title).toBeGreaterThan(250);
        expect(task.aufgabeAr.length, task.title).toBeGreaterThan(120);
        expect(task.requires.length, task.title).toBeGreaterThanOrEqual(4);
        expect(task.struktur.length, task.title).toBeGreaterThanOrEqual(5);
        expect(task.redemittel.length, task.title).toBeGreaterThanOrEqual(6);
        for (const r of task.requires) {
          expect(r.de.length, task.title).toBeGreaterThan(8);
          expect(r.ar.length, task.title).toBeGreaterThan(5);
        }
      }
      // نصّ المهمة يعلن حدّ الكلمات صراحةً (لا يخفيه عن المتعلم)
      expect(set[0].aufgabeDe, "Teil 1").toContain("150 Wörter");
      expect(set[1].aufgabeDe, "Teil 2").toContain("100 Wörter");
    }
  });

  it("الطقم الثاني بمهمتين جديدتين تماماً (لا نسخ من الأول)", () => {
    const firsts = new Set(B2_SCHREIBEN_SETS[0].map((t) => t.aufgabeDe));
    for (const task of B2_SCHREIBEN_SETS[1]) {
      expect(firsts.has(task.aufgabeDe), task.title).toBe(false);
    }
    const titles = new Set(B2_SCHREIBEN_SETS.flatMap((set) => set.map((t) => t.titleAr)));
    expect(titles.size).toBe(2); // العنوانان الرسميان نفسهما (Teil 1/Teil 2) في الطقمين
  });
});

describe("أطقم B2 — التحدث", () => {
  it("طقمان كاملان، والمدد الرسمية واحدة", () => {
    expect(B2_SPRECHEN_SETS).toHaveLength(2);
    for (const set of B2_SPRECHEN_SETS) {
      expect(set.vorbereitungMinutes).toBe(15);
      expect(set.teil1Minutes).toBe(4);
      expect(set.teil2Minutes).toBe(5);
      expect(set.vortrag.length).toBeGreaterThanOrEqual(4);
      expect(set.diskussion.length).toBeGreaterThanOrEqual(4);
    }
  });

  it("كل عرض: معرّف فريد و3 أسئلة إرشادية على الأقل", () => {
    for (const set of B2_SPRECHEN_SETS) {
      const ids = set.vortrag.map((v) => v.id);
      expect(new Set(ids).size, ids.join(",")).toBe(ids.length);
      for (const v of set.vortrag) {
        expect(v.leitfragen.length, v.topicDe).toBeGreaterThanOrEqual(3);
        expect(v.topicDe.length, v.id).toBeGreaterThan(15);
        expect(v.topicAr.length, v.id).toBeGreaterThan(10);
      }
    }
  });

  it("كل مناقشة: معرّف فريد و3 حجج لكل طرف على الأقل", () => {
    for (const set of B2_SPRECHEN_SETS) {
      const ids = set.diskussion.map((d) => d.id);
      expect(new Set(ids).size, ids.join(",")).toBe(ids.length);
      for (const d of set.diskussion) {
        expect(d.pro.length, d.themaDe).toBeGreaterThanOrEqual(3);
        expect(d.kontra.length, d.themaDe).toBeGreaterThanOrEqual(3);
        expect(d.positionAr.length, d.id).toBeGreaterThan(20);
        for (const arg of [...d.pro, ...d.kontra]) expect(arg.length, d.id).toBeGreaterThan(20);
      }
    }
  });

  it("لا موضوع مكرّر بين الطقمين (عرضاً أو مناقشة)", () => {
    const seen = new Map<string, string>();
    for (const set of B2_SPRECHEN_SETS) {
      for (const v of set.vortrag) {
        expect(seen.has(v.topicDe), `مكرّر: ${v.topicDe} في ${seen.get(v.topicDe)} و${v.id}`).toBe(false);
        seen.set(v.topicDe, v.id);
      }
      for (const d of set.diskussion) {
        expect(seen.has(d.themaDe), `مكرّر: ${d.themaDe} في ${seen.get(d.themaDe)} و${d.id}`).toBe(false);
        seen.set(d.themaDe, d.id);
      }
    }
  });
});

describe("أطقم B2 — الإجابات النموذجية", () => {
  /** كل موضوع في كل طقم — لا استثناء للطقم الأول */
  const topics: { id: string; set: number; kind: string; modelAr?: string }[] = B2_SPRECHEN_SETS.flatMap(
    (set, si) => [
      ...set.vortrag.map((v) => ({ id: v.id, set: si + 1, kind: "عرض", modelAr: v.modelAr })),
      ...set.diskussion.map((d) => ({ id: d.id, set: si + 1, kind: "مناقشة", modelAr: d.modelAr })),
    ],
  );

  it("كل موضوع في كل طقم يحمل إجابة نموذجية — صفر استثناء (16/16)", () => {
    expect(topics.length).toBeGreaterThanOrEqual(16); // 2 طقم × (4 + 4)
    const missing = topics.filter((t) => !t.modelAr).map((t) => `طقم ${t.set} · ${t.kind} ${t.id}`);
    expect(missing, `مواضيع بلا إجابة نموذجية: ${missing.join(" · ")}`).toEqual([]);
  });

  it("كل إجابة نموذجية: توجيه عربي + 5 جمل ألمانية على الأقل", () => {
    const withModel = topics.filter((t) => t.modelAr);
    expect(withModel.length).toBeGreaterThanOrEqual(16); // بوابة حراسة الحارس
    for (const t of withModel) {
      const text = t.modelAr as string;
      expect(text.length, `${t.set}/${t.id}`).toBeGreaterThan(250);
      const german = quotedGerman(text);
      expect(german.length, `طقم ${t.set}/${t.id}: جمل ألمانية مقتبسة`).toBeGreaterThanOrEqual(5);
      expect(/[\u0600-\u06FF]/.test(text), `طقم ${t.set}/${t.id}: توجيه عربي`).toBe(true);
    }
  });
});

describe("أطقم B2 — الامتحان الكامل يقرأ من الأطقم", () => {
  it("الكتابة والتحدث الافتراضيان هما الطقم الأول، والثاني موجود لا نسخة عن نفسه", () => {
    expect(GOETHE_B2_EXAM.schreiben).toBe(B2_SCHREIBEN_SETS[0]);
    expect(GOETHE_B2_EXAM.sprechen).toBe(B2_SPRECHEN_SETS[0]);
    expect(B2_SCHREIBEN_SETS[1]).not.toBe(B2_SCHREIBEN_SETS[0]);
    expect(B2_SPRECHEN_SETS[1]).not.toBe(B2_SPRECHEN_SETS[0]);
  });

  it("نمط التعليمات الرسمي محفوظ في كل مهمة كتابة (رأي · تجربة · نصائح · إيجابيات وسلبيات)", () => {
    // Teil 1 في الصيغة الرسمية يطلب هذه الأربعة؛ أي طقم جديد يجب أن يحفظها،
    // وTeil 2 يطلب: وصف المشكلة + التفاصيل + حلّاً + مهلة.
    const patterns: [string, RegExp][] = [
      ["Teil 1", /Meinung/],
      ["Teil 1", /Erfahrungen|Beispiel/],
      ["Teil 1", /Ratschläge|empfehlen/],
      ["Teil 1", /Vorteile und Nachteile/],
      ["Teil 2", /Beschreiben Sie das Problem/],
      ["Teil 2", /fordern Sie eine Lösung/],
      ["Teil 2", /Frist/],
    ];
    const problems: string[] = [];
    for (const set of B2_SCHREIBEN_SETS) {
      const [t1, t2] = set;
      for (const [teil, re] of patterns) {
        const text = teil === "Teil 1" ? t1.aufgabeDe : t2.aufgabeDe;
        if (!re.test(text)) problems.push(`${teil}: نمط مفقود ${String(re)} — ${text.slice(0, 60)}…`);
      }
    }
    expect(problems).toEqual([]);
  });
});
