/**
 * integrity — ترتيبُ فهرس الدروس حسب المستوى والوحدة وموضع الدرس (التنقّل يعتمد ترتيب المصفوفة) ووجودُ ملف محتوى فعلي لكل درس · وكل كتلة نظرية يقابلها أثرٌ في بنك التدريب أو الاختبار أو الكتابة
 * فُصل من integrity.test.ts في الدفعة 111 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `describe` منقولة حرفياً بإعدادها الداخلي؛ والمشتركات في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { LESSONS } from "@/data/lessons";
import { LESSON_META } from "@/data/lessons/meta";

describe("ترتيب فهرس الدروس", () => {
  it("مرتّب حسب المستوى ثم الوحدة ثم ترتيب الدرس (التنقّل يعتمد موضع المصفوفة)", () => {
    const rank = { A1: 0, A2: 1, B1: 2, B2: 3 } as const;
    const keys = LESSON_META.map((l) => [rank[l.level], l.unitId, l.order] as const);
    const sorted = [...keys].sort(
      (a, b) => a[0] - b[0] || a[1].localeCompare(b[1]) || a[2] - b[2],
    );
    expect(keys).toEqual(sorted);
  });

  it("كل درس في الفهرس له ملف محتوى فعلي", () => {
    const ids = new Set(LESSONS.map((l) => l.id));
    const missing = LESSON_META.filter((m) => !ids.has(m.id)).map((m) => m.id);
    expect(missing).toEqual([]);
  });
});

describe("كل كتلة نظرية يقابلها تدريب", () => {
  /**
   * العطب: `b2-10:t2` (الأسلوب الاسمي) كان يُشرح في جدول ذي خمسة صفوف وخمسة
   * أمثلة، ثم لا يظهر منه *حرف واحد* في بنك التدريب ولا الاختبار ولا الكتابة
   * ولا البطاقات. المتعلّم يقرأ القاعدة ثم لا يُطالَب بها أبداً، فتسقط من
   * ذاكرته قبل الامتحان — والدرس يبدو مكتملاً في كل عدّ آلي.
   *
   * الحارس: لكل كتلة نظرية نستخرج «بصماتها» — الكلمات الألمانية المميِّزة من
   * صفوف الجدول وأمثلته — ونشترط أن تظهر واحدة منها على الأقل في مادة
   * التدريب. هذا فحص وجود لا فحص جودة، لكنه يمسك الانفصال التام.
   */
  const STOP = new Set([
    "der", "die", "das", "den", "dem", "des", "ein", "eine", "einen", "einem", "einer", "eines",
    "ich", "du", "er", "sie", "es", "wir", "ihr", "man", "sich", "mich", "dir", "mir",
    "ist", "sind", "war", "hat", "habe", "haben", "wird", "werden", "wurde", "sein", "kann",
    "und", "oder", "aber", "dass", "weil", "wenn", "nicht", "auch", "nur", "noch", "schon",
    "in", "im", "an", "am", "auf", "zu", "zur", "zum", "mit", "von", "vom", "für", "bei",
    "nach", "aus", "über", "unter", "vor", "als", "wie", "so", "sehr", "mehr", "gut",
  ]);

  it("لكل كتلة نظرية أثرٌ في بنك التدريب أو الاختبار أو الكتابة", () => {
    const orphans: string[] = [];
    let checked = 0;
    for (const lesson of LESSONS) {
      // مادة التدريب كاملةً: التمارين + البطاقات + قسم الأخطاء والنصائح
      const practice = JSON.stringify([
        lesson.practiceBank,
        lesson.miniTest,
        lesson.review ?? [],
        lesson.writing,
        lesson.flashcards,
        lesson.fehlerUndTipps,
      ]).toLowerCase();

      for (const t of lesson.theory) {
        checked += 1;
        // بصمات الكتلة: كلمات ألمانية ذات دلالة من الجدول والأمثلة
        const source = [
          ...(t.table?.rows ?? []).flatMap((r) => [r.label, ...r.cells]),
          ...(t.examples ?? []).map((e) => e.de),
        ].join(" ");
        const fingerprints = [
          ...new Set(
            source
              .split(/[^A-Za-zäöüßÄÖÜ-]+/)
              .map((w) => w.toLowerCase())
              .filter((w) => w.length >= 4 && !STOP.has(w)),
          ),
        ];
        if (fingerprints.length === 0) continue;
        if (!fingerprints.some((w) => practice.includes(w))) {
          orphans.push(`${lesson.id}:${t.id} «${t.titleDe}» — لا أثر لها في أي تدريب`);
        }
      }
    }
    expect(checked).toBeGreaterThan(100);
    expect(orphans, `كتل نظرية بلا تدريب:\n${orphans.join("\n")}`).toEqual([]);
  });
});
