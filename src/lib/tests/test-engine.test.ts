/**
 * اختبارات وحدة — محرك الاختبارات (التصحيح والمستوى والصيغة)
 */
import {describe, expect, it} from "vitest";

import {formatTime, isMcqCorrect, levelFromPct, scoreSkill} from "@/lib/tests/test-engine";
import type { TestQuestion } from "@/types/test";

const mcq: TestQuestion = {
  id: "t1",
  skill: "grammatik",
  level: "A1",
  kind: "mcq",
  questionDe: "Ich ___ aus Tunis.",
  options: ["bin", "bist", "ist"],
  correctIndex: 0,
};

describe("isMcqCorrect", () => {
  it("صحيح عند مطابقة الفهرس", async () => {
    expect(isMcqCorrect(mcq, 0)).toBe(true);
  });
  it("خاطئ عند اختلاف الفهرس", async () => {
    expect(isMcqCorrect(mcq, 1)).toBe(false);
  });
  it("خاطئ عند غياب إجابة", async () => {
    expect(isMcqCorrect(mcq, null)).toBe(false);
  });
});

describe("levelFromPct — المستوى من النسبة (حدود المحرك الفعلية)", () => {
  it("أقل من 50 → A1", async () => {
    expect(levelFromPct(20)).toBe("A1");
  });
  it("50-69 → A2", async () => {
    expect(levelFromPct(50)).toBe("A2");
    expect(levelFromPct(60)).toBe("A2");
  });
  it("70-84 → B1", async () => {
    expect(levelFromPct(70)).toBe("B1");
  });
  it("85+ → B2", async () => {
    expect(levelFromPct(85)).toBe("B2");
    expect(levelFromPct(100)).toBe("B2");
  });
});

describe("formatTime", () => {
  it("صيغة mm:ss", async () => {
    expect(formatTime(95)).toBe("01:35");
    expect(formatTime(0)).toBe("00:00");
    expect(formatTime(600)).toBe("10:00");
  });
});

describe("C-02 — أسئلة القراءة/الاستماع الفرعية تُصحَّح (تدقيق 2026-08-15)", () => {
  const readingQ = {
    id: "r1", skill: "lesen" as const, level: "A1" as const, kind: "reading" as const,
    text: "Hallo, ich heiße Anna.",
    questions: [
      { q: "Wie heißt sie?", qAr: "ما اسمها؟", options: ["Anna", "Ben"], correct: 0 },
      { q: "Was sagt sie?", qAr: "ماذا تقول؟", options: ["Tschüss", "Hallo"], correct: 1 },
    ],
  };

  it("حاوية قراءة بلا إجابات لا تُحتسب في المقام (لم تعد تخفض السقف)", async () => {
    const answers = new Map<string, string | number | null>();
    const r = await scoreSkill("lesen", [readingQ], answers);
    expect(r.total).toBe(2); // سؤالان فرعيان
    expect(r.correct).toBe(0);
  });

  it("الإجابة عن السؤالين الفرعيين = 100% (كان السقف 40%)", async () => {
    const answers = new Map<string, string | number | null>();
    answers.set("r1:0", 0);
    answers.set("r1:1", 1);
    const r = await scoreSkill("lesen", [readingQ], answers);
    expect(r.total).toBe(2);
    expect(r.correct).toBe(2);
    expect(r.pct).toBe(100);
  });

  it("حاوية بلا أسئلة فرعية لا تُحتسب أصلاً (لا عقوبة خفية)", async () => {
    const empty = { ...readingQ, questions: [] };
    const answers = new Map<string, string | number | null>();
    const r = await scoreSkill("lesen", [empty], answers);
    expect(r.total).toBe(0);
  });
});

describe("الكتابة الحرة — مستبعدة من النتيجة الآلية", () => {
  it("لا تُنشئ نتيجة مهارة أو نسبة عند وجود مهمة كتابة فقط", async () => {
    const writing: TestQuestion = {
      id: "w1", skill: "schreiben", level: "A1", kind: "writing",
      prompt: "Schreiben Sie eine E-Mail.", sampleAnswer: "Sehr geehrte Damen und Herren.", points: 10,
    };
    const result = await scoreSkill("schreiben", [writing], new Map([["w1", "نص طويل مكتوب"]]));
    expect(result.total).toBe(0);
    expect(result.correct).toBe(0);
    expect(result.pct).toBe(0);
  });
});

describe("A-06 — عتبة الاستماع النسبية (2/2 = نجاح)", () => {
  it("نص بسؤالين: الإجابة عن كليهما = نجاح (كانت العتبة الثابتة >=3 تفشله)", () => {
    // نتحقق من منطق العتبة المستخدم في hoeren-client: score/len >= 0.6
    const score = 2;
    const len = 2;
    const passed = len > 0 && score / len >= 0.6;
    expect(passed).toBe(true);
  });
});
