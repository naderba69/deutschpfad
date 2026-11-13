import {describe, expect, it} from "vitest";

import {INTERACTIVE_STORIES, getStoriesByLevel} from "@/data/stories";

describe("ترجمة العمر في قصة عيد ميلاد ليزا", () => {
  it("ينقل أنها ستبلغ العشرين غداً بعبارة عربية واضحة", () => {
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "a2-geburtstag");
    expect(story?.segments[0]?.de).toContain("Sie wird 20 Jahre alt");
    expect(story?.segments[0]?.ar).toBe("غداً عيد ميلاد ليزا. ستبلغ العشرين من عمرها.");
  });
});

describe("ترجمة zu klein في قصة الشقة", () => {
  it("يحفظ معنى عدم كفاية مساحة الشقة", () => {
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "b1-neue-wohnung");
    expect(story?.segments[0]?.ar).toContain("شقة جديدة لأن القديمة أصغر من اللازم");
    const answer = story?.segments[1]?.question?.options.find(({ correct }) => correct);
    expect(answer?.ar).toBe("الشقة القديمة أصغر من اللازم");
    expect(story?.segments[4]?.ar).toContain("مساحة أكبر");
    expect(story?.segments[4]?.choices?.find(({ text }) => text.startsWith("Die Wohnung ist kleiner"))?.ar).toBe("الشقة أصغر من القديمة.");
  });

  it("يوضح أن ارتفاع الإيجار وارد في القصة لكنه ليس سبب البحث المذكور", () => {
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "b1-neue-wohnung");
    const segment = story?.segments[1];
    const distractor = segment?.question?.options.find(({ text }) => text === "Die Miete ist zu hoch");
    expect(segment?.de).toContain("die Miete ist hoch");
    expect(distractor?.explanation).toContain("لا تذكره القصة سبباً للبحث");
    expect(distractor?.explanation).toContain("الشقة القديمة أصغر من اللازم");
  });
});

