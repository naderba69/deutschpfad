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
    for (const item of review as any[]) {
      const key = item.questionDe ?? item.questionAr ?? item.instructionAr?.replace(/^مراجعة تراكمية من مستوى سابق: /, "");
      expect(allowed.has(key)).toBe(true);
    }
  });
});
