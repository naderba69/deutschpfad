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

  it("نموذج فقرة عطلة نهاية الأسبوع يلتزم بعدد الجمل والحد الأدنى للكلمات", () => {
    const task = WRITING_TASKS.find(({ id }) => id === "w-s2-a2");
    expect(task).toBeDefined();
    const example = task?.exampleDe ?? "";
    const sentences = example.split(/[.!?]+/).filter((sentence) => sentence.trim());
    const words = example.trim().split(/\s+/);
    expect(sentences.length).toBeGreaterThanOrEqual(5);
    expect(sentences.length).toBeLessThanOrEqual(6);
    expect(words.length).toBeGreaterThanOrEqual(task?.minWords ?? 40);
    expect(example).toContain("zu Hause");
  });

  it("كل نموذج إجابة يبلغ الحد الأدنى للكلمات المعلن في مهمته", () => {
    const examples = WRITING_TASKS.filter((task) => task.exampleDe?.trim());
    expect(examples.length).toBeGreaterThan(0);
    for (const task of examples) {
      const count = task.exampleDe!.trim().split(/\s+/).length;
      expect(count, `${task.id}: ${count} كلمة، والحد ${task.minWords}`).toBeGreaterThanOrEqual(task.minWords);
    }
  });

  it("يلتزم مقال Homeoffice بطول المهمة وروابطها الثلاثة", () => {
    const task = WRITING_TASKS.find(({ id }) => id === "w-s4-b2");
    const example = task?.exampleDe ?? "";
    const words = example.trim().split(/\s+/).length;
    expect(words).toBeGreaterThanOrEqual(150);
    expect(words).toBeLessThanOrEqual(180);
    expect(example).toContain("zwar klare Vorteile, aber");
    expect(example).toContain("Einerseits");
    expect(example).toContain("Andererseits");
    expect(example).toContain("Außerdem");
  });

  it("تتضمن النماذج مفردات المتطلبات المعلنة لكل مهمة", () => {
    for (const task of WRITING_TASKS) {
      if (!task.exampleDe) continue;
      for (const requirement of task.requires ?? []) {
        expect(task.exampleDe.toLocaleLowerCase(), `${task.id}: ${requirement}`).toContain(requirement.toLocaleLowerCase());
      }
    }
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
