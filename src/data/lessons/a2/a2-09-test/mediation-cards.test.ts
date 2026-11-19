/**
 * a2-09 — نموذجُ الوساطة الكامل وفروعُ التفاعل وترجماتُها · بطاقاتُ المفردات ومعرّفاتُها ومراسيها (جزء من تدقيق الدرس)
 * فُصل من a2-09.test.ts في الدفعة 103 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { lessonA209 } from "@/data/lessons/a2/a2-09";

describe("A2-09 lesson audit", () => {
  it("checks the full mediation model and every interaction branch and translation", () => {
    expect(
      lessonA209.mediation?.map(({ id, titleAr, sourceDe, taskAr, modelAnswerAr, keyPointsAr }) => [
        id,
        titleAr,
        sourceDe,
        taskAr,
        modelAnswerAr,
        keyPointsAr,
      ]),
    ).toEqual([
      [
        "med-a2-09-1",
        "انقل تفاصيل دعوة عيد ميلاد إلى العربية",
        "Liebe Freunde, am Samstag feiere ich meinen Geburtstag um 18 Uhr bei mir zu Hause. Kommt alle! Bringt gute Laune mit.",
        "انقل الدعوة بالعربية، مع ذكر اليوم والساعة والمكان وما يطلبه صاحب الدعوة.",
        "«أصدقائي الأعزاء، سأحتفل بعيد ميلادي يوم السبت في السادسة مساءً في منزلي. تعالوا جميعاً، وأحضروا معكم روحاً مرحة!»",
        [
          "ذكر يوم السبت والساعة السادسة مساءً",
          "ذكر أن المكان هو منزل صاحب الدعوة",
          "نقل طلب الحضور بروح مرحة دون تغيير المعنى",
        ],
      ],
    ]);

    expect(
      lessonA209.interaction?.[0]?.rounds.map((round) => [
        round.speakerDe,
        round.speakerAr,
        round.options.map(({ de, ar, best, replyDe, replyAr }) => [de, ar, best, replyDe, replyAr]),
      ]),
    ).toEqual([
      [
        "Ich feiere am Samstag meinen Geburtstag. Kommst du?",
        "سأحتفل السبت بعيد ميلادي. هل ستأتي؟",
        [
          [
            "Ja, gern! Um wie viel Uhr und wo?",
            "نعم، بكل سرور! في أي ساعة وأين؟",
            true,
            "Um 18 Uhr bei mir zu Hause.",
            "الساعة السادسة مساءً في منزلي.",
          ],
          [
            "Danke für die Einladung! Am Samstag kann ich leider nicht. Können wir uns ein anderes Mal treffen?",
            "شكراً على الدعوة! للأسف لا أستطيع يوم السبت. هل يمكن أن نلتقي في وقت آخر؟",
            true,
            "Schade, aber gern. Wir finden einen anderen Termin.",
            "هذا مؤسف، لكن يسعدني ذلك. سنجد موعداً آخر.",
          ],
        ],
      ],
      [
        "Um 18 Uhr bei mir. Bringst du etwas mit?",
        "في السادسة مساءً عندي. هل ستحضر شيئاً؟",
        [
          [
            "Ja, ich bringe einen Kuchen mit!",
            "نعم، سأحضر كعكة!",
            true,
            "Toll, danke! Bis Samstag!",
            "رائع، شكراً! إلى السبت!",
          ],
          [
            "Gern, ich bringe eine Kleinigkeit mit. Passt das?",
            "بكل سرور، سأحضر شيئاً بسيطاً. هل يناسبك ذلك؟",
            true,
            "Ja, das passt sehr gut. Danke!",
            "نعم، هذا مناسب جداً. شكراً!",
          ],
        ],
      ],
    ]);
  });

  it("checks each vocabulary card for a unique id, nonduplicate face, and lesson anchor", () => {
    const cards = lessonA209.flashcards;
    expect(cards.map(({ de, ar, example, exampleAr, level }) => [de, ar, example, exampleAr, level])).toEqual([
      ["das Fest", "المناسبة / الاحتفال", "Das Fest war schön.", "كانت المناسبة جميلة.", "A2"],
      ["die Einladung", "الدعوة", "Danke für die Einladung!", "شكراً على الدعوة!", "A2"],
      ["feiern", "يحتفل", "Wir feiern am Samstag.", "نحتفل يوم السبت.", "A2"],
      ["das Geschenk", "الهدية", "Das Geschenk ist schön.", "الهدية جميلة.", "A2"],
      ["helfen + Dativ", "يساعد شخصاً", "Ich helfe dir.", "أساعدك.", "A2"],
      ["gefallen + Dativ", "يعجب شخصاً", "Das Geschenk gefällt mir.", "تعجبني الهدية.", "A2"],
      ["gehören + Dativ", "يخصّ / يكون ملكاً لـ", "Das Buch gehört meinem Bruder.", "الكتاب ملك لأخي.", "A2"],
      ["gratulieren + Dativ", "يهنئ شخصاً", "Ich gratuliere dir zum Geburtstag.", "أهنئك بعيد ميلادك.", "A2"],
      ["der Geburtstag", "عيد ميلاد شخص", "Sie hat am Samstag Geburtstag.", "عيد ميلادها يوم السبت.", "A2"],
      ["der Gast, die Gäste", "الضيف / الضيوف", "Die Gäste kommen um fünf Uhr.", "يصل الضيوف في الخامسة.", "A2"],
      ["der Innenhof", "الساحة الداخلية للمبنى", "Wir feiern im Innenhof.", "نحتفل في الساحة الداخلية للمبنى.", "A2"],
      ["sich bei jemandem für etwas bedanken", "يشكر شخصاً على شيء", "Ich bedanke mich bei dir für die Blumen.", "أشكرك على الزهور.", "A2"],
      ["die Nachbarin", "الجارة", "Die Nachbarin kommt zur Feier.", "تأتي الجارة إلى المناسبة.", "A2"],
      ["das Fotoalbum", "ألبوم الصور", "Das Fotoalbum gefällt Frau Yilmaz.", "ألبوم الصور يعجب السيدة يلماز.", "A2"],
      ["die Torte", "تورتة: كعكة بطبقات غالباً، ومحشوة أو مزيّنة", "Die Torte ist lecker.", "التورتة لذيذة.", "A2"],
    ]);
    expect(new Set(cards.map((card) => card.id)).size).toBe(cards.length);
    expect(new Set(cards.map((card) => card.de.trim().toLocaleLowerCase("de"))).size).toBe(cards.length);
    const source = JSON.stringify([
      lessonA209.theory,
      lessonA209.reading,
      lessonA209.practiceBank,
      lessonA209.miniTest,
      lessonA209.listening,
      lessonA209.pronunciation,
      lessonA209.einfuehrung,
      lessonA209.fehlerUndTipps,
    ]).toLocaleLowerCase("de");
    for (const card of cards) {
      expect(card.example?.trim().length, card.id).toBeGreaterThan(5);
      expect(card.exampleAr?.trim().length, card.id).toBeGreaterThan(5);
      const terms = card.de
        .replace(/^(der|die|das)\s+/i, "")
        .split(/[^A-Za-zäöüßÄÖÜ]+/)
        .filter((word) => word.length >= 4)
        .map((word) => word.toLocaleLowerCase("de"));
      const anchored = terms.some((word) =>
        source.includes(word.slice(0, Math.max(4, word.length - 3))),
      );
      expect(anchored, `${card.id}: ${card.de}`).toBe(true);
    }
  });
});
