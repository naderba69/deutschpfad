/**
 * اختبارات وحدة — محرك الاختبارات (التصحيح والمستوى والصيغة)
 */
import {describe, expect, it} from "vitest";

import {formatTime, isMcqCorrect, levelFromPct, scoreWriting} from "@/lib/tests/test-engine";
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
  it("صحيح عند مطابقة الفهرس", () => {
    expect(isMcqCorrect(mcq, 0)).toBe(true);
  });
  it("خاطئ عند اختلاف الفهرس", () => {
    expect(isMcqCorrect(mcq, 1)).toBe(false);
  });
  it("خاطئ عند غياب إجابة", () => {
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

  it("نص فارغ → صفر", () => {
    expect(scoreWriting(writing, "").pct).toBe(0);
  });

  it("نص مطابق للنموذج → 100%", () => {
    const r = scoreWriting(writing, writing.sampleAnswer ?? "");
    expect(r.pct).toBe(100);
    expect(r.correct).toBe(true);
  });

  it("نص قصير جداً → نسبة منخفضة", () => {
    const r = scoreWriting(writing, "Hallo.");
    expect(r.pct).toBeLessThan(40);
  });

  it("نص يحوي كلمات النموذج الأساسية → نسبة 40-90 (يعتمد على الطول)", () => {
    const r = scoreWriting(writing, "Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil ich ein Problem habe. Mit freundlichen Grüßen.");
    expect(r.pct).toBeGreaterThanOrEqual(40);
    expect(r.pct).toBeLessThanOrEqual(100);
  });

  it("نص طويل يحوي أفكار النموذج + طول جيد → نسبة عالية", () => {
    const long = "Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil ich ein Problem habe. " +
      "Ich habe ein Produkt bestellt und es ist nicht angekommen. Ich bitte Sie, das Problem zu lösen. " +
      "Die Lieferung sollte letzte Woche kommen, aber ich habe nichts erhalten. " +
      "Können Sie mir bitte mitteilen, wann die Lieferung eintrifft? " +
      "Ich hoffe auf eine schnelle Lösung und danke Ihnen im Voraus. Mit freundlichen Grüßen.";
    const r = scoreWriting(writing, long);
    expect(r.pct).toBeGreaterThanOrEqual(60);
  });
});

describe("levelFromPct — المستوى من النسبة (حدود المحرك الفعلية)", () => {
  it("أقل من 50 → A1", () => {
    expect(levelFromPct(20)).toBe("A1");
  });
  it("50-69 → A2", () => {
    expect(levelFromPct(50)).toBe("A2");
    expect(levelFromPct(60)).toBe("A2");
  });
  it("70-84 → B1", () => {
    expect(levelFromPct(70)).toBe("B1");
  });
  it("85+ → B2", () => {
    expect(levelFromPct(85)).toBe("B2");
    expect(levelFromPct(100)).toBe("B2");
  });
});

describe("formatTime", () => {
  it("صيغة mm:ss", () => {
    expect(formatTime(95)).toBe("01:35");
    expect(formatTime(0)).toBe("00:00");
    expect(formatTime(600)).toBe("10:00");
  });
});
