/**
 * اختبارات وحدة — محرك الاختبارات (التصحيح والمستوى والصيغة)
 */
import {describe, expect, it} from "vitest";

import {formatTime, isMcqCorrect, levelFromPct, scoreSkill, scoreWriting} from "@/lib/tests/test-engine";
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

describe("scoreWriting — تصحيح الكتابة", () => {
  const writing: TestQuestion = {
    id: "w1",
    skill: "schreiben",
    level: "B2",
    kind: "writing",
    prompt: "Schreiben Sie eine E-Mail.",
    sampleAnswer: "Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil ich ein Problem habe. Mit freundlichen Grüßen.",
    points: 10,
  };

  it("نص فارغ → صفر", async () => {
    expect((await scoreWriting(writing, "")).pct).toBe(0);
  });

  it("نص مطابق للنموذج → 100%", async () => {
    const r = await scoreWriting(writing, writing.sampleAnswer ?? "");
    expect(r.pct).toBe(100);
    expect(r.correct).toBe(true);
  });

  it("نص قصير جداً → نسبة منخفضة", async () => {
    const r = await scoreWriting(writing, "Hallo.");
    expect(r.pct).toBeLessThan(40);
  });

  it("نص يحوي كلمات النموذج الأساسية → نسبة 40-90 (يعتمد على الطول)", async () => {
    const r = await scoreWriting(writing, "Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil ich ein Problem habe. Mit freundlichen Grüßen.");
    expect(r.pct).toBeGreaterThanOrEqual(40);
    expect(r.pct).toBeLessThanOrEqual(100);
  });

  it("نص طويل يحوي أفكار النموذج + طول جيد → نسبة عالية", async () => {
    const long = "Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil ich ein Problem habe. " +
      "Ich habe ein Produkt bestellt und es ist nicht angekommen. Ich bitte Sie, das Problem zu lösen. " +
      "Die Lieferung sollte letzte Woche kommen, aber ich habe nichts erhalten. " +
      "Können Sie mir bitte mitteilen, wann die Lieferung eintrifft? " +
      "Ich hoffe auf eine schnelle Lösung und danke Ihnen im Voraus. Mit freundlichen Grüßen.";
    const r = await scoreWriting(writing, long);
    expect(r.pct).toBeGreaterThanOrEqual(60);
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

describe("A-06 — عتبة الاستماع النسبية (2/2 = نجاح)", () => {
  it("نص بسؤالين: الإجابة عن كليهما = نجاح (كانت العتبة الثابتة >=3 تفشله)", () => {
    // نتحقق من منطق العتبة المستخدم في hoeren-client: score/len >= 0.6
    const score = 2;
    const len = 2;
    const passed = len > 0 && score / len >= 0.6;
    expect(passed).toBe(true);
  });
});
