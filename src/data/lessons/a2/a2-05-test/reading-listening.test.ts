/**
 * a2-05 — نصُّ القراءة الكامل وترجمتُه المصطفّة ومسردُه وRedemittel ومفاتيحُ الفهم · أسطرُ حوارات الاستماع وترجماتُها وهدفُ كل سؤالٍ وبوابةُ النصّ المكتوب (جزء من تدقيق الدرس)
 * فُصل من a2-05.test.ts في الدفعة 107 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA205 } from "@/data/lessons/a2/a2-05";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import { reading } from "./fixtures";

describe("A2-05 audited lesson", () => {
  it("checks the full reading text, aligned translation, glossary, Redemittel, and all comprehension keys", () => {
    const text = reading();
    expect(text.id).toBe("read-a2-05");
    expect(text.textType).toBe("email");
    expect(text.titleDe).toBe("Informationen zur Besprechung");
    expect(text.paragraphs).toEqual([
      "Betreff: Informationen zur Besprechung\nSehr geehrte Frau Weber,\nich war gestern nicht im Büro. Ich war krank und hatte Fieber. Deshalb konnte ich nicht zur Besprechung kommen. Am Abend habe ich Herrn Schulz eine Nachricht geschickt. Heute bin ich wieder im Büro.",
      "Herr Schulz hat mir geantwortet: Die Besprechung war gestern um 10 Uhr im Raum 3. Anna hatte die Zahlen für den Bericht vorbereitet. Karim hatte erste Folien für die Präsentation gemacht. Das Team hatte eine gute Idee für das neue Projekt. Die aktuelle Datei lag aber noch auf dem Computer von Herrn Schulz.",
      "Ich möchte den Bericht heute fertig schreiben. Bitte schicken Sie mir die Notizen und die aktuelle Datei per E-Mail. Ich habe den ersten Teil schon geschrieben. Für den zweiten Teil brauche ich die Zahlen aus der Besprechung. Wenn etwas fehlt, rufe ich Sie an.",
      "Haben Sie morgen um 11 Uhr Zeit für ein kurzes Gespräch? Wenn der Termin nicht passt, nennen Sie mir bitte einen anderen Zeitpunkt. Ich bin heute bis 16 Uhr im Büro und kann danach auch telefonieren.\nVielen Dank für Ihre Hilfe.\nMit freundlichen Grüßen\nSami Ben Ali",
    ]);
    expect(text.paragraphsAr).toEqual([
      "الموضوع: معلومات عن الاجتماع\nالسيدة فيبر المحترمة،\nلم أكن أمس في المكتب. كنت مريضاً وكانت لدي حمى، لذلك لم أستطع الحضور إلى الاجتماع. أرسلت إلى السيد شولتس رسالة مساءً. أنا اليوم في المكتب مجدداً.",
      "أجابني السيد شولتس: كان الاجتماع أمس الساعة العاشرة في الغرفة 3. كانت آنا قد أعدّت الأرقام الخاصة بالتقرير، وكان كريم قد أعدّ الشرائح الأولى للعرض. كانت لدى الفريق فكرة جيدة للمشروع الجديد، لكن النسخة الحالية من الملف بقيت على حاسوب السيد شولتس.",
      "أودّ إنهاء التقرير اليوم. من فضلك أرسل إليّ الملاحظات والملف الحالي بالبريد الإلكتروني. كتبت الجزء الأول بالفعل، وأحتاج إلى أرقام الاجتماع للجزء الثاني. إذا كان هناك شيء ناقص فسأتصل بك.",
      "هل لديك وقت غداً الساعة الحادية عشرة لاجتماع قصير؟ إذا لم يناسبك الموعد، فاذكري لي وقتاً آخر من فضلك. سأكون في المكتب اليوم حتى الرابعة، ويمكنني التحدث هاتفياً بعد ذلك أيضاً.\nشكراً جزيلاً على مساعدتك.\nمع خالص التحيات\nسامي بن علي",
    ]);
    expect(text.paragraphs.length).toBe(4);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    expect(text.paragraphs.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(text.paragraphsAr.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(text.paragraphs.join(" ").split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(150);
    expect(text.glossary.map((entry) => entry.de)).toEqual([
      "die Besprechung", "das Fieber", "die Nachricht", "die Zahl", "der Bericht",
      "die Folie", "die Präsentation", "die Datei", "die Notiz", "der Zeitpunkt",
    ]);
    const story = text.paragraphs.join(" ").toLowerCase();
    for (const entry of text.glossary) {
      expect(entry.de.trim(), entry.de).not.toBe("");
      expect(entry.ar.trim(), entry.de).not.toBe("");
      expect(entry.noteAr?.trim().length, entry.de).toBeGreaterThan(20);
      const head = entry.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
      expect(story, `${entry.de} should occur in the reading`).toContain(stem);
    }
    expect(text.redemittel).toEqual([
      {de: "Sehr geehrte Frau Weber,", ar: "السيدة فيبر المحترمة،"},
      {de: "Bitte schicken Sie mir die Notizen per E-Mail.", ar: "من فضلك أرسل إليّ الملاحظات بالبريد الإلكتروني."},
      {de: "Haben Sie morgen um 11 Uhr Zeit?", ar: "هل لديك وقت غداً الساعة الحادية عشرة؟"},
      {de: "Mit freundlichen Grüßen", ar: "مع خالص التحيات."},
    ]);
    expect(text.discussionAr?.length).toBeGreaterThan(40);
    expect(text.discussionAr).toContain("لا يُعد دليلاً");
    expect(text.questions.map((question) => [question.id, question.paragraph])).toEqual([
      ["rq1", 1], ["rq2", 2], ["rq3", 3], ["rq4", 4],
    ]);
    for (const question of text.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(1);
      expect(question.paragraph).toBeLessThanOrEqual(text.paragraphs.length);
      expect(question.options.length).toBeGreaterThanOrEqual(3);
      expect(question.questionAr?.trim().length).toBeGreaterThan(0);
      expect(question.explanation.length).toBeGreaterThanOrEqual(20);
    }
    expect(text.paragraphs[0]).toContain("Sehr geehrte Frau Weber,\nich war");
    expect(text.paragraphs[3]).toContain("Mit freundlichen Grüßen\nSami Ben Ali");
    expect(text.paragraphs[3]).not.toContain("Mit freundlichen Grüßen,");
    for (const question of text.questions) {
      const answer = question.options[question.correctIndex];
      if (answer.length > 45) expect(text.paragraphs.join(" ")).not.toContain(answer);
    }
  });

  it("checks each listening dialogue line, translation, question target, and transcript gate", () => {
    expect(lessonA205.listening.items.map((item) => [item.id, item.title, item.lines.length])).toEqual([
      ["l1", "ترك رسالة هاتفية", 5],
      ["l2", "Besprechung und E-Mail", 5],
    ]);
    const expectedDialogues = [
      ["l1", [
        ["Frau Weber", "Firma Weber, Anna Weber, guten Tag!", "شركة فيبر، آنا فيبر، طاب يومك!"],
        ["Sami", "Guten Tag, hier ist Sami Ben Ali. Kann ich mit Herrn Schulz sprechen?", "طاب يومك، معك سامي بن علي. هل يمكنني التحدث مع السيد شولتس؟"],
        ["Frau Weber", "Herr Schulz ist gerade in einer Besprechung. Möchten Sie eine Nachricht hinterlassen?", "السيد شولتس في اجتماع الآن. هل ترغب في ترك رسالة؟"],
        ["Sami", "Ja, bitte sagen Sie ihm, dass ich heute Nachmittag zurückrufe.", "نعم، من فضلك أخبريه أنني سأتصل مجدداً بعد ظهر اليوم."],
        ["Frau Weber", "Gern. Ich richte es aus.", "بكل سرور. سأبلغه ذلك."],
      ]],
      ["l2", [
        ["Anna", "Hallo Karim! Wir hatten gestern eine wichtige Besprechung.", "مرحباً كريم! كان لدينا أمس اجتماع مهم."],
        ["Karim", "Ach ja? Ich war krank und konnte nicht kommen.", "آه حقاً؟ كنت مريضاً ولم أستطع الحضور."],
        ["Anna", "Kein Problem. Wir hatten eine gute Idee für das Projekt.", "لا مشكلة. كانت لدينا فكرة جيدة للمشروع."],
        ["Karim", "Super! Schick mir bitte eine E-Mail mit den Details.", "رائع! أرسلي لي بريداً إلكترونياً بالتفاصيل من فضلك."],
        ["Anna", "Mache ich sofort.", "سأفعل ذلك فوراً."],
      ]],
    ] as const;
    expect(lessonA205.listening.items.map((item) => [item.id, item.lines.map((line) => [line.speaker, line.de, line.ar])])).toEqual(expectedDialogues);
    expect(lessonA205.listening.items.every((item) => item.lines.every((line) => line.de.trim() && line.ar.trim() && line.speaker.trim()))).toBe(true);
    expect(lessonA205.listening.questions.map((question) => [question.id, question.itemId])).toEqual([
      ["q1", "l1"], ["q2", "l1"], ["q3", "l2"], ["q4", "l2"],
    ]);
    expect(lessonA205.listening.questions.find((question) => question.id === "q1")?.questionDe).toBe("Wer ist gerade in einer Besprechung?");
    expect(lessonA205.listening.questions.find((question) => question.id === "q2")?.explanation).toContain("بعد ظهر اليوم");
    expect(lessonA205.listening.questions.find((question) => question.id === "q3")?.questionDe).toBe("Warum konnte Karim nicht kommen?");
    expect(lessonA205.listening.questions.find((question) => question.id === "q4")?.questionDe).toBe("Was soll Anna Karim schicken?");
    expect(getListeningQuestionTaskId(lessonA205.id, "l1", "q1", true)).not.toBe("listening:l1:q1");
    expect(lessonA205.lernziele.find((goal) => goal.id === "z2")?.evidence?.taskIds).not.toContain("listening-transcript:a2-05:l1:q1");
  });
});
