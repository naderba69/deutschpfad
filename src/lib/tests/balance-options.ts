/**
 * ═══════════════════════════════════════════════════════════
 *  موازنة موقع الإجابة الصحيحة — إصلاح مدفوع بالقياس (2026-10-16)
 *
 *  القياس قبل الإصلاح على كل أسئلة الاختيار في الامتحانات (175 سؤالاً):
 *    A = 38% · B = 59% · C = 3%، و**12 جزءاً كل إجاباتها في الخيار نفسه**
 *    (منها جزء B1 كامل إجاباته «A»، جزآن في B2 كامل إجاباتهما «B»).
 *    أي أن المتعلم يستطيع اجتياز أجزاء كاملة باختيار حرف واحد بلا فهم.
 *
 *  الحل: دوران دوري بسيط ومعلن — السؤال رقم i داخل الجزء ذي الرقم teil يستهدف
 *  الموضع (i + teil − 1) % عدد الخيارات. يُنقل **نصّ الإجابة الصحيحة** إلى
 *  الموضع الجديد وتبقى البدائل الأخرى بترتيبها النسبي (لا يُحذف ولا يُضاف نصّ).
 *
 *  لماذا تحويل عند التحميل لا إعادة كتابة 175 سؤالاً يدوياً؟
 *    ليستفيد كل نموذج جديد تلقائياً بلا انضباط تأليف، ولأن الملفات تحفظ ترتيباً
 *    تحريرياً طبيعياً (مثل الأوقات تصاعدياً) بينما الموضع المعروض يُوازَن.
 *  والحارس `src/data/exams/option-balance.test.ts` يثبت أن الموازنة:
 *    (1) لا تغيّر مجموعة الخيارات ولا نصّ الإجابة الصحيحة لأي سؤال،
 *    (2) تمنع أي جزء من تكرار الموضع في كل أسئلته،
 *    (3) تجعل حصة كل موضع في الحدود المقبولة على كل الامتحانات.
 * ═══════════════════════════════════════════════════════════
 */

import type { TestQuestion } from "@/types/test";

interface McqLike {
  options: string[];
  correct: number;
}

/** يوزّع موضع الإجابة الصحيحة داخل أسئلة جزء واحد */
export function balanceQuestions<T extends McqLike>(questions: T[], teil: number): T[] {
  return questions.map((question, index) => {
    const count = question.options.length;
    if (count < 2) return question;
    const target = (index + teil - 1) % count;
    if (target === question.correct) return question;
    const options = [...question.options];
    const moved = options.splice(question.correct, 1);
    options.splice(target, 0, moved[0]);
    return { ...question, options, correct: target };
  });
}

interface TeilLike {
  teil: number;
  questions?: McqLike[];
}

/** يطبّق الموازنة على أجزاء مكوّن (قراءة/استماع) */
export function balanceTeile<T extends TeilLike>(teile: T[]): T[] {
  return teile.map((teil) =>
    teil.questions && teil.questions.length > 0
      ? ({ ...teil, questions: balanceQuestions(teil.questions, teil.teil) } as T)
      : teil,
  );
}

/* ═══════════════════════════════════════════════════════════
   موازنة بنك أسئلة الاختبارات (TEST_BANK) — طبقة ثانية بعد الخلط
   القياس قبل الإصلاح: **171/171 إجابة صحيحة في الموضع الأول (100%)**، ومحرّكان
   (level-test · weekly-test) لا يخلطان الخيارات أصلاً، فيُجتاز الاختبار باختيار
   الخيار الأول دائماً. الموازنة هنا تجعل البيانات نفسها موزّعة، والخلط وقت
   الجلسة (shuffle-questions) يبقي حارساً ثانياً — لا يُعتمد على أحدهما وحده.
   الإزاحة لكل مجموعة (مستوى + مهارة) مختلفة، والأسئلة الفرعية تُزاح كذلك.
   ═══════════════════════════════════════════════════════════ */

/** نقل الإجابة الصحيحة إلى موضع آخر بترتيب نسبي محفوظ — أو `null` إن كان الموضع هو المطلوب */
function rotateTo(
  options: readonly string[],
  correct: number,
  target: number,
): { options: string[]; correct: number } | null {
  if (target === correct || correct < 0 || correct >= options.length) return null;
  const next = [...options];
  const [moved] = next.splice(correct, 1);
  next.splice(target, 0, moved);
  return { options: next, correct: target };
}

/** يوزّع مواضع الإجابات الصحيحة في بنك الأسئلة كله (لا يغيّر أي نصّ خيار) */
export function balanceTestBank(bank: readonly TestQuestion[]): TestQuestion[] {
  const order: string[] = [];
  for (const q of bank) {
    const key = `${q.level}·${q.skill}`;
    if (!order.includes(key)) order.push(key);
  }
  const counters = new Map<string, number>();
  return bank.map((q) => {
    const key = `${q.level}·${q.skill}`;
    const offset = order.indexOf(key);
    const i = counters.get(key) ?? 0;
    counters.set(key, i + 1);

    let next = q;
    if (next.options && next.options.length > 1 && typeof next.correctIndex === "number") {
      const moved = rotateTo(next.options, next.correctIndex, (i + offset) % next.options.length);
      if (moved) next = { ...next, options: moved.options, correctIndex: moved.correct };
    }
    if (next.questions && next.questions.length > 0) {
      next = {
        ...next,
        questions: next.questions.map((sub, j) => {
          if (sub.options.length < 2 || typeof sub.correct !== "number") return sub;
          const moved = rotateTo(sub.options, sub.correct, (j + i + offset) % sub.options.length);
          return moved ? { ...sub, options: moved.options, correct: moved.correct } : sub;
        }),
      };
    }
    return next;
  });
}
