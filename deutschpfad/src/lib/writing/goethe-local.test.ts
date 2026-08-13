/**
 * اختبارات وحدة — المقيّم المحلي للكتابة بمعايير غوته
 */
import {describe, expect, it} from "vitest";

import {evaluateWriting} from "@/lib/writing/goethe-local";

describe("evaluateWriting — نص ممتاز", () => {
  const good = `Meiner Meinung nach ist das Thema sehr wichtig. Einerseits bringt es Vorteile, andererseits gibt es auch Nachteile. Zum Beispiel hilft es den Menschen im Alltag. Darüber hinaus spielt die Technik eine große Rolle. Zusammenfassend lässt sich sagen, dass wir eine gute Lösung finden müssen.`;
  const r = evaluateWriting(good, "Forumsbeitrag");

  it("يعطي درجة إجمالية", () => {
    expect(r.pct).toBeGreaterThanOrEqual(0);
    expect(r.pct).toBeLessThanOrEqual(100);
  });

  it("يحدد حكماً من الخيارات الأربعة", () => {
    expect(["Sehr gut — ممتاز!", "Gut — جيد جداً", "Bestanden — ناجح", "Nicht bestanden — يحتاج مراجعة"]).toContain(r.verdict);
  });

  it("يكتشف الروابط النصية", () => {
    expect(r.connectorsFound.length).toBeGreaterThanOrEqual(3);
  });

  it("يعطي المعايير الأربعة من 1 إلى 5", () => {
    expect(r.scores).toHaveLength(4);
    for (const s of r.scores) {
      expect(s.score).toBeGreaterThanOrEqual(1);
      expect(s.score).toBeLessThanOrEqual(5);
    }
  });
});

describe("evaluateWriting — رسالة رسمية", () => {
  it("تحية رسمية ترفع إنجاز المهمة", () => {
    const withOpening = `Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil ich ein Problem habe. Mit freundlichen Grüßen`;
    const r = evaluateWriting(withOpening, "formelle E-Mail");
    expect(r.scores[0].score).toBeGreaterThanOrEqual(2);
  });

  it("نص فارغ → حد أدنى", () => {
    const r = evaluateWriting("", "Forumsbeitrag");
    expect(r.words).toBe(0);
    expect(r.scores.every((s) => s.score >= 1)).toBe(true);
  });
});

describe("evaluateWriting — كشف الأخطاء الشائعة", () => {
  it("يرصد «das» بعد Komparativ", () => {
    const r = evaluateWriting("Ich bin besser das du denkst.", "Forumsbeitrag");
    expect(r.errors.some((e) => e.note.includes("Komparativ"))).toBe(true);
  });

  it("يرصد «ich haben»", () => {
    const r = evaluateWriting("Ich haben ein Auto.", "Forumsbeitrag");
    expect(r.errors.some((e) => e.note.includes("ich habe"))).toBe(true);
  });

  it("يرصد «mit der Auto»", () => {
    const r = evaluateWriting("Ich fahre mit der Auto.", "Forumsbeitrag");
    expect(r.errors.some((e) => e.wrong.includes("mit"))).toBe(true);
  });

  it("نص سليم → صفر أخطاء", () => {
    const clean = "Ich habe ein Auto und fahre mit dem Auto zur Arbeit. Meiner Meinung nach ist das praktisch.";
    const r = evaluateWriting(clean, "Forumsbeitrag");
    expect(r.errors).toHaveLength(0);
  });
});

describe("evaluateWriting — كولوكيشنات B2 ترفع المفردات", () => {
  it("وجود كولوكيشن يرفع معيار المفردات", () => {
    const withKollo = "Die Technik spielt eine große Rolle. Man sollte Maßnahmen ergreifen und in Betracht ziehen, dass es eine Rolle spielt.";
    const r = evaluateWriting(withKollo, "Erörterung");
    expect(r.scores[2].score).toBeGreaterThanOrEqual(3);
  });
});
