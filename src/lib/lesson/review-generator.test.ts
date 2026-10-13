import { describe, expect, it } from "vitest";
import { LESSONS, getLesson } from "@/data/lessons";
import { buildInterleavedReview } from "@/lib/lesson/review-generator";

/** ترتيب المنهج كما في المولّد: المستوى ثم رقم الدرس */
const LEVEL_RANK: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3 };
const seq = (id: string) => Number(id.split("-")[1] ?? 0);
const sequence = [...LESSONS].sort(
  (a, b) => (LEVEL_RANK[a.level] ?? 0) - (LEVEL_RANK[b.level] ?? 0) || seq(a.id) - seq(b.id),
);

function questionKeys(lessons: typeof LESSONS) {
  return new Set(
    lessons.flatMap((l) =>
      l.miniTest
        .filter((q) => q.type === "multiple-choice")
        .map((q: any) => q.questionDe ?? q.questionAr ?? q.instructionAr),
    ),
  );
}

describe("مراجعة الدروس السابقة تعتمد على تسلسل المنهج", () => {
  it.each(["a1-10", "a1-08", "b1-11"])("كل أسئلة مراجعة %s تأتي من دروس سابقة له فعلاً", async (id) => {
    const lesson = getLesson(id);
    expect(lesson).toBeDefined();
    const position = sequence.findIndex((l) => l.id === id);
    const earlier = sequence.slice(0, position);
    const allowed = questionKeys(earlier);

    const review = await buildInterleavedReview(lesson!);
    expect(review.length).toBeGreaterThan(0);

    // المراجعة اليدوية (review مكتوب في الدرس) تُحكم بإحالتها إلى درس سابق
    // مسمّى بمعرّفه، لا بمطابقة نصّ سؤال من الاختبار المصغّر. المولّد التلقائي
    // يبقى مُختبَراً بالشرط الأصلي أدناه.
    if (lesson!.review && lesson!.review.length > 0) {
      const earlierIds = new Set(earlier.map((l) => l.id));
      for (const item of review as any[]) {
        const ids = [...String(item.instructionAr ?? "").matchAll(/\b([ab][12]-\d{2})\b/g)].map((m) => m[1]);
        expect(ids.length, `${item.id} يسمّي درسه المصدر`).toBeGreaterThan(0);
        for (const sid of ids) expect(earlierIds.has(sid), `${item.id} يحيل إلى درس سابق: ${sid}`).toBe(true);
      }
      return;
    }

    for (const item of review as any[]) {
      const key = item.questionDe ?? item.questionAr ?? item.instructionAr?.replace(/^مراجعة تراكمية من مستوى سابق: /, "");
      expect(allowed.has(key)).toBe(true);
    }
  });
});
