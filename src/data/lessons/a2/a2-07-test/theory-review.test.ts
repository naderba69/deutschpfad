/**
 * a2-07 — النظرية والأمثلة والأخطاء والنطق والمراجعة والبطاقات والثقافة والوساطة والتفاعل وأحداث التحليلات (جزء من تدقيق الدرس)
 * فُصل من a2-07.test.ts في الدفعة 101 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { lessonA207 } from "@/data/lessons/a2/a2-07";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import { task, ids, goalEvent } from "./fixtures";
import type { AnalyticsEvent } from "@/types/analytics";

describe("A2-07 audited lesson", () => {
  it("checks theory claims, contrast tables, all examples, error classifications, and pronunciation notes", () => {
    expect(ids(lessonA207.theory)).toEqual(["t1", "t2"]);
    expect(lessonA207.theory.map((block) => block.examples.length)).toEqual([8, 8]);
    expect(lessonA207.theory.map((block) => block.commonMistakes.length)).toEqual([4, 4]);
    for (const block of lessonA207.theory) {
      expect(block.explanationAr.length).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length).toBeLessThanOrEqual(2800);
      expect(block.explanationAr.split(/\n\s*\n/).filter((paragraph) => paragraph.trim())).toHaveLength(3);
      expect(block.whyAr.length).toBeGreaterThanOrEqual(250);
      expect(block.comparisonWithArabic.length).toBeGreaterThanOrEqual(250);
      expect(block.relatedRuleComparison?.content.length).toBeGreaterThan(100);
      expect(block.examples.every((example) => example.de.trim() && example.ar.trim())).toBe(true);
      expect(
        block.commonMistakes.every(
          (mistake) =>
            mistake.wrong &&
            mistake.right &&
            mistake.whyAr.length > 60 &&
            new Set<string>(["error", "contextual-alternative", "pedagogical-simplification"]).has(
              mistake.classification ?? "",
            ),
        ),
      ).toBe(true);
    }
    expect(lessonA207.theory[0].examples).toEqual([
      { de: "Es gibt eine Bank in der Nähe.", ar: "يوجد بنك قريب." },
      { de: "Es gibt einen Park im Zentrum.", ar: "يوجد منتزه في وسط المدينة." },
      { de: "Es gibt ein Konto für den Alltag.", ar: "يوجد حساب للاستخدام اليومي." },
      { de: "Gibt es hier einen Geldautomaten?", ar: "هل يوجد صراف آلي هنا؟" },
      { de: "Es gibt keine Filiale am Bahnhof.", ar: "لا يوجد فرع مصرفي في المحطة." },
      { de: "In der Nähe gibt es mehrere Banken.", ar: "يوجد في الجوار عدة بنوك." },
      { de: "Früher gab es hier eine kleine Bank.", ar: "كان يوجد هنا مصرف صغير سابقاً." },
      { de: "Es hat früher hier einen Geldautomaten gegeben.", ar: "كان يوجد هنا صراف آلي سابقاً." },
    ]);
    expect(lessonA207.theory[0].table?.columns).toEqual([
      "الاستعمال",
      "المثال الألماني",
      "ملاحظة",
    ]);
    expect(lessonA207.theory[0].table?.rows.map((row) => row.cells[0])).toEqual([
      "Es gibt eine Bank.",
      "Es gibt einen Park.",
      "Es gibt ein Konto.",
      "Es gibt viele Banken.",
      "Gibt es hier eine Filiale?",
      "Es gibt keinen Geldautomaten.",
      "Früher gab es hier eine Bank.",
    ]);
    expect(lessonA207.theory[0].explanationAr).toContain("Akkusativ");
    expect(lessonA207.theory[0].explanationAr).toContain("Es gibt einen Park");
    expect(lessonA207.theory[0].explanationAr).toContain("Es gab einen Park");
    expect(lessonA207.theory[0].explanationAr).toContain("Es hat einen Park gegeben");
    expect(lessonA207.theory[0].explanationAr).toContain("جمعُ الشيء المذكور");
    expect(lessonA207.theory[0].explanationAr).toContain("Geldautomaten");
    expect(lessonA207.theory[0].whyAr).toContain("Duden");
    expect(lessonA207.theory[0].whyAr).toContain("Grammis");
    expect(lessonA207.theory[0].comparisonWithArabic).toContain("لا تنقل اسم الحالة أو علامة الإعراب من لغة إلى الأخرى آلياً");
    expect(lessonA207.theory[0].relatedRuleComparison?.content).toContain("Nominativ");
    expect(lessonA207.theory[0].commonMistakes.map((mistake) => [mistake.wrong, mistake.right, mistake.classification])).toEqual([
      ["Es gibt ein Bank.", "Es gibt eine Bank.", "error"],
      ["Es geben viele Banken.", "Es gibt viele Banken.", "error"],
      ["Es gibt der Park.", "Es gibt einen Park.", "error"],
      ["Es gibt keinen Automat.", "Es gibt keinen Automaten.", "error"],
    ]);

    expect(lessonA207.theory[1].examples).toEqual([
      { de: "Ich sehe dich jeden Tag.", ar: "أراك كل يوم." },
      { de: "Kannst du mir helfen?", ar: "هل يمكنك مساعدتي؟" },
      { de: "Das Buch gehört ihm.", ar: "هذا الكتاب يخصه." },
      { de: "Ich danke dir für alles.", ar: "أشكرك على كل شيء." },
      { de: "Sie liebt mich.", ar: "هي تحبني." },
      { de: "Können Sie mir bitte helfen?", ar: "هل يمكنكم مساعدتي من فضلكم؟" },
      { de: "Ich fahre mit ihr zur Bank.", ar: "أذهب معها إلى البنك." },
      { de: "Wir sehen sie am Bahnhof.", ar: "نراهم/نراهن في المحطة." },
    ]);
    expect(lessonA207.theory[1].table?.columns).toEqual([
      "الشخص",
      "Nominativ",
      "Akkusativ",
      "Dativ",
    ]);
    expect(lessonA207.theory[1].table?.rows.map((row) => row.cells)).toEqual([
      ["ich", "mich", "mir"],
      ["du", "dich", "dir"],
      ["er", "ihn", "ihm"],
      ["sie", "sie", "ihr"],
      ["es", "es", "ihm"],
      ["wir", "uns", "uns"],
      ["ihr", "euch", "euch"],
      ["sie", "sie", "ihnen"],
      ["Sie", "Sie", "Ihnen"],
    ]);
    expect(lessonA207.einfuehrung.connectionToPreviousAr).toContain("هذه ليست أول مرة ترى فيها Dativ");
    expect(lessonA207.einfuehrung.connectionToPreviousAr).toContain("A1-04 وA1-08");
    expect(lessonA207.einfuehrung.connectionToPreviousAr).toContain("A1-06");
    expect(lessonA207.theory[1].comparisonWithArabic).toContain(
      "لا يعني تلقائياً أن نظيرها العربي مجرور",
    );
    expect(lessonA207.theory[1].whyAr).toContain("ليسا بديلين حرّين");
    expect(lessonA207.theory[1].relatedRuleComparison?.content).toContain("mit dir");
    expect(lessonA207.theory[1].commonMistakes.map((mistake) => [mistake.wrong, mistake.right])).toEqual([
      ["Kannst du mich helfen?", "Kannst du mir helfen?"],
      ["Das Buch gehört ihn.", "Das Buch gehört ihm."],
      ["Ich sehe dir jeden Tag.", "Ich sehe dich jeden Tag."],
      ["Ich danke dich.", "Ich danke dir."],
    ]);
    expect(
      [...lessonA207.theory[0].commonMistakes, ...lessonA207.theory[1].commonMistakes].every(
        (mistake) => mistake.classification === "error",
      ),
    ).toBe(true);

    expect(lessonA207.pronunciation.items.map((item) => [item.de, item.ar])).toEqual([
      ["das Konto", "الحساب المصرفي"],
      ["das Geld", "المال"],
      ["überweisen", "يحوّل مالاً"],
      ["der Geldautomat", "الصراف الآلي"],
      ["die Kreditkarte", "بطاقة الائتمان"],
      ["abheben", "يسحب نقوداً من الحساب"],
    ]);
    expect(lessonA207.pronunciation.items.map((item) => item.note)).toEqual([
      "DWDS يورد [ˈkɔnto]: النبر على المقطع الأول، وo الأولى قصيرة مفتوحة [ɔ]. استمع إلى المثال ولا تحوّل النطق إلى كتابة عربية حرفية.",
      "Duden يورد [ɡɛlt]: g صوت وقفي [g] وليس غ، وe قصيرة [ɛ]، أما d في آخر الكلمة فيُنطق [t] في هذا المثال.",
      "قسّمها حسب Duden: über|wei|sen، والنبر على wei. في ü دوّر الشفتين مع إبقاء اللسان قريباً من [i]؛ وei هو [aɪ̯]، وw الألمانية قريب من [v].",
      "ابدأ بـ Geld [ɡɛlt] ثم Automat [aʊ̯toˈmaːt]. انتبه إلى g المجهورة وإلى au [aʊ̯]؛ لا تستخدم غِلت-آوتومات كنقل صوتي عربي.",
      "Duden يورد [kreˈdiːtkartə]: الحرف d المكتوب في Kredit يوافق [t] في هذا الموضع، وie تمثل [iː]. استمع إلى الكلمة كاملة.",
      "قسمة Duden: ab|he|ben؛ لا تُسقط h في heben. والفعل ينفصل في الجملة الرئيسة: Ich hebe Geld ab. استمع إلى التسجيل الصوتي بدلاً من التقريب بحروف عربية.",
    ]);
    expect(lessonA207.pronunciation.tip).toContain("IPA والملاحظات الصوتية أدق من تهجئة عربية تقريبية");
    expect(lessonA207.pronunciation.tip).toContain("لا يسجل صوت المتعلم ولا يقيس جودة النطق");
    expect(lessonA207.pronunciation.shadowing).toEqual([
      {
        de: "Ich möchte ein Konto eröffnen.",
        ar: "أريد فتح حساب.",
        tip: "استمع إلى الفرق بين o في Konto وö في eröffnen، ثم كرر الجملة كاملة.",
      },
      {
        de: "Es gibt einen Geldautomaten.",
        ar: "يوجد صراف آلي.",
        tip: "لاحظ g المجهورة في Geld وصيغة Geldautomaten في الجملة.",
      },
      {
        de: "Ich helfe dir.",
        ar: "أساعدك.",
        tip: "حافظ على h في helfe، ثم قارن dir بـ dich في مثال آخر.",
      },
      {
        de: "Das gehört mir.",
        ar: "هذا يخصني.",
        tip: "انتبه إلى ö في gehört، ثم استمع إلى الصوت قبل التكرار.",
      },
    ]);
  });

  it("checks each review note, every flashcard, cultural claim, mediation point, and interaction response", () => {
    expect(lessonA207.fehlerUndTipps?.mistakes).toEqual([
      {
        wrong: "Kannst du mich helfen?",
        right: "Kannst du mir helfen?",
        classification: "error",
        whyAr: "helfen يطلب هنا مكمّلاً في Dativ. لا تستبدل mir بـmich اعتماداً على ترجمة «تساعدني» وحدها.",
      },
      {
        wrong: "Es gibt der Park.",
        right: "Es gibt einen Park.",
        classification: "error",
        whyAr: "في هذا الإطار نستخدم الاسم في Akkusativ؛ مع ein واسم مذكر مفرد تكون الصيغة einen Park.",
      },
      {
        wrong: "Es gibt keinen Automat.",
        right: "Es gibt keinen Automaten.",
        classification: "error",
        whyAr: "Automat اسم مذكر ضعيف: den Automaten في Akkusativ. يُحفظ هذا الاسم بصيغته الخاصة، ولا تُعمّم النهاية على سائر الأسماء.",
      },
      {
        wrong: "القول إن صيغة Euro واحدة في كل سياق جمع.",
        right: "die Euros في جمع الاسم، لكن عشرة يورو: 10 Euro.",
        classification: "contextual-alternative",
        whyAr: "Duden يورد الجمع Euros مع أداة التعريف، ويورد أيضاً كتابة المبالغ مثل 30 Euro بلا s. التمرين r3 يقيس جمع الاسم، لا كتابة المبلغ.",
      },
      {
        wrong: "bar تعني «حانة» دائماً.",
        right: "bar zahlen = يدفع نقداً؛ die Bar = الحانة.",
        classification: "error",
        whyAr: "الحرف الكبير والجنس النحوي والسياق تميّز الاسم die Bar عن الصفة bar في سياق الدفع. ليست الكلمتان استعمالاً واحداً.",
      },
    ]);
    expect(lessonA207.fehlerUndTipps?.eselsbruecken).toEqual([
      "es gibt + Akkusativ؛ في السؤال ابدأ بالفعل: Gibt es …?",
      "احفظ الفعل مع المتمم: sehen + dich، helfen + dir، gehören + ihm.",
      "abheben ينفصل في الجملة الرئيسية: Ich hebe Geld ab؛ überweisen لا ينفصل: Ich überweise Geld.",
    ]);
    expect(lessonA207.fehlerUndTipps?.culturalNote).toEqual({
      title: "النقد والبطاقات: معلومة محددة لا تعميم ثقافي",
      content:
        "في دراسة Bundesbank لسلوك الدفع في ألمانيا عام 2023، سُدّد نقداً 51% من المعاملات المسجلة في نقاط البيع، واستخدمت بطاقة الخصم في 27% منها بحسب العدد؛ ظل النقد الأكثر استخداماً في هذه العينة، مع استمرار اتجاه تناقصه. هذه لقطة زمنية لبيانات ألمانيا ولا تثبت أن الألمان يفضّلون النقد أكثر من كل الأوروبيين. قد تختلف وسائل الدفع المقبولة بين المتاجر، فاقرأ اللافتة أو اسأل. إذا قصدت نظام البطاقة الألماني المحدد فـgirocard أدق؛ أما Bankkarte فلفظ أعم، ولا تخلطها تلقائياً مع Kreditkarte.",
    });

    expect(ids(lessonA207.flashcards)).toEqual(
      Array.from({ length: 12 }, (_, index) => `fc${index + 1}`).sort(),
    );
    expect(
      lessonA207.flashcards.map((card) => [card.id, card.de, card.ar, card.example, card.exampleAr, card.level]),
    ).toEqual([
      ["fc1", "das Konto", "الحساب المصرفي", "Ich eröffne ein Konto.", "أفتح حساباً.", "A2"],
      ["fc2", "das Geld", "المال", "Ich brauche Geld.", "أحتاج إلى مال.", "A2"],
      ["fc3", "überweisen", "يحوّل مالاً إلى حساب", "Ich überweise das Geld auf dein Konto.", "أحوّل المال إلى حسابك.", "A2"],
      ["fc4", "bar bezahlen", "يدفع نقداً", "Ich bezahle bar.", "أدفع نقداً.", "A2"],
      ["fc5", "der Geldautomat", "الصراف الآلي", "Wo ist der Geldautomat?", "أين يوجد الصراف الآلي؟", "A2"],
      ["fc6", "es gibt", "يوجد/هناك؛ يتبعه الاسم في Akkusativ", "Es gibt eine Bank in der Nähe.", "يوجد بنك قريب.", "A2"],
      ["fc7", "mich / dich / mir / dir", "صيغ ضمير ألمانية تُختار بحسب الفعل والحالة", "Ich sehe dich. Ich helfe dir.", "أراك. أساعدك.", "A2"],
      ["fc8", "die Bankkarte", "البطاقة المصرفية", "Ich bezahle mit meiner Bankkarte.", "أدفع ببطاقتي المصرفية.", "A2"],
      ["fc9", "abheben", "يسحب نقوداً من الحساب", "Ich hebe am Automaten Geld ab.", "أسحب المال من الصراف الآلي.", "A2"],
      ["fc10", "die Gebühr", "الرسم / رسوم الخدمة", "Wo finde ich die Gebühren?", "أين أجد معلومات الرسوم؟", "A2"],
      ["fc11", "die Übersicht", "ملخص المعلومات / جدول المعلومات", "Die Gebühren stehen in der Übersicht.", "الرسوم واردة في ملخص المعلومات.", "A2"],
      ["fc12", "das Kontomodell", "نموذج الحساب", "Es gibt zwei Kontomodelle.", "يوجد نموذجان للحساب.", "A2"],
    ],
    );

    expect(lessonA207.mediation).toEqual([
      {
        id: "med-a2-07-1",
        type: "simplify-announcement",
        titleAr: "لخّص تعليمات نموذج بنك افتراضي بالعربية",
        sourceDe:
          "Auszug aus einem fiktiven Bankformular: „Bitte füllen Sie den Antrag aus. Für die Identifizierung brauchen wir ein gültiges Ausweisdokument. Welche weiteren Unterlagen Sie vorlegen müssen, hängt vom Konto und Ihrer Situation ab. Fragen Sie bitte vorab bei der Bank nach.“",
        taskAr:
          "اشرح بالعربية ما تطلبه الاستمارة. ميّز بين وثيقة الهوية المذكورة وبين الوثائق الأخرى التي تختلف بحسب الحساب والحالة؛ لا تضف شروطاً غير مكتوبة ولا تستخدم بيانات شخصية حقيقية.",
        modelAnswerAr:
          "«يرجى تعبئة الطلب. يلزم تقديم وثيقة هوية صالحة لإثبات الهوية. أما الوثائق الأخرى فقد تختلف بحسب الحساب والحالة، لذا اسأل البنك مسبقاً.» هذه صياغة لتمرين، وليست قائمة شاملة أو نصيحة مالية.",
        keyPointsAr: [
          "ذكرت ضرورة تعبئة الطلب وتقديم وثيقة هوية صالحة في هذا المثال",
          "أوضحت أن الوثائق الأخرى تختلف بحسب الحساب والحالة",
          "أشرت إلى سؤال البنك مسبقاً بدلاً من تعميم متطلبات واحدة",
        ],
      },
    ]);

    expect(lessonA207.interaction).toHaveLength(1);
    const interaction = lessonA207.interaction?.[0];
    expect(interaction).toMatchObject({
      id: "int-a2-07-1",
      scenarioAr: "محاكاة حوار نصي عن عروض حساب خيالية؛ لا تُدخل أرقام حسابات أو بيانات شخصية حقيقية.",
      scenarioDe: "Ein Gespräch über ein erfundenes Kontoangebot.",
      strategyAr:
        "اطلب معلومات محددة أو توضيحاً. اختر رداً مناسباً؛ ويمكنك قراءته بصوت عالٍ للتدريب، لكن الاختيار النصي لا يقيس الكلام أو النطق ولا يصف شروط بنك حقيقي.",
    });
    expect(interaction?.rounds).toEqual([
      {
        speakerDe: "Guten Tag! Wie kann ich Ihnen helfen?",
        speakerAr: "مرحباً! كيف أستطيع مساعدتك؟",
        options: [
          {
            de: "Ich möchte ein Konto eröffnen. Welche Modelle gibt es?",
            ar: "أريد فتح حساب. ما النماذج المتاحة؟",
            best: true,
            replyDe: "In diesem Beispiel gibt es ein Modell mit Karte und eines ohne Karte.",
            replyAr: "في هذا المثال نموذج ببطاقة وآخر من دون بطاقة.",
          },
          {
            de: "Ich möchte ein Konto eröffnen. Können Sie mir die Unterschiede erklären?",
            ar: "أريد فتح حساب. هل يمكنك شرح الفروق لي؟",
            best: true,
            replyDe: "Gern. In diesem Beispiel gibt es ein Modell mit Karte und eines ohne Karte.",
            replyAr: "بكل سرور. في هذا المثال نموذج ببطاقة وآخر من دون بطاقة.",
          },
        ],
      },
      {
        speakerDe: "Welche Information möchten Sie zuerst?",
        speakerAr: "ما المعلومة التي تريد معرفتها أولاً؟",
        options: [
          {
            de: "Wie hoch ist die Gebühr für das Modell mit Karte?",
            ar: "كم يبلغ رسم النموذج ذي البطاقة؟",
            best: true,
            replyDe: "Das Modell mit Karte kostet in diesem Beispiel drei Euro pro Monat.",
            replyAr: "يكلف النموذج ذو البطاقة ثلاثة يورو شهرياً في هذا المثال.",
          },
          {
            de: "Wo finde ich die Öffnungszeiten der Filiale?",
            ar: "أين أجد ساعات عمل الفرع؟",
            best: true,
            replyDe: "Die Öffnungszeiten kann ich Ihnen gleich nennen.",
            replyAr: "يمكنني ذكر ساعات العمل لكم حالاً.",
          },
        ],
      },
    ]);
    expect(interaction?.rounds.every((round) => round.options.every((option) => option.best))).toBe(true);
    expect(lessonA207.lernziele.some((goal) => /Sprechen|Aussprache|sprechen|aussprechen/i.test(goal.de))).toBe(
      false,
    );
  });

  it("counts only correct exercise-result events from the assessed task interface as evidence", () => {
    const openingEvent: AnalyticsEvent = {
      type: "lesson-view",
      ts: 1,
      lessonId: lessonA207.id,
    };
    for (const goal of lessonA207.lernziele) {
      expect(getGoalEvidenceStatus(goal, lessonA207.id, [])).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA207.id, [openingEvent])).toBe("pending");
      const exerciseIds = goal.evidence?.exerciseIds ?? [];
      const correctEvents = exerciseIds.map((exerciseId) => goalEvent(goal.id, exerciseId, true));
      const wrongEvents = correctEvents.map((event) =>
        event.type === "exercise-result" ? { ...event, correct: false } : event,
      );
      expect(getGoalEvidenceStatus(goal, lessonA207.id, correctEvents)).toBe("evidenced");
      expect(getGoalEvidenceStatus(goal, lessonA207.id, wrongEvents)).toBe("pending");
      const partlyWrong = correctEvents.map((event, index) =>
        index === 0 && event.type === "exercise-result" ? { ...event, correct: false } : event,
      );
      expect(getGoalEvidenceStatus(goal, lessonA207.id, partlyWrong)).toBe("pending");
    }

    const esGibtGoal = lessonA207.lernziele.find((goal) => goal.id === "z1");
    if (!esGibtGoal) throw new Error("z1 must exist");
    const allEsGibtEvents = (esGibtGoal.evidence?.exerciseIds ?? []).map((exerciseId) =>
      goalEvent("z1", exerciseId, true),
    );
    const flowEvent = goalEvent("z1", "e1", true, "flow-practice:a2-07:e1");
    expect(
      getGoalEvidenceStatus(
        esGibtGoal,
        lessonA207.id,
        allEsGibtEvents.map((event) =>
          event.type === "exercise-result" && event.exerciseId === "e1" ? flowEvent : event,
        ),
      ),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(
        esGibtGoal,
        lessonA207.id,
        allEsGibtEvents.map((event) =>
          event.type === "exercise-result" && event.exerciseId === "e1"
            ? { ...event, taskId: "mini-test:a2-07:e1" }
            : event,
        ),
      ),
    ).toBe("pending");

    const listeningGoal = lessonA207.lernziele.find((goal) => goal.id === "z3");
    if (!listeningGoal) throw new Error("z3 must exist");
    const allListeningEvents = (listeningGoal.evidence?.exerciseIds ?? []).map((exerciseId) =>
      goalEvent("z3", exerciseId, true),
    );
    expect(getGoalEvidenceStatus(listeningGoal, lessonA207.id, allListeningEvents)).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(
        listeningGoal,
        lessonA207.id,
        allListeningEvents.map((event) =>
          event.type === "exercise-result" && event.exerciseId === "q1"
            ? {
                ...event,
                taskId: getListeningQuestionTaskId(lessonA207.id, "l1", "q1", true),
              }
            : event,
        ),
      ),
    ).toBe("pending");
  });
});
