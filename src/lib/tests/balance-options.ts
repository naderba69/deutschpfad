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
