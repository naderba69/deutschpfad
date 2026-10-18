/**
 * a2-10 — المهارات: ملاحظات النطق بـIPA ومهامّ الكتابة المقيّدة (جزء من تدقيق الدرس)
 * فُصل من a2-10.test.ts في الدفعة 102 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { lessonA210 } from "@/data/lessons/a2/a2-10";
import { task, goal } from "./fixtures";

describe("A2-10 lesson content audit", () => {
  it("checks pronunciation notes against the reviewed IPA and removes misleading Arabic sound substitutions", () => {
    const expectedIpa: Record<string, string> = {
      "die Prüfung": "[ˈpʁyːfʊŋ]",
      "der Unterricht": "[ˈʊntɐˌʁɪçt]",
      studieren: "[ʃtuˈdiːʁən]",
      "die Vokabel (Plural: die Vokabeln)": "[voˈkaːbl̩]",
      bestehen: "[bəˈʃteːən]",
      "der Lehrer": "[ˈleːʁɐ]",
    };
    const expectedArabic: Record<string, string> = {
      "die Prüfung": "الامتحان",
      "der Unterricht": "التعليم أو الحصة",
      studieren: "يدرس في الجامعة",
      "die Vokabel (Plural: die Vokabeln)": "المفردة (الجمع: المفردات)",
      bestehen: "يجتاز امتحاناً",
      "der Lehrer": "المعلم",
    };
    const expectedNotes: Record<string, string> = {
      "die Prüfung": "IPA: [ˈpʁyːfʊŋ]. النبر على المقطع الأول؛ ü هي /yː/ طويلة ومدوّرة، وng تمثل /ŋ/. يختلف نطق r إقليمياً.",
      "der Unterricht": "IPA: [ˈʊntɐˌʁɪçt]. في هذا الموضع ch هي /ç/ (الصوت الألماني في ich)، وليست /ʃ/.",
      studieren: "IPA: [ʃtuˈdiːʁən]. النبر على مقطع -die-، وie تمثل /iː/ طويلة.",
      "die Vokabel (Plural: die Vokabeln)": "IPA للمفرد: [voˈkaːbl̩]. v في هذه الكلمة /v/، والنبر على المقطع الثاني؛ لا تُعمّم هذا النطق على كل كلمة فيها v.",
      bestehen: "IPA: [bəˈʃteːən]. النبر على -ste-؛ ويُنطق st في بداية المقطع المنبور /ʃt/.",
      "der Lehrer": "IPA: [ˈleːʁɐ]. النبر على المقطع الأول، وe فيه طويلة؛ يتغير تحقيق r بحسب المتحدث والمنطقة.",
    };
    expect(Object.keys(expectedIpa).sort()).toEqual(lessonA210.pronunciation.items.map((item) => item.de).sort());
    expect(lessonA210.pronunciation.items.map((item) => [item.de, item.ar])).toEqual(
      Object.entries(expectedArabic),
    );
    for (const item of lessonA210.pronunciation.items) {
      expect(item.note).toBe(expectedNotes[item.de]);
      expect(item.note).toContain(expectedIpa[item.de] ?? "");
      expect(item.ar.trim()).not.toBe("");
    }
    expect(lessonA210.pronunciation.tip).toBe(
      "استخدم IPA مرجعاً للصوت لا تهجئة عربية تقريبية: لا تمثل العربية /yː/ أو /ç/ تمثيلاً مطابقاً. استمع إلى النطق المعروض في القاموس، ولا تعتبر تهجئة عربية مثل «پريوفونغ» معياراً صوتياً.",
    );
    expect(lessonA210.pronunciation.items[1]?.note).toContain("/ç/");
    expect(lessonA210.pronunciation.items[3]?.note).toContain("v في هذه الكلمة /v/");
    expect(lessonA210.pronunciation.items.map((item) => item.note).join(" ")).not.toMatch(
      /v\s*=\s*ف|ch.*=\s*ش ناعمة|s بين علة = ز/,
    );
    const shadowing = lessonA210.pronunciation.shadowing;
    expect(shadowing).toBeDefined();
    expect(shadowing?.map(({ de, ar, tip }) => [de, ar, tip])).toEqual([
      ["Ich lerne weiter, weil ich die Prüfung bestehen will.", "أواصل التعلم لأنني أريد اجتياز الامتحان.", "في هذا النمط التابع يأتي الفعل المصرف will في النهاية، بعد bestehen."],
      ["Wenn ich Zeit habe, wiederhole ich Vokabeln.", "إذا توفر لديّ وقت، أراجع المفردات.", "ينتهي الجزء التابع بـhabe؛ وبعده يأتي فعل الجملة الرئيسية wiederhole قبل الفاعل ich."],
      ["Ich weiß nicht, ob er kommt.", "لا أعرف ما إذا كان سيأتي.", "ei في weiß هو /aɪ̯/؛ وw في الألمانية القياسية يُنطق /v/."],
      ["Die Prüfung ist leicht.", "الامتحان سهل.", "ei في leicht هو /aɪ̯/، وch هنا /ç/ لا /x/."],
    ]);
  });

  it("checks writing prompts as bounded tasks rather than evidence of free writing", () => {
    const w1 = task("w1");
    expect(w1.type).toBe("transformation");
    if (w1.type !== "transformation") throw new Error("w1 must be transformation");
    expect(w1).toMatchObject({
      instructionAr: "اكتب جملة موجّهة باستخدام weil:",
      prompt: "اكتب: «أتعلم الألمانية لأنها مهمة» بالألمانية، مستخدماً es في الجملة التابعة.",
      acceptedAnswers: ["Ich lerne Deutsch, weil es wichtig ist", "Ich lerne Deutsch, weil es wichtig ist."],
      sampleAnswer: "Ich lerne Deutsch, weil es wichtig ist.",
      explanation: "Deutsch هنا اسم اللغة؛ يصوغ النموذج المطلوب: Ich lerne Deutsch + weil + es wichtig ist. يأتي الفعل المصرف ist في نهاية الجملة التابعة.",
    });

    const w2 = task("w2");
    expect(w2.type).toBe("fill-blank");
    expect(w2).toMatchObject({
      instructionAr: "أكمل على الترتيب: سبب (weil)، شرط/وقت (wenn)، سؤال غير مباشر بنعم أو لا (ob):",
      template:
        "Ich lerne noch, ___ ich die Prüfung bestehen will. ___ ich morgens Zeit habe, wiederhole ich Vokabeln. Ich weiß nicht, ___ die Prüfung schwer ist.",
      blanks: [
        { correct: "weil", options: ["weil", "wenn", "ob"] },
        { correct: "Wenn", options: ["Wenn", "Weil", "Ob"] },
        { correct: "ob", options: ["ob", "weil", "wenn"] },
      ],
      explanation: "الجملة الأولى تعطي سبب الاستمرار في التعلم: weil. والثانية تقدّم وقتاً/شرطاً: wenn، مع فعل مصروف في آخر الجزء التابع. والثالثة سؤال غير مباشر بنعم/لا: ob.",
    });

    const w3 = task("w3");
    expect(w3.type).toBe("dictation");
    if (w3.type !== "dictation") throw new Error("w3 must be dictation");
    expect(w3).toMatchObject({
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich weiß nicht, ob die Prüfung schwer ist.",
      explanation: "لا أعرف هل الامتحان صعب — ob + الفعل في النهاية.",
    });
    const writingGoal = goal("z-writing");
    expect(writingGoal.ar).toMatch(/مهام كتابة مضبوطة لا كتابة حرة/);
    expect(writingGoal.de).not.toMatch(/frei|sprechen|Sprechen/);
    expect(writingGoal.evidence?.exerciseIds).toEqual(["w1", "w2", "w3"]);
    expect(writingGoal.evidence?.completion).toBe("all-correct");
  });
});
