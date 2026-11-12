/**
 * a2-11 — جدولا النظرية وأمثلةُ السياق · مهامّ الكتابة ومجالاتُها المقبولة (جزء من تدقيق الدرس)
 * فُصل من a2-11.test.ts في الدفعة 104 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA211 } from "@/data/lessons/a2/a2-11";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { task } from "./fixtures";

describe("A2-11 lesson content audit", () => {
  it("audits both theory tables, all examples, and contextual classifications", () => {
    expect(lessonA211.theory.map(({ titleDe }) => titleDe)).toEqual([
      "Reflexive Verben: sich freuen, sich ärgern",
      "Reflexive Verben: mich oder mir",
    ]);
    expect(lessonA211.theory[0]?.table?.rows).toEqual([
      { label: "ich", cells: ["mich", "Ich freue mich."] },
      { label: "du", cells: ["dich", "Du freust dich."] },
      { label: "er/sie/es", cells: ["sich", "Er freut sich."] },
      { label: "wir", cells: ["uns", "Wir freuen uns."] },
      { label: "ihr", cells: ["euch", "Ihr freut euch."] },
      { label: "sie (هم) / Sie (مخاطبة رسمية)", cells: ["sich", "Die Gäste freuen sich. / Freuen Sie sich auf den Termin?"] },
    ]);
    expect(lessonA211.theory[1]?.table?.rows).toEqual([
      { label: "Akkusativ: الضمير هو المفعول", cells: ["mich", "Ich freue mich.", "أنا مسرور/أتطلع بحسب السياق."] },
      { label: "Akkusativ: انعكاسي مع waschen", cells: ["dich", "Du wäschst dich.", "تغتسل."] },
      { label: "Dativ + مفعول Akkusativ في هذا النمط", cells: ["mir", "Ich wasche mir die Hände.", "أغسل يديّ."] },
      { label: "Dativ مع etwas vorstellen بمعنى يتخيّل", cells: ["dir", "Stell dir das vor!", "تخيّل ذلك! "] },
      { label: "Akkusativ مع المخاطبة الرسمية Sie", cells: ["sich", "Ich hoffe, Sie freuen sich auf den Termin.", "آمل أن تتطلع حضرتك إلى الموعد."] },
    ]);
    expect(lessonA211.theory.map(({ examples }) => examples.map(({ de, ar }) => [de, ar]))).toEqual([
      [
        ["Ich freue mich auf den Urlaub.", "أتطلع إلى العطلة."],
        ["Er ärgert sich über den Lärm.", "ينزعج من الضجيج."],
        ["Wir müssen uns anmelden.", "علينا التسجيل."],
        ["Beeil dich bitte!", "أسرع من فضلك!"],
        ["Ich muss mich erholen.", "عليّ أن أستريح."],
        ["Ich hoffe, Sie freuen sich auf den Termin.", "آمل أن تتطلع حضرتك إلى الموعد."],
      ],
      [
        ["Ich freue mich auf den Urlaub.", "أتطلع إلى العطلة."],
        ["Ich wasche mir die Hände.", "أغسل يديّ (mir Dativ، وdie Hände Akkusativ في هذا الإطار)."],
        ["Ich sehe mir das Formular an.", "أتفحّص الاستمارة."],
        ["Wir treffen uns um sieben.", "نلتقي في السابعة (قد يكون المعنى متبادلاً بحسب السياق)."],
        ["Setz dich bitte!", "اجلس من فضلك!"],
        ["Ich putze mir die Zähne.", "أنظّف أسناني (mir Dativ، وdie Zähne Akkusativ في هذا الإطار)."],
      ],
    ]);
    expect(lessonA211.theory[0]?.commonMistakes).toEqual([
      {
        wrong: "Ich freue (إذا كان المقصود: أنا مسرور)",
        right: "Ich freue mich.",
        whyAr: "في معنى `sich freuen` المقصود هنا يلزم الضمير؛ أما `Das freut mich` فتركيب آخر بمعنى «هذا يسعدني».",
        classification: "error",
      },
      {
        wrong: "Er freut mich sich.",
        right: "Er freut sich.",
        whyAr: "لا يجتمع ضميران انعكاسيان في هذا الإطار: الضمير واحد يعود على الفاعل er في صورة sich، والجملة تحتمل ضميراً واحداً فقط بعد الفعل المصرف freut.",
        classification: "error",
      },
      {
        wrong: "Ich freue mir auf den Urlaub.",
        right: "Ich freue mich auf den Urlaub.",
        whyAr: "في هذا الإطار المحدد `sich freuen auf` تأتي الصيغة `mich`؛ لا تستنتج صيغة الضمير من ترجمة عربية عامة.",
        classification: "error",
      },
    ]);
    expect(lessonA211.theory[1]?.commonMistakes).toEqual([
      {
        wrong: "Ich freue. (إذا كان المقصود: أنا مسرور)",
        right: "Ich freue mich.",
        whyAr: "في معنى `sich freuen` المقصود يلزم الضمير؛ أما `Das freut mich` فهو استعمال متعدٍّ مختلف بمعنى «هذا يسعدني».",
        classification: "error",
      },
      {
        wrong: "Ich wasche mich die Hände.",
        right: "Ich wasche mir die Hände.",
        whyAr: "في هذا المثال يكون الضمير Dativ (`mir`) واسم العضو مفعولاً Akkusativ (`die Hände`)؛ ليست قاعدة عامة لكل فعل.",
        classification: "error",
      },
      {
        wrong: "Er interessiert ihn für Musik. (إذا كان المقصود أنه هو نفسه مهتم)",
        right: "Er interessiert sich für Musik.",
        whyAr: "الجملة الأولى يمكن أن تعني أنه يجعل شخصاً آخر يهتم بالموسيقى؛ إذا كان هو نفسه المهتم فنستخدم `sich interessieren für`. يوضح Duden المعنيين المتعدي والانعكاسي.",
        classification: "contextual-alternative",
      },
    ]);
    expect(lessonA211.theory[0]?.whyAr).toContain("Das freut mich");
    expect(lessonA211.theory[0]?.whyAr).not.toContain("Du freust mich");
    expect(lessonA211.theory[1]?.explanationAr).toContain("وجود مفعول آخر يعني Dativ");
    expect(lessonA211.theory[0]?.relatedRuleComparison?.content).toContain("مفعول Akkusativ هو");
    expect(lessonA211.theory[1]?.relatedRuleComparison?.content).toContain("قد يُفهم ضمير الجمع المتبادل من السياق");
    expect(lessonA211.fehlerUndTipps.mistakes).toEqual([
      {
        wrong: "Ich freue auf den Urlaub. (إذا كان المقصود: أتطلع إلى العطلة)",
        right: "Ich freue mich auf den Urlaub.",
        whyAr: "في الإطار `sich freuen auf` يلزم الضمير الانعكاسي؛ لكن `freuen` له أيضاً استعمال متعدٍّ مختلف مثل `Das freut mich`.",
      },
      {
        wrong: "Er freut mich sich.",
        right: "Er freut sich.",
        whyAr: "في معنى أن er نفسه يتطلع إلى شيء، لا يجتمع الضميران؛ أما `Das freut mich` فتركيب متعدٍّ آخر.",
      },
      {
        wrong: "Ich freue mir auf den Urlaub. (في معنى التطلّع)",
        right: "Ich freue mich auf den Urlaub.",
        whyAr: "في هذا الإطار نستخدم `mich`؛ لا يعني ذلك أن mir خطأ في كل الأفعال الانعكاسية.",
      },
    ]);
  });

  it("reviews every writing prompt and accepted field, including the new assessed tasks", () => {
    expect(lessonA211.writing.map(({ id }) => id)).toEqual(["w1", "w2", "w3", "w4", "w5"]);
    expect(task("w1")).toMatchObject({
      instructionAr: "اكتب جملة انعكاسية:",
      prompt: "اكتب بالألمانية «أتطلع إلى العطلة»، مستخدماً إحدى الصيغتين المحددتين: auf den Urlaub أو auf die Ferien (sich freuen auf).",
      acceptedAnswers: ["Ich freue mich auf den Urlaub.", "Ich freue mich auf die Ferien."],
      sampleAnswer: "Ich freue mich auf den Urlaub.",
    });
    expect(task("w2")).toMatchObject({
      instructionAr: "اختر الضمير المناسب لكل فاعل، بما في ذلك صيغة المخاطبة الرسمية:",
      template: "Ich freue ___. Du freust ___. Er freut ___. Wir freuen ___. Ihr freut ___. Sie freuen ___.",
      errorType: "grammar",
    });
    expect(task("w3")).toMatchObject({
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich möchte mich beschweren.",
      explanation: "أود أن أشتكي — هذا إملاء للجملة المسموعة، وليس تقويماً للنطق.",
      errorType: "spelling",
    });
    expect(task("w4")).toMatchObject({
      instructionAr: "اكتب الصيغة المحددة لشكوى مهذبة:",
      prompt: "اكتب بالألمانية: «عذراً، أود أن أقدّم شكوى». استخدم Entschuldigung وIch möchte mich beschweren.",
      acceptedAnswers: ["Entschuldigung, ich möchte mich beschweren."],
      sampleAnswer: "Entschuldigung, ich möchte mich beschweren.",
      explanation: "هذه صيغة مكتوبة مهذبة ممكنة في هذا التدريب؛ ليست افتتاحاً وحيداً أو إلزامياً لكل شكوى.",
    });
    expect(task("w5")).toMatchObject({
      instructionAr: "اكتب الأسطر الثلاثة في نموذج تدريب افتراضي مستخدماً البيانات الخيالية المعطاة:",
      prompt: "لشخصية خيالية اسمها Mona: Vorname Mona؛ Geburtsdatum 14.03.1995؛ Staatsangehörigkeit tunesisch. اكتب الحقول مع بياناتها.",
      acceptedAnswers: ["Vorname: Mona\nGeburtsdatum: 14.03.1995\nStaatsangehörigkeit: tunesisch"],
      sampleAnswer: "Vorname: Mona\nGeburtsdatum: 14.03.1995\nStaatsangehörigkeit: tunesisch",
      explanation: "تدريب على كتابة القيم المعطاة في الحقول المحددة؛ هذه بيانات افتراضية ولا تمثل قائمة عامة بما تطلبه كل استمارة.",
      errorType: "spelling",
    });
    for (const id of ["w1", "w4", "w5"]) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} must be a typed transformation`);
      expect(exercise.acceptedAnswers.every((answer) => evaluateExercise(exercise, answer).isCorrect), `${id} engine support`).toBe(true);
    }
  });
});
