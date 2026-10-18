/**
 * a2-11 — الاستماع بحواراته الثلاثة وأدلّتُه بلا نصّ مكتوب · النطقُ ورموزُه وملاحظاتُ التكرار (جزء من تدقيق الدرس)
 * فُصل من a2-11.test.ts في الدفعة 104 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA211 } from "@/data/lessons/a2/a2-11";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import { goal } from "./fixtures";

describe("A2-11 lesson content audit", () => {
  it("audits all three listening dialogues, line translations, questions, and transcript evidence IDs", () => {
    expect(lessonA211.listening.items.map(({ id, title }) => [id, title])).toEqual([
      ["l1", "عند الحلاق"],
      ["l2", "شكوى مهذبة"],
      ["l3", "ملء استمارة تدريبية افتراضية"],
    ]);
    expect(lessonA211.listening.items.map(({ lines }) => lines.length)).toEqual([5, 5, 7]);
    expect(lessonA211.listening.items.flatMap(({ lines }) => lines.map(({ speaker, de, ar }) => ({ speaker, de, ar })))).toEqual([
      { speaker: "Friseurin", de: "Guten Tag! Was möchten Sie?", ar: "طاب يومك! ماذا تريد؟" },
      { speaker: "Sami", de: "Ich möchte mir die Haare schneiden lassen.", ar: "أريد قصّ شعري لدى الحلاق." },
      { speaker: "Friseurin", de: "Kurz oder mittellang?", ar: "هل تريده قصيراً أم بطول متوسط؟" },
      { speaker: "Sami", de: "Mittellang, bitte. Ich muss mich beeilen; ich habe um zwölf einen Termin.", ar: "بطول متوسط، من فضلك. عليّ أن أسرع؛ لديّ موعد في الثانية عشرة." },
      { speaker: "Friseurin", de: "Kein Problem, wir sind schnell.", ar: "لا مشكلة، سننتهي بسرعة." },
      { speaker: "Mona", de: "Entschuldigung, ich möchte mich beschweren.", ar: "عذراً، أريد أن أقدم شكوى." },
      { speaker: "Mitarbeiter", de: "Ja, bitte? Was ist das Problem?", ar: "نعم، تفضّلي. ما المشكلة؟" },
      { speaker: "Mona", de: "Ich habe gestern ein Handy gekauft, aber es funktioniert nicht.", ar: "اشتريت أمس هاتفاً لكنه لا يعمل." },
      { speaker: "Mitarbeiter", de: "Das tut mir leid. Bringen Sie es mit, wir reparieren es oder geben Ihnen ein neues.", ar: "آسف. أحضريه، وسنصلحه أو نعطيك هاتفاً جديداً." },
      { speaker: "Mona", de: "Danke! Ich freue mich, dass Sie helfen.", ar: "شكراً! يسعدني أنكم تساعدونني." },
      { speaker: "Mitarbeiterin", de: "Guten Tag! Sie möchten sich anmelden. Hier ist ein Übungsformular.", ar: "طاب يومك! تودّين التسجيل؛ تفضّلي هذه استمارة تدريبية." },
      { speaker: "Mona", de: "Danke. Ich fülle es gleich aus. Nachname, Vorname, Geburtsdatum, Anschrift...", ar: "شكراً. سأملؤها فوراً: اسم العائلة، الاسم الأول، تاريخ الميلاد، العنوان..." },
      { speaker: "Mitarbeiterin", de: "Tragen Sie bitte auch das Land Ihrer Anschrift und Ihre Telefonnummer ein.", ar: "اكتبي من فضلك أيضاً بلد عنوانك ورقم هاتفك." },
      { speaker: "Mona", de: "Hier steht „Staatsangehörigkeit“. Was bedeutet das?", ar: "مكتوب هنا «الجنسية». ما معنى ذلك؟" },
      { speaker: "Mitarbeiterin", de: "Hier schreiben Sie, welche Staatsangehörigkeit Sie haben. Zum Beispiel: „tunesisch“.", ar: "اكتبي هنا جنسيتك. مثلاً: «tunesisch»." },
      { speaker: "Mona", de: "Fertig! Ich unterschreibe hier unten. So?", ar: "انتهيت! أوقّع في الأسفل. هكذا؟" },
      { speaker: "Mitarbeiterin", de: "Perfekt! Das Übungsformular ist jetzt vollständig ausgefüllt.", ar: "ممتاز! اكتمل ملء الاستمارة التدريبية الآن." },
    ]);

    expect(lessonA211.listening.questions.map(({ id, itemId, questionDe, questionAr, explanation, errorType }) => ({
      id,
      itemId,
      questionDe,
      questionAr,
      explanation,
      errorType,
    }))).toEqual([
      {
        id: "q1",
        itemId: "l1",
        questionDe: "Was möchte Sami?",
        questionAr: "ماذا يريد سامي؟",
        explanation: "قال سامي: Ich möchte mir die Haare schneiden lassen.",
        errorType: "comprehension",
      },
      {
        id: "q2",
        itemId: "l2",
        questionDe: "Was ist das Problem von Mona?",
        questionAr: "ما مشكلة منى؟",
        explanation: "قالت منى: Ich habe ein Handy gekauft, aber es funktioniert nicht.",
        errorType: "comprehension",
      },
      {
        id: "q3",
        itemId: "l2",
        questionDe: "Was bietet der Mitarbeiter als Lösung an?",
        questionAr: "ما الحل الذي يقترحه الموظف؟",
        explanation: "قال الموظف: Wir reparieren es oder geben Ihnen ein neues.",
        errorType: "comprehension",
      },
      {
        id: "q4",
        itemId: "l3",
        questionDe: "Welches Beispiel nennt die Mitarbeiterin für die Staatsangehörigkeit?",
        questionAr: "ما المثال الذي تذكره الموظفة لخانة الجنسية؟",
        explanation: "ذكرت الموظفة مثالاً: Schreiben Sie zum Beispiel „tunesisch“.",
        errorType: "comprehension",
      },
    ]);
    for (const question of lessonA211.listening.questions) {
      expect(getListeningQuestionTaskId(lessonA211.id, question.itemId, question.id, false)).toBe(
        `listening:${question.itemId}:${question.id}`,
      );
      const transcriptTaskId = getListeningQuestionTaskId(lessonA211.id, question.itemId, question.id, true);
      expect(transcriptTaskId).toBe(`listening-transcript:${lessonA211.id}:${question.itemId}:${question.id}`);
      expect(goal("z1").evidence?.taskIds).not.toContain(transcriptTaskId);
    }
    expect(goal("z1").evidence?.taskIds?.some((id) => id.startsWith("flow-listening:"))).toBe(false);
  });

  it("checks every pronunciation notation, meaning, and shadowing note", () => {
    expect(lessonA211.pronunciation.items.map(({ de, ar, note }) => [de, ar, note])).toEqual([
      ["sich beschweren", "يشتكي/يقدّم شكوى", "IPA للفعل: [bəˈʃveːʁən]؛ sch يقابل [ʃ] وw يقابل [v]. يختلف تحقيق r إقليمياً."],
      ["der Friseur", "مصفّف الشعر/الحلّاق", "IPA: [fʁiˈzøːɐ̯]. في هذه الكلمة يقارب eu الصوت الطويل [øː]، ويتبعه r في ختام الكلمة؛ لا يُنطق هنا مثل eu الشائع [ɔʏ̯]."],
      ["reparieren", "يصلح", "IPA: [ʁepaˈʁiːʁən]؛ ie في هذا المقطع تمثل الصوت الطويل [iː]."],
      ["sich ärgern", "ينزعج/يغضب بحسب السياق", "IPA للكلمة: [ˈɛʁɡɐn]؛ ä قصيرة هنا [ɛ]، ويتغير تحقيق r إقليمياً."],
      ["sich anmelden", "يسجّل/يلتحق بحسب السياق", "IPA واسعة: [ˈʔanmɛldn̩]؛ النبر الأساسي على an وe في melden [ɛ]. وتُكتب النهاية أيضاً [ən] في نمط نقل آخر."],
      ["die Beschwerde", "شكوى/تظلّم بحسب السياق", "IPA: [bəˈʃveːɐ̯də]؛ sch يقابل [ʃ] وw يقابل [v]، ويتغير تحقيق r إقليمياً."],
    ]);
    expect(lessonA211.pronunciation.shadowing).toEqual([
      { de: "Ich freue mich auf den Urlaub.", ar: "أتطلع إلى العطلة.", tip: "freue: eu صوت واحد تقريباً [ɔʏ̯]؛ وr يتغير نطقه باختلاف اللهجات." },
      { de: "Beeil dich bitte!", ar: "أسرع من فضلك!", tip: "beeil- تقريباً [bəˈʔaɪ̯l]؛ المقطع be- غير مشدد، ثم يأتي صوت [aɪ̯]." },
      { de: "Ich möchte mich beschweren.", ar: "أود أن أشتكي.", tip: "في beschweren: sch ≈ [ʃ]، وw = [v]، مع صوت طويل [eː]." },
      { de: "Wir müssen uns anmelden.", ar: "علينا أن نسجل.", tip: "في anmelden يقع النبر الأساسي على an؛ e في melden هنا [ɛ]." },
    ]);
    expect(lessonA211.pronunciation.tip).toContain("رموز IPA");
    expect(lessonA211.pronunciation.tip).toContain("يولّد الصوت آلياً في المتصفح");
    expect(lessonA211.pronunciation.tip).toContain("لا تعدّه تسجيلاً معيارياً");
  });
});
