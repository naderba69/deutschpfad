import {describe, expect, it} from "vitest";

import {WRITING_TASKS, STAGE_ORDER, getTasksByStage} from "@/data/writing-path";
import {evaluateWriting} from "@/lib/writing/goethe-local";

describe("مسار الكتابة المتدرج", () => {
  it("يحتوي مهام في كل مرحلة بالترتيب (جملة ← فقرة ← رسالة ← مقال)", async () => {
    for (const s of STAGE_ORDER) {
      expect(getTasksByStage(s.key).length).toBeGreaterThanOrEqual(1);
    }
    // التدرج في الطول المطلوب
    const sentence = getTasksByStage("sentence")[0];
    const essay = getTasksByStage("essay")[0];
    expect(essay.minWords).toBeGreaterThan(sentence.minWords);
  });

  it("مهام المراحل المتقدمة تُقيَّم بشكل صحيح بالمقيّم المحلي", async () => {
    // مقال قصير جداً يُعطي نتيجة ضعيفة في الإنجاز
    const short = await evaluateWriting("Meinung: Ich mag Deutsch.", "Forumsbeitrag");
    expect(short.pct).toBeLessThan(60);
    // نص طويل منظم بالروابط يُعطي نتيجة أعلى
    const good = await evaluateWriting(
      "Meiner Meinung nach ist Homeoffice eine gute Option. Einerseits spart man Zeit. Andererseits fehlt der Kontakt. Außerdem ist die Trennung schwierig. Zusammenfassend glaube ich, dass man flexible Modelle anbieten sollte.",
      "Forumsbeitrag",
    );
    expect(good.pct).toBeGreaterThan(short.pct);
  });
});
