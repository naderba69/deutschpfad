/**
 * ═══════════════════════════════════════════════════════════
 *  بناء مراجعة الأدلة في محرك الاختبارات (الدفعة 122) — حراسة
 *   · كل سؤال اختيار/قراءة/كتابة يتحول إلى عنصر مراجعة بمعرّفه
 *   · معرّفات أسئلة الفروع `${id}:${i}` — نفس مفاتيح الإجابات في
 *     `scoreSkill` (كسر المفتاح = مراجعة بلا جواب المتعلّم)
 *   · الكتابة بلا خيارات: تُعرض بالإجابة النصية والنموذج المقترح
 * ═══════════════════════════════════════════════════════════
 */
import { describe, expect, it } from "vitest";

import { buildTestResult } from "@/lib/tests/test-engine";
import type { TestQuestion } from "@/types/test";

const QUESTIONS: TestQuestion[] = [
  {
    id: "q-mcq",
    skill: "grammatik",
    level: "A1",
    kind: "mcq",
    questionDe: "Ich ___ aus Tunesien.",
    options: ["bin", "bist", "ist"],
    correctIndex: 0,
    explanation: "مع ich: bin.",
  },
  {
    id: "q-read",
    skill: "lesen",
    level: "A1",
    kind: "reading",
    questionDe: "نص قصير",
    text: "Mona hat zwei Schwestern.",
    questions: [
      { q: "Wie viele Schwestern?", qAr: "كم أختاً؟", options: ["zwei", "eine"], correct: 0, explanation: "قالت: zwei Schwestern." },
      { q: "Wer hat Schwestern?", qAr: "من؟", options: ["Mona", "Sami"], correct: 0, explanation: "النص: Mona hat …" },
    ],
  },
  {
    id: "q-write",
    skill: "schreiben",
    level: "A1",
    kind: "writing",
    questionDe: "Schreiben Sie einen Satz.",
    options: [],
    sampleAnswer: "Ich wohne in Tunis.",
  },
] as TestQuestion[];

function run(answers: Map<string, string | number | null>) {
  return buildTestResult({
    kind: "unit",
    level: "A1",
    startedAt: 0,
    finishedAt: 1000,
    questions: QUESTIONS,
    answers,
  });
}

describe("بناء مراجعة الأدلة — كل سؤالٍ بجوابه وشاهده", () => {
  it("البنية: 4 عناصر (mcq + فرعا قراءة + كتابة) بمعرّفات الإجابات نفسها", async () => {
    const res = await run(new Map());
    expect(res.review.map((r) => r.id)).toEqual(["q-mcq", "q-read:0", "q-read:1", "q-write"]);
  });

  it("جواب المتعلّم يُنقل بالفهرس، والمفقود = null (لم يُجب)", async () => {
    const res = await run(
      new Map<string, string | number | null>([
        ["q-mcq", 1],
        ["q-read:0", 0],
      ]),
    );
    const byId = Object.fromEntries(res.review.map((r) => [r.id, r]));
    expect(byId["q-mcq"].chosen).toBe(1);
    expect(byId["q-read:0"].chosen).toBe(0);
    expect(byId["q-read:1"].chosen).toBeNull();
    expect(byId["q-mcq"].correct).toBe(0);
    expect(byId["q-read:1"].options).toEqual(["Mona", "Sami"]);
  });

  it("الشروح تُنقل إلى العناصر (whyAr في العرض)", async () => {
    const res = await run(new Map());
    const byId = Object.fromEntries(res.review.map((r) => [r.id, r]));
    expect(byId["q-mcq"].explanation).toBe("مع ich: bin.");
    expect(byId["q-read:0"].explanation).toBe("قالت: zwei Schwestern.");
  });

  it("الكتابة: بلا خيارات — بالإجابة النصية والنموذج المقترح", async () => {
    const res = await run(new Map<string, string | number | null>([["q-write", "Ich lebe in Tunis."]]));
    const w = res.review.find((r) => r.id === "q-write");
    expect(w?.options).toEqual([]);
    expect(w?.answerText).toBe("Ich lebe in Tunis.");
    expect(w?.sampleAnswer).toBe("Ich wohne in Tunis.");
  });
});