describe("مكتبة القصص التفاعلية — سلامة البنية لكل المستويات", () => {
  it("يحصر سؤال طلب تيم في الشراب ويطابق كعكة القصة مفرداً", () => {
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "a1-im-cafe");
    expect(story?.segments[3]?.ar).toBe("يأكلان أيضاً كعكةً. الكعكة لذيذة جداً.");
    expect(story?.segments[3]?.question?.de).toBe("Was möchte Tim trinken?");
    expect(story?.segments[3]?.question?.ar).toBe("ماذا يريد تيم أن يشرب؟");
  });
  it("يبني مشتتات الفطور على النص لا على تعميمات عن الأطعمة المناسبة", () => {
    const breakfast = INTERACTIVE_STORIES.find(({ id }) => id === "a1-das-fruehstueck");
    const options = breakfast?.segments[1]?.question?.options ?? [];
    expect(options.find(({ text }) => text === "Pizza und Eis")?.explanation).toContain("لم يرد ذكرهما");
    expect(options.find(({ text }) => text === "Fisch und Reis")?.explanation).toContain("لا يذكر النص سمكاً أو أرزاً");
  });
  it("يحفظ معنى zu Hause المجازي وترجمة العودة بالدراجة إلى البيت", () => {
    const integration = INTERACTIVE_STORIES.find(({ id }) => id === "b2-integration");
    const feeling = integration?.segments[3]?.question?.options.find(({ text }) => text === "Völlig zu Hause");
    expect(feeling?.ar).toBe("شعر بأنه في بيته تماماً");
    const bicycle = INTERACTIVE_STORIES.find(({ id }) => id === "a2-fahrrad");
    expect(bicycle?.segments[4]?.ar).toContain("تعود ميا بدراجتها إلى البيت");
  });

  it("يترجم Rathaus في قصة الرحلة إلى دار البلدية لا قاعة المدينة", () => {
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "a2-klassenfahrt");
    expect(story?.segments[1]?.ar).toBe("زاروا الميناء ودار البلدية.");
    expect(story?.segments[1]?.question?.options.find(({ correct }) => correct)?.ar).toBe("الميناء ودار البلدية");
    expect(story?.segments[1]?.ar).not.toContain("قاعة المدينة");
  });

  it("يميز Bürokratie عن Routine في قصة ياسمين", () => {
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "b2-umzug-muenchen");
    const option = story?.segments[3]?.question?.options.find(({ correct }) => correct);
    expect(option?.text).toBe("Schwierig wegen Sprache und Bürokratie");
    expect(option?.ar).toBe("صعبة بسبب اللغة والبيروقراطية");
    expect(option?.explanation).toContain("اللغة والبيروقراطية");
    expect(option?.ar).not.toContain("الروتين");
  });

  it("يحافظ على معنى motivierter في ختام قصة برنامج اللغة", () => {
    const segment = INTERACTIVE_STORIES.flatMap(({ segments }) => segments)
      .find(({ de }) => de === "Alle sind motivierter nach Hause gekommen. Ende.");
    expect(segment?.ar).toBe("عاد الجميع إلى البيت وهم أكثر حماساً. النهاية.");
  });

  it("تحتوي على 68 قصة موزعة على المستويات الأربعة", () => {
    expect(INTERACTIVE_STORIES.length).toBe(68);
    expect(getStoriesByLevel("A1").length).toBe(17);
    expect(getStoriesByLevel("A2").length).toBe(17);
    expect(getStoriesByLevel("B1").length).toBe(17);
    expect(getStoriesByLevel("B2").length).toBe(17);
  });

  it("كل قصة لها معرّف فريد وبنية مكتملة", () => {
    const ids = new Set<string>();
    for (const s of INTERACTIVE_STORIES) {
      expect(s.id).toBeTruthy();
      expect(ids.has(s.id)).toBe(false);
      ids.add(s.id);
      expect(s.title).toBeTruthy();
      expect(s.titleAr).toBeTruthy();
      expect(s.grammar).toBeTruthy();
      expect(s.segments.length).toBeGreaterThanOrEqual(3);
      // المقاطع مرقمة بشكل متسلسل يبدأ من 1
      s.segments.forEach((seg, i) => {
        expect(seg.id).toBe(i + 1);
        expect(seg.de).toBeTruthy();
        expect(seg.ar).toBeTruthy();
      });
    }
  });

  it("كل سؤال فهم له إجابة صحيحة واحدة فقط", () => {
    for (const s of INTERACTIVE_STORIES) {
      for (const seg of s.segments) {
        if (seg.question) {
          const correct = seg.question.options.filter((o) => o.correct);
          expect(correct.length, `قصة ${s.id}: يجب أن يكون صحيح واحد بالضبط`).toBe(1);
          expect(seg.question.options.length).toBeGreaterThanOrEqual(2);
        }
      }
    }
  });

  it("كل قصة لها سؤالا فهم على الأقل + شرح لكل خيار (إثراء 2026-08)", () => {
    for (const s of INTERACTIVE_STORIES) {
      const qs = s.segments.filter((seg) => seg.question);
      expect(qs.length, `قصة ${s.id} «${s.titleAr}» تحتاج سؤالين على الأقل`).toBeGreaterThanOrEqual(2);
      for (const q of qs) {
        for (const opt of q.question?.options ?? []) {
          expect(opt.explanation?.trim(), `قصة ${s.id}: خيار «${opt.text}» بلا شرح`).toBeTruthy();
        }
      }
    }
  });

  it("يعرض قصتي الطبيب والأسنان كخيال تدريبي لا كنصيحة طبية", () => {
    const doctorStory = INTERACTIVE_STORIES.find(({ id }) => id === "a2-beim-arzt");
    const dentistStory = INTERACTIVE_STORIES.find(({ id }) => id === "a2-zahnarzt");
    expect(doctorStory?.description).toContain("خيالية");
    expect(doctorStory?.description).toContain("ليست إرشاداً طبياً");
    expect(doctorStory?.segments[2]?.de).toContain("sich ausruhen und zu Hause bleiben");
    expect(doctorStory?.segments[2]?.de).not.toContain("viel trinken");
    expect(dentistStory?.description).toContain("خيالية");
    expect(dentistStory?.description).toContain("ليست إرشاداً طبياً أو تشخيصاً");
  });

  it("يؤطّر قصتي التقديم والعمل عن بعد المرتبطتين بـB2-09 كحالات تدريبية لا كتعميمات", () => {
    const applicationStory = INTERACTIVE_STORIES.find(({ id }) => id === "b2-bewerbung");
    const homeofficeStory = INTERACTIVE_STORIES.find(({ id }) => id === "b2-homeoffice-kultur");
    expect(applicationStory?.description).toContain("خيالية");
    expect(applicationStory?.segments[5]?.de).toContain("Eine gute Vorbereitung kann helfen");
    expect(homeofficeStory?.description).toContain("خيالي");
    expect(homeofficeStory?.description).toContain("لا يقرر اتجاهات عامة");
    expect(homeofficeStory?.segments[1]?.de).toContain("die Produktivität sei im Homeoffice gestiegen");
  });

  it("يصرّح بأن قصة المطعم خيالية ولا يعرض الإكرامية كقاعدة عامة", () => {
    const restaurantStory = INTERACTIVE_STORIES.find(({ id }) => id === "a2-im-restaurant");
    expect(restaurantStory?.description).toContain("خيالية");
    expect(restaurantStory?.segments[5]?.de).toContain("freiwillig Trinkgeld");
    expect(restaurantStory?.segments[5]?.ar).toContain("طوعاً");
    expect(restaurantStory?.segments[4]?.choices?.[0]?.text).toContain("zwei Portionen Eis");
  });

  it("يحافظ حوار كلب ماكس على سؤال وجواب واضحين عن النفي، وينتظر مع أمه صاحب الكلب", () => {
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "a1-max-hund");
    const question = story?.segments.find(({ id }) => id === 4)?.question;
    expect(story?.segments[2]?.de).toContain("bleibt mit dem Hund im Park");
    expect(story?.segments[2]?.ar).toContain("يبقى ماكس مع الكلب في الحديقة");
    expect(question?.de).toBe("Kennt Max den Hund?");
    expect(question?.options.filter(({ correct }) => correct)).toEqual([
      expect.objectContaining({ text: "Nein, er kennt ihn nicht." }),
    ]);
  });

  it("كل اختيار يشير إلى مقطع موجود داخل القصة نفسها", () => {
    for (const s of INTERACTIVE_STORIES) {
      const ids = new Set(s.segments.map((seg) => seg.id));
      for (const seg of s.segments) {
        for (const c of seg.choices ?? []) {
          expect(ids.has(c.next), `قصة ${s.id}: اختيار يشير لمقطع غير موجود`).toBe(true);
          expect(c.text).toBeTruthy();
          expect(c.ar).toBeTruthy();
        }
      }
    }
  });

  it("محتوى A1 بسيط: لا يستخدم Konjunktiv ولا جمل ثانوية معقدة", () => {
    const a1 = getStoriesByLevel("A1");
    const complex = ["würde", "hätte", "wäre", "weil", "dass ", "obwohl", "Passiv"];
    for (const s of a1) {
      for (const seg of s.segments) {
        for (const word of complex) {
          expect(seg.de.toLowerCase().includes(word), `A1 «${s.id}» يحتوي كلمة متقدمة: ${word}`).toBe(false);
        }
      }
    }
  });

  it("محتوى B2 يستخدم لغة متقدمة (نقل كلام/أسلوب رسمي)", () => {
    const b2 = getStoriesByLevel("B2");
    for (const s of b2) {
      expect(s.grammar).toMatch(/Konjunktiv|رسمي|أكاديمية|اشتقاق|ثقافة|gewöhnen|متقدمة|تأقلم|نقل|نقد|أعمال|تحليل|خبراء|الهوية|الهجر|المستقبل/);
    }
  });
});

describe("حراسة مقابلات frühstücken", () => {
  it("تطابق ترجمة تناول الفطور مع القصة التفاعلية", () => {
    const breakfast = INTERACTIVE_STORIES.find(({ id }) => id === "a1-das-fruehstueck");
    expect(breakfast?.segments[0]?.de).toContain("frühstückt");
    expect(breakfast?.segments[0]?.ar).toContain("تتناول العائلة الفطور");
  });
});
