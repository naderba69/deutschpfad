/**
 * a2-07 — القراءة والاستماع (جزء من تدقيق الدرس)
 * فُصل من a2-07.test.ts في الدفعة 101 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { lessonA207 } from "@/data/lessons/a2/a2-07";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";

describe("A2-07 audited lesson", () => {
  it("checks all reading paragraphs, aligned translation, glossary entries, keys, and paragraph references", () => {
    const reading = lessonA207.reading;
    if (!reading) throw new Error("A2-07 must keep its reviewed reading");
    expect(reading.id).toBe("read-a2-07");
    expect(reading.titleDe).toBe("Lina informiert sich über ein Konto");
    expect(reading.titleAr).toBe("لينا تستفسر عن حساب");
    expect(reading.textType).toBe("erzaehlung");
    expect(reading.paragraphs).toEqual([
      "Lina wohnt seit Kurzem in einer neuen Stadt. Sie möchte ein Konto eröffnen, damit sie ihre Miete jeden Monat per Überweisung bezahlen kann. Auf der Internetseite einer Bank findet sie zwei Angebote. Die Bank, die Kontomodelle und alle Preise in dieser Geschichte sind erfunden. Lina schreibt drei Fragen auf: Gibt es eine Karte? Welche Gebühren gibt es? Wo ist ein Geldautomat?",
      "Am nächsten Tag vergleicht sie die Angebote auf einem Übungsblatt. Modell A ist ohne Karte. Modell B hat eine Bankkarte und kostet in diesem Beispiel drei Euro pro Monat. Bei einer weiteren Leistung nennt das Blatt eine mögliche Gebühr, aber keinen Betrag. Lina markiert die Zeile, damit sie später nach dem Betrag fragen kann. Sie weiß: Diese erfundenen Angebote sind keine aktuellen Informationen für ein echtes Konto.",
      "In der Filiale fragt Lina: „Gibt es hier einen Geldautomaten? Kann ich dort Geld abheben?“ Die Mitarbeiterin antwortet: „Ja, neben dem Eingang.“ Lina fragt auch, ob sie Geld überweisen kann. Die Mitarbeiterin bittet sie, die Übersicht zum Beispielkonto zu lesen. Dort stehen weitere Bedingungen. Lina notiert die Wörter Gebühr, Karte und Überweisung.",
      "Zu Hause liest Lina die Notizen. Sie möchte die Kontomodelle vergleichen und die Bedingungen verstehen. Dann sagt sie zu ihrem Bruder: „Es gibt zwei Angebote in dieser Geschichte. Modell A ist ohne Karte; Modell B kostet drei Euro im Monat. Ich entscheide mich später.“ Die genannten Preise gelten nur in dieser erfundenen Übung.",
    ]);
    expect(reading.paragraphsAr).toEqual([
      "تعيش لينا منذ مدة قصيرة في مدينة جديدة. تريد فتح حساب كي تدفع إيجارها كل شهر عن طريق تحويل بنكي. تجد على موقع أحد البنوك عرضين. البنك ونماذج الحساب والأسعار في هذه القصة خيالية. تكتب ثلاثة أسئلة: هل توجد بطاقة؟ ما الرسوم؟ وأين يوجد صراف آلي؟",
      "في اليوم التالي تقارن العرضين في ورقة تدريب. النموذج A بلا بطاقة. النموذج B يتضمن في هذا المثال بطاقة مصرفية، ويكلف ثلاثة يورو شهرياً. وتذكر الورقة رسماً محتملاً لخدمة أخرى، من دون تحديد المبلغ. تضع لينا خطاً تحت السطر كي تسأل لاحقاً عن المبلغ. وهي تعرف أن هذه العروض الخيالية لا تمثل معلومات حالية عن حساب حقيقي.",
      "في الفرع تسأل لينا: «هل يوجد صراف آلي هنا؟ هل أستطيع سحب المال منه؟» تجيب الموظفة: «نعم، بجانب المدخل». وتسأل لينا أيضاً إن كان بإمكانها تحويل المال. تطلب الموظفة منها قراءة ملخص المعلومات الخاص بحساب المثال. هناك شروط أخرى. تدوّن لينا كلمات: الرسوم، والبطاقة، والتحويل.",
      "في البيت تعيد لينا قراءة ملاحظاتها. تريد مقارنة نماذج الحساب وفهم الشروط. ثم تقول لأخيها: «يوجد عرضان في هذه القصة. النموذج A بلا بطاقة، والنموذج B يكلف ثلاثة يورو شهرياً. سأقرر لاحقاً». الأسعار المذكورة جزء من التمرين الخيالي فقط.",
    ]);
    expect(reading.paragraphs).toHaveLength(4);
    expect(reading.paragraphsAr).toHaveLength(reading.paragraphs.length);
    expect(reading.paragraphs.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(reading.paragraphsAr.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(reading.paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(150);
    expect(reading.paragraphs.join(" ")).toContain("sind erfunden");
    expect(reading.paragraphs.join(" ")).toContain("keine aktuellen Informationen für ein echtes Konto");
    expect(reading.paragraphs.join(" ")).toContain("damit sie später nach dem Betrag fragen kann");
    expect(reading.glossary.map((entry) => entry.de)).toEqual([
      "das Konto",
      "die Miete",
      "die Überweisung",
      "das Kontomodell",
      "die Gebühr",
      "vergleichen",
      "die Bankkarte",
      "die Filiale",
      "der Geldautomat",
      "Geld abheben",
      "die Übersicht",
      "die Bedingungen",
    ]);
    const article = reading.paragraphs.join(" ").toLocaleLowerCase("de");
    for (const entry of reading.glossary) {
      expect(entry.ar.trim(), entry.de).not.toBe("");
      const head = entry.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLocaleLowerCase("de");
      expect(article, entry.de).toContain(stem);
    }
    expect(reading.questions.map((question) => [question.id, question.paragraph])).toEqual([
      ["rq1", 1],
      ["rq2", 2],
      ["rq3", 2],
      ["rq4", 4],
    ]);
    expect(reading.questions.map((question) => question.questionDe)).toEqual([
      "Warum möchte Lina ein Konto eröffnen?",
      "Was gilt für Modell B in dieser erfundenen Geschichte?",
      "Warum markiert Lina die Zeile mit der Gebühr?",
      "Was entscheidet Lina am Ende?",
    ]);
    expect(reading.questions.map((question) => question.questionAr)).toEqual([
      "لماذا تريد لينا فتح حساب؟",
      "ما الذي ينطبق على النموذج B في هذه القصة الخيالية؟",
      "لماذا تضع لينا علامة على السطر الذي يذكر الرسوم؟",
      "ماذا تقرر لينا في النهاية؟",
    ]);
    for (const question of reading.questions) {
      expect(question.errorType).toBe("comprehension");
      expect(question.options).toHaveLength(4);
      expect(question.questionAr?.trim().length).toBeGreaterThan(0);
      expect(question.explanation.trim().length).toBeGreaterThanOrEqual(20);
      if (typeof question.paragraph !== "number") {
        throw new Error(`${question.id} needs a paragraph reference`);
      }
      expect(question.paragraph).toBeGreaterThanOrEqual(1);
      expect(question.paragraph).toBeLessThanOrEqual(reading.paragraphs.length);
      const paragraph = reading.paragraphs[question.paragraph - 1];
      expect(paragraph).toBeDefined();
      expect(paragraph?.trim().length).toBeGreaterThan(0);
    }
    expect(reading.redemittel).toEqual([
      { de: "Ich möchte ein Konto eröffnen.", ar: "أريد فتح حساب." },
      { de: "Welche Gebühren gibt es?", ar: "ما الرسوم؟" },
      { de: "Wo ist der Geldautomat?", ar: "أين يوجد الصراف الآلي؟" },
      { de: "Ich möchte die Angebote vergleichen.", ar: "أريد مقارنة العروض." },
    ]);
    expect(reading.discussionAr).toContain("لا تُدخل أرقام حسابات أو بيانات شخصية حقيقية");
    expect(reading.discussionAr).toContain("لا تتعامل مع أسعار القصة على أنها عروض فعلية");
  });

  it("checks every listening line and translation, each answer key, and transcript-free evidence IDs", () => {
    expect(lessonA207.listening.items.map((item) => [item.id, item.title, item.lines.length])).toEqual([
      ["l1", "حوار تدريبي متخيّل عن نموذج حساب", 6],
      ["l2", "طلب مساعدة عند الصراف الآلي", 5],
      ["l3", "سحب مبلغ والتحقق من الإيصال", 6],
    ]);
    const expectedLines = [
      [
        "l1",
        [
          ["Bankangestellte", "Guten Tag! Wie kann ich Ihnen helfen?", "مرحباً! كيف أستطيع مساعدتك؟"],
          ["Sami", "Ich möchte ein Konto eröffnen.", "أريد فتح حساب."],
          ["Bankangestellte", "In diesem Übungsbeispiel gibt es zwei Kontomodelle: eines mit Bankkarte und eines ohne Karte.", "في مثال التدريب هذا نموذجان للحساب: أحدهما ببطاقة مصرفية والآخر بلا بطاقة."],
          ["Sami", "Wo finde ich die Gebühren?", "أين أجد الرسوم؟"],
          ["Bankangestellte", "Die Gebühren stehen in der Übersicht.", "الرسوم واردة في ملخص المعلومات."],
          ["Sami", "Danke. Ich lese die Informationen erst in Ruhe.", "شكراً. سأقرأ المعلومات أولاً على مهل."],
        ],
      ],
      [
        "l2",
        [
          ["Mona", "Ich brauche Bargeld. Gibt es hier einen Geldautomaten?", "أحتاج إلى نقود نقدية. هل يوجد صراف آلي هنا؟"],
          ["Karim", "Ja, es gibt einen Automaten neben dem Eingang.", "نعم، يوجد صراف بجانب المدخل."],
          ["Mona", "Kann ich dort mit meiner Karte Geld abheben?", "هل أستطيع سحب المال من هناك ببطاقتي؟"],
          ["Karim", "Ich verstehe die Anzeige nicht. Kannst du mir kurz helfen?", "لا أفهم ما يظهر على الشاشة. هل يمكنك مساعدتي قليلاً؟"],
          ["Mona", "Klar. Ich helfe dir.", "طبعاً. سأساعدك."],
        ],
      ],
      [
        "l3",
        [
          ["Mona", "Ich möchte am Automaten fünfzig Euro abheben. Was soll ich zuerst tun?", "أريد سحب خمسين يورو من الصراف. ماذا أفعل أولاً؟"],
          ["Karim", "Steck die Karte ein und wähle am Bildschirm Deutsch.", "أدخل البطاقة واختر الألمانية على الشاشة."],
          ["Mona", "Jetzt fragt der Automat nach meiner PIN. Soll ich sie einfach eingeben?", "الآن يطلب الصراف الرقم السري. هل أدخله هكذا فقط؟"],
          ["Karim", "Ja, aber deck das Tastenfeld mit der Hand ab.", "نعم، لكن غطّي لوحة الأزرار بيدك."],
          ["Mona", "Der Automat druckt auch eine Quittung. Brauche ich sie?", "يطبع الصراف إيصالاً أيضاً. هل أحتاج إليه؟"],
          ["Karim", "Nimm sie mit, wenn du den Betrag kontrollieren möchtest.", "خذيها معك إذا أردت التحقق من المبلغ."],
        ],
      ],
    ] as const;
    expect(
      lessonA207.listening.items.map((item) => [
        item.id,
        item.lines.map((line) => [line.speaker, line.de, line.ar]),
      ]),
    ).toEqual(expectedLines);
    expect(
      lessonA207.listening.items.every((item) =>
        item.lines.every((line) => line.speaker.trim() && line.de.trim() && line.ar.trim()),
      ),
    ).toBe(true);
    expect(lessonA207.listening.questions.map((question) => [question.id, question.itemId])).toEqual([
      ["q1", "l1"],
      ["q2", "l1"],
      ["q3", "l2"],
      ["q4", "l2"],
      ["q5", "l3"],
      ["q6", "l3"],
      ["q7", "l3"],
    ]);
    expect(lessonA207.lernziele.find((goal) => goal.id === "z3")?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
      "listening:l2:q4",
      "listening:l3:q5",
      "listening:l3:q6",
      "listening:l3:q7",
    ]);
    for (const question of lessonA207.listening.questions) {
      expect(question.errorType).toBe("comprehension");
      expect(
        getListeningQuestionTaskId(lessonA207.id, question.itemId, question.id, false),
      ).toBe(`listening:${question.itemId}:${question.id}`);
      expect(
        getListeningQuestionTaskId(lessonA207.id, question.itemId, question.id, true),
      ).toBe(`listening-transcript:${lessonA207.id}:${question.itemId}:${question.id}`);
    }
    expect(lessonA207.lernziele.find((goal) => goal.id === "z3")?.ar).toContain(
      "قبل إظهار نصوصها",
    );
  });
});
