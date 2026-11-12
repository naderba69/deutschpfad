/**
 * a2-05 — كتلتا النظرية وتصنيفاتُ السياق والخطأ وملاحظاتُ النطق والبطاقاتُ والمهامّ الاختيارية · الملاحظاتُ التكميلية والوساطةُ والتفاعلُ الاختياري (جزء من تدقيق الدرس)
 * فُصل من a2-05.test.ts في الدفعة 107 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA205 } from "@/data/lessons/a2/a2-05";
import { ids } from "./fixtures";

describe("A2-05 audited lesson", () => {
  it("checks both theory blocks, contextual/error labels, pronunciation notes, cards, and optional tasks", () => {
    expect(ids(lessonA205.theory)).toEqual(["t1", "t2"]);
    expect(lessonA205.theory.map((block) => block.examples.length)).toEqual([8, 8]);
    expect(lessonA205.theory.map((block) => block.commonMistakes.length)).toEqual([3, 4]);
    for (const block of lessonA205.theory) {
      expect(block.explanationAr.length).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length).toBeLessThanOrEqual(2800);
      expect(block.explanationAr.split(/\n\s*\n/).filter((paragraph) => paragraph.trim()).length).toBeGreaterThanOrEqual(2);
      expect(block.whyAr.length).toBeGreaterThanOrEqual(250);
      expect(block.comparisonWithArabic.length).toBeGreaterThanOrEqual(250);
      expect(block.relatedRuleComparison?.content.length).toBeGreaterThan(100);
      expect(block.examples.every((example) => example.de.trim() && example.ar.trim())).toBe(true);
      expect(block.commonMistakes.every((mistake) => mistake.wrong && mistake.right && mistake.whyAr.length > 60 && mistake.classification)).toBe(true);
      if (block.table) {
        expect(block.table.rows.length).toBe(block.id === "t1" ? 6 : 8);
        for (const row of block.table.rows) expect(row.cells).toHaveLength(block.table.columns.length - 1);
      }
    }
    expect(lessonA205.theory[0].table?.rows.map((row) => [row.label, ...row.cells])).toEqual([
      ["ich", "war", "hatte", "Ich war gestern im Büro."],
      ["du", "warst", "hattest", "Du warst krank und hattest Fieber."],
      ["er/sie/es", "war", "hatte", "Anna war krank und hatte Fieber."],
      ["wir", "waren", "hatten", "Wir waren in einer Besprechung."],
      ["ihr", "wart", "hattet", "Ihr wart spät und hattet wenig Zeit."],
      ["sie/Sie", "waren", "hatten", "Die Kollegen waren im Büro."],
    ]);
    expect(lessonA205.theory.map((block) => block.examples.map((example) => [example.de, example.ar]))).toEqual([
      [
        ["Ich war gestern im Büro.", "كنت أمس في المكتب."],
        ["Du hattest am Montag einen Termin.", "كان لديك موعد يوم الاثنين."],
        ["Anna war krank und hatte Fieber.", "كانت آنا مريضة وكان لديها حمى."],
        ["Wir waren in einer Besprechung.", "كنا في اجتماع."],
        ["Ihr hattet viel Arbeit.", "كان لديكم عمل كثير."],
        ["Die Kollegen hatten keine Zeit.", "لم يكن لدى الزملاء وقت."],
        ["Herr Schulz war heute Morgen im Büro.", "كان السيد شولتس في المكتب هذا الصباح."],
        ["Ich bin gestern krank gewesen.", "كنت مريضاً أمس؛ هذه صيغة Perfekt صحيحة أيضاً."],
      ],
      [
        ["Firma Weber, Anna Weber, guten Tag!", "شركة فيبر، آنا فيبر، طاب يومك!"],
        ["Guten Tag, hier ist Sami Ben Ali.", "طاب يومك، معك سامي بن علي."],
        ["Mit wem spreche ich, bitte?", "مع من أتحدث، من فضلك؟"],
        ["Einen Moment bitte. Ich verbinde Sie.", "لحظة، من فضلك. سأحوّلك إلى الجهة المطلوبة."],
        ["Kann ich eine Nachricht hinterlassen?", "هل يمكنني ترك رسالة؟"],
        ["Sehr geehrte Frau Weber,\nvielen Dank für Ihre Nachricht.", "السيدة فيبر المحترمة،\nشكراً جزيلاً على رسالتك."],
        ["Mit freundlichen Grüßen\nAnna Weber", "مع خالص التحيات\nآنا فيبر"],
        ["Hallo Anna,\nhast du heute Zeit?", "مرحباً آنا،\nهل لديك وقت اليوم؟ (مثال غير رسمي لزميلة معروفة)"],
      ],
    ]);
    expect(lessonA205.theory.map((block) => block.commonMistakes.map((item) => [item.wrong, item.right, item.classification]))).toEqual([
      [
        ["Ich war gestern im Büro gewesen. (أصف أمس فقط، بلا نقطة ماضية أسبق)", "Ich war gestern im Büro.", "contextual-alternative"],
        ["Wir war gestern im Büro.", "Wir waren gestern im Büro.", "error"],
        ["Ich hatte ein Termin.", "Ich hatte einen Termin.", "error"],
      ],
      [
        ["Hallo Herr Weber, (في أول رسالة إلى شخص غير معروف)", "Sehr geehrter Herr Weber,", "contextual-alternative"],
        ["Mit freundliche Grüßen", "Mit freundlichen Grüßen", "error"],
        ["Mit freundlichen Grüßen,\nAnna Weber", "Mit freundlichen Grüßen\nAnna Weber", "error"],
        ["Ich verbinden Sie.", "Ich verbinde Sie.", "error"],
      ],
    ]);
    expect(lessonA205.theory[0].commonMistakes[0].classification).toBe("contextual-alternative");
    expect(lessonA205.theory[0].commonMistakes[0].whyAr).toContain("ليست صيغة مستحيلة");
    expect(lessonA205.theory[0].commonMistakes.slice(1).every((item) => item.classification === "error")).toBe(true);
    expect(lessonA205.theory[1].commonMistakes[0].classification).toBe("contextual-alternative");
    expect(lessonA205.theory[1].commonMistakes.slice(1).every((item) => item.classification === "error")).toBe(true);
    expect(lessonA205.theory[0].examples.find((example) => example.de === "Ich bin gestern krank gewesen.")).toBeDefined();
    expect(lessonA205.theory[0].relatedRuleComparison?.content).toContain("Plusquamperfekt");
    expect(lessonA205.theory[0].comparisonWithArabic).toContain("لا تعني أن sein يقابل دائماً");
    expect(lessonA205.theory[1].explanationAr).toContain("Hallo قد تناسب زميلاً تعرفه");
    expect(lessonA205.theory[1].examples.find((example) => example.de === "Mit freundlichen Grüßen\nAnna Weber")).toBeDefined();

    expect(lessonA205.pronunciation.items.map((item) => item.de)).toEqual([
      "das Büro", "anrufen", "der Kollege", "die Besprechung", "die Nachricht", "verbinden",
    ]);
    expect(lessonA205.pronunciation.items.map((item) => item.note.match(/\[[^\]]+\]/)?.[0])).toEqual([
      "[byˈʀoː]", "[ˈanʀuːfn̩]", "[kɔˈleːɡə]", "[bəˈʃpʀɛçʊŋ]", "[ˈnaːxʁɪçt]", "[fɛɐ̯ˈbɪndn̩]",
    ]);
    expect(lessonA205.pronunciation.items.find((item) => item.de === "die Nachricht")?.note).toContain("ch بعد a هو [x]");
    expect(lessonA205.pronunciation.items.find((item) => item.de === "die Nachricht")?.note).toContain("بعد i هو [ç]");
    expect(lessonA205.pronunciation.items.find((item) => item.de === "die Besprechung")?.note).toContain("لا يطابق تماماً شيناً أو خاءً عربية");
    expect(lessonA205.pronunciation.tip).toContain("IPA");
    expect(lessonA205.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA205.pronunciation.shadowing?.[1].tip).toContain("/ç/");

    expect(ids(lessonA205.flashcards)).toEqual(Array.from({length: 12}, (_, i) => `fc${i + 1}`).sort());
    expect(lessonA205.flashcards.every((card) => card.de && card.ar && card.example && card.exampleAr)).toBe(true);
    expect(new Set(lessonA205.flashcards.map((card) => card.de.toLowerCase())).size).toBe(lessonA205.flashcards.length);
    expect(lessonA205.mediation).toHaveLength(1);
    expect(lessonA205.mediation?.[0].sourceDe).toBe("Liebe Kolleginnen und Kollegen, die Besprechung findet morgen um 10 Uhr im Raum 3 statt. Bitte bringen Sie Ihre Berichte mit.");
    expect(lessonA205.mediation?.[0].keyPointsAr).toHaveLength(3);
    expect(lessonA205.interaction).toHaveLength(1);
    expect(lessonA205.interaction?.[0].rounds).toHaveLength(2);
    for (const round of lessonA205.interaction?.[0].rounds ?? []) {
      expect(round.options.filter((option) => option.best).length).toBe(1);
      expect(round.options.length).toBe(2);
      expect(round.options.every((option) => option.de && option.ar && option.replyDe && option.replyAr)).toBe(true);
    }
    expect(lessonA205.interaction?.[0].strategyAr).toContain("ليس تقويماً للكلام");
    expect(lessonA205.lernziele.some((goal) => /sprechen|aussprechen|telefonieren/i.test(goal.de))).toBe(false);
  });

  it("checks every supplementary note, pronunciation item, card, mediation point, and optional interaction", () => {
    const tips = lessonA205.fehlerUndTipps;
    if (!tips?.culturalNote) throw new Error("A2-05 must keep its reviewed error tips and cultural note");
    expect(tips.mistakes.map((item) => [item.wrong, item.right, item.whyAr, item.classification])).toEqual([
      ["Wir war gestern im Büro.", "Wir waren gestern im Büro.", "wir فاعل جمع، لذلك نستخدم waren لا war.", "error"],
      ["Ich hatte ein Termin.", "Ich hatte einen Termin.", "Termin مذكر ومفعول به؛ أداة النكرة في Akkusativ هي einen.", "error"],
      ["Mit freundliche Grüßen", "Mit freundlichen Grüßen", "mit يطلب Dativ؛ لذلك تأتي الصفة freundlichen قبل Grüßen.", "error"],
      ["Mit freundlichen Grüßen,", "Mit freundlichen Grüßen", "الخاتمة المستقلة في هذا النمط الألماني لا تتبعها فاصلة أو نقطة؛ الاسم يأتي في سطر مستقل.", "error"],
    ]);
    expect(tips.eselsbruecken).toEqual([
      "راجع الضمير قبل النهاية: ich war / du warst / wir waren؛ ich hatte / du hattest / wir hatten.",
      "في الهاتف، حدّد دورك: تعريف الجهة أو الاسم عند الرد، والتعريف بالنفس عند الاتصال؛ الصيغة الدقيقة تتبع السياق.",
      "في البريد الرسمي النموذجي: فاصلة بعد Anrede، ولا علامة ترقيم بعد Mit freundlichen Grüßen المستقلة.",
    ]);
    expect(tips.culturalNote).toEqual({
      title: "اختلاف السياق في الهاتف والمراسلات",
      content: "عبارات الدرس نماذج لغوية لمواقف عمل مختلفة، وليست وصفاً ملزماً لطريقة جميع المؤسسات أو المتحدثين. قد يعرّف الموظف الجهة واسمه عند الرد، وقد يبدأ المتصل بتعريف نفسه؛ اتبع ما يلائم الدور والعلاقة. أما الموعد فيُنسق مع الطرف الآخر: ثبّت الوقت المتفق عليه وأبلغ الشخص إذا تعذر الحضور، ولا توجد هنا قاعدة عامة عن عدد دقائق التبكير.",
    });

    expect(lessonA205.pronunciation.items.map((item) => [item.de, item.ar, item.note])).toEqual([
      ["das Büro", "المكتب", "IPA: [byˈʀoː]؛ ü في المقطع الأول صوت أمامي مدوّر [y]، وليس صوت u العربي؛ o في المقطع المنبور طويل."],
      ["anrufen", "يتصل هاتفياً", "IPA: [ˈanʀuːfn̩]؛ الجزء المنفصل an يحمل النبر الرئيس، وrufen يبقى في المصدر من حيث بناء الكلمة."],
      ["der Kollege", "الزميل", "IPA: [kɔˈleːɡə]؛ النبر على المقطع الثاني، وفيه e طويلة [eː]."],
      ["die Besprechung", "الاجتماع", "IPA: [bəˈʃpʀɛçʊŋ]؛ sp في بداية المقطع المنبور = [ʃp]، وch بعد e = [ç]، ولا يطابق تماماً شيناً أو خاءً عربية."],
      ["die Nachricht", "الرسالة", "IPA: [ˈnaːxʁɪçt]؛ ch بعد a هو [x]، وبعد i هو [ç]؛ يختلف الصوتان بحسب الحركة السابقة."],
      ["verbinden", "يحوّل/يصل المكالمة", "IPA: [fɛɐ̯ˈbɪndn̩]؛ v في ver هنا [f]، والنبر على bin؛ النطق قد يحقق نهاية -en بمقطع أنفي مخفّف."],
    ]);
    expect(lessonA205.pronunciation.tip).toBe("استخدم رموز IPA أو تسجيلاً موثوقاً عند التدرب. لا يقابل ü في Büro صوت عربي مطابق؛ فلا تختزله إلى /u/ أو /i/. وch في Besprechung [ç] ليس شيناً أو خاءً مطابقة؛ أما Nachricht ففيها [x] بعد a و[ç] بعد i. قد يختلف تحقيق r الألماني بحسب المتحدث والمنطقة؛ وهذه الرموز أوصاف قاموسية وليست طريقة نطق وحيدة.");
    expect(lessonA205.pronunciation.shadowing?.map((line) => [line.de, line.ar, line.tip])).toEqual([
      ["Firma Weber, guten Tag!", "شركة فيبر، طاب يومك!", "ابدأ بتحية قصيرة واضحة، ثم انطق اسم الشركة؛ هذا تدريب نطق لا تقييم لمكالمة حقيقية."],
      ["Ich verbinde Sie.", "سأحوّلك إلى الجهة المطلوبة.", "ich ينتهي بـ /ç/ بعد حركة أمامية؛ verbinde: /fɛɐ̯ˈbɪndə/."],
      ["Ich war gestern im Büro.", "كنت أمس في المكتب.", "war /vaːɐ̯/؛ Büro /byˈʁoː/، والنبر الرئيس على المقطع الأخير."],
      ["Wir hatten viel Arbeit.", "كان لدينا عمل كثير.", "hatten: /ˈhatn̩/؛ الكتابة tt بعد الحركة القصيرة لا تعني نطق t طويلة مستقلة."],
    ]);

    expect(lessonA205.flashcards.map((card) => [card.de, card.ar, card.example, card.exampleAr, card.level])).toEqual([
      ["das Büro", "المكتب", "Ich arbeite im Büro.", "أعمل في المكتب.", "A2"],
      ["anrufen", "يتصل هاتفياً", "Ich rufe dich morgen an.", "سأتصل بك غداً.", "A2"],
      ["der Kollege / die Kollegin", "الزميل / الزميلة", "Meine Kollegin ist freundlich.", "زميلتي ودودة.", "A2"],
      ["die Besprechung", "الاجتماع", "Wir hatten eine Besprechung.", "كان لدينا اجتماع.", "A2"],
      ["die E-Mail", "البريد الإلكتروني", "Schick mir bitte eine E-Mail.", "أرسل لي بريداً إلكترونياً من فضلك.", "A2"],
      ["das Präteritum", "الماضي البسيط", "war, hatte, konnte", "كان، كان لديه، استطاع.", "A2"],
      ["formelle Anrede", "تحية افتتاحية رسمية", "Sehr geehrter Herr Weber,", "السيد فيبر المحترم،", "A2"],
      ["Mit freundlichen Grüßen", "مع خالص التحيات", "Mit freundlichen Grüßen\nAnna Weber", "مع خالص التحيات\nآنا فيبر", "A2"],
      ["zurückrufen", "يعاود الاتصال", "Ich rufe heute Nachmittag zurück.", "سأتصل مجدداً بعد ظهر اليوم.", "A2"],
      ["die Nachricht", "الرسالة", "Kann ich eine Nachricht hinterlassen?", "هل يمكنني ترك رسالة؟", "A2"],
      ["die Notiz", "الملاحظة المكتوبة", "Schick mir bitte die Notizen.", "أرسل إليّ الملاحظات من فضلك.", "A2"],
      ["der Bericht", "التقرير", "Ich möchte den Bericht heute fertig schreiben.", "أودّ إنهاء التقرير اليوم.", "A2"],
    ]);

    expect(lessonA205.mediation).toEqual([{
      id: "med-a2-05-1",
      type: "relay-instructions",
      titleAr: "انقل تعليمات بريد عمل بالعربية إلى زميل",
      sourceDe: "Liebe Kolleginnen und Kollegen, die Besprechung findet morgen um 10 Uhr im Raum 3 statt. Bitte bringen Sie Ihre Berichte mit.",
      taskAr: "انقل المعلومات إلى العربية: موعد الاجتماع ومكانه وما ينبغي إحضاره.",
      modelAnswerAr: "«أعزائي الزملاء، الاجتماع غداً الساعة العاشرة في الغرفة 3. يرجى إحضار تقاريركم.»",
      keyPointsAr: ["نقل أن الاجتماع غداً الساعة 10", "ذكر الغرفة 3", "نقل طلب إحضار التقارير"],
    }]);
    expect(lessonA205.interaction).toEqual([{
      id: "int-a2-05-1",
      scenarioAr: "مكالمة عمل للاعتذار عن موعد الساعة الثانية واقتراح موعد بديل.",
      scenarioDe: "Beruflicher Anruf: einen Termin verschieben und eine Alternative vorschlagen.",
      strategyAr: "اعتذر بوضوح واقترح وقتاً محدداً، وانتبه إلى Sie/Ihnen. هذا تفاعل نصي اختياري وليس تقويماً للكلام أو النطق.",
      rounds: [
        {
          speakerDe: "Guten Morgen, Herr Ali. Sie haben heute um 14 Uhr einen Termin.",
          speakerAr: "صباح الخير، سيد علي. لديك موعد اليوم الساعة الثانية.",
          options: [
            {de: "Es tut mir leid. Ich kann heute um 14 Uhr nicht kommen. Können wir den Termin verschieben?", ar: "آسف. لا أستطيع الحضور اليوم الساعة الثانية. هل يمكننا تأجيل الموعد؟", best: true, replyDe: "Natürlich. Wann passt es Ihnen besser?", replyAr: "بالطبع. ما الوقت الأنسب لك؟"},
            {de: "Ich komme heute nicht und das ist Ihr Problem.", ar: "لن آتي اليوم وهذه مشكلتك.", best: false, replyDe: "Ein höflicher Vorschlag wäre hier passender.", replyAr: "يكون اقتراح بديل مهذب أنسب هنا."},
          ],
        },
        {
          speakerDe: "Wann passt es Ihnen besser?",
          speakerAr: "ما الوقت الأنسب لك؟",
          options: [
            {de: "Wäre übermorgen um 10 Uhr möglich?", ar: "هل يمكن بعد غد الساعة العاشرة؟", best: true, replyDe: "Ja, das passt mir. Ich notiere den Termin.", replyAr: "نعم، يناسبني ذلك. سأدوّن الموعد."},
            {de: "Ich weiß nicht, vielleicht nie.", ar: "لا أعرف، ربما أبداً.", best: false, replyDe: "Wir brauchen einen konkreten Vorschlag.", replyAr: "نحتاج إلى اقتراح محدد."},
          ],
        },
      ],
    }]);
  });
});
