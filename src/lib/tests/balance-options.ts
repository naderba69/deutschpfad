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

/* ═══════════════════════════════════════════════════════════
   موازنة شجرة بيانات كاملة (دروس · حوارات · بودكاست) — الدفعة 70

   القياس (2026-10-17) قبل هذه الطبقة: الإجابة الصحيحة في الموضع الأول في
     · الدروس 762/864 = **88%** (A1 81% · A2 95% · B1 81% · B2 **99%**)
     · الحوارات 153/182 = 84% (B1 وB2 **100%**)
     · البودكاست 40/40 = **100%**
   أي أن أكبر كوربوس على المنصة (1086 سؤالاً) كان يُجتاز باختيار الخيار الأول،
   بينما الامتحانات والبنك موزونان منذ 2026-10-16 (25% لكل موضع).

   لماذا تحويل عند التصدير لا إعادة كتابة 1086 سؤالاً؟
     · الملفات تبقى بترتيبها التحريري الطبيعي (الصحيح أولاً لأنه يُكتب أولاً)،
     · كل درس/حوار/حلقة جديدة تُوازن تلقائياً بلا انضباط تأليف،
     · والمثبّتات التي تستورد الوحدات الخام (مثل `lessonB207`) تبقى صادقة
       لما كُتب، بينما ما يراه المتعلم هو النسخة الموزّعة.

   الشكلان المدعومان (وكلاهما موجود فعلاً في البيانات):
     1) `options: string[]` + `correctIndex`/`correct` رقمي + `optionExplanations?`
        المرتبطة بالمواضع — تُدار بالتزامن مع الخيارات (دروس).
     2) `options: {text, correct: boolean, explanation?}[]` — يُدار ترتيب الكائنات
        نفسها فيسافر شرح كل خيار معه (حوارات · بودكاست).
   ما لا يُمسّ: خيارات الفراغات (`options: string[][]` أو `correct` نصّي) لأن
   موضعها ليس إشارة قابلة للاستغلال بالطريقة نفسها وليست داخل القياس.
   ═══════════════════════════════════════════════════════════ */

/** نقل عنصر من موضع إلى آخر مع حفظ الترتيب النسبي لباقي العناصر */
function rotateArray<T>(arr: readonly T[], from: number, to: number): T[] {
  const next = [...arr];
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
}

/**
 * يوزّع مواضع الإجابات الصحيحة في شجرة بيانات (درس/حوار/حلقة) — **بلا تغيير
 * أي نصّ**: مجموعة الخيارات، ونصّ الصحيحة، وشرح كل خيار، كلها كما هي.
 * `seed` يزيح بداية التسلسل لكل حاوية حتى لا تصطفّ الحاويات المتجاورة.
 */
export function balanceChoiceTree<T>(root: T, seed = 0): T {
  let seq = 0;
  const walk = (node: unknown): unknown => {
    if (Array.isArray(node)) return node.map(walk);
    if (node === null || typeof node !== "object") return node;
    const source = node as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(source)) out[key] = walk(value);

    const opts = out.options;
    if (!Array.isArray(opts) || opts.length < 2) return out;
    const count = opts.length;
    const target = (seed + seq) % count;

    /* الشكل 1: نصوص + فهرس رقمي */
    const indexField =
      typeof out.correctIndex === "number" ? "correctIndex" : typeof out.correct === "number" ? "correct" : null;
    if (indexField !== null && opts.every((x) => typeof x === "string")) {
      seq += 1;
      const current = out[indexField] as number;
      if (current < 0 || current >= count || current === target) return out;
      out.options = rotateArray(opts as string[], current, target);
      out[indexField] = target;
      const explanations = out.optionExplanations;
      if (Array.isArray(explanations) && explanations.length === count) {
        out.optionExplanations = rotateArray(explanations as unknown[], current, target);
      }
      return out;
    }

    /* الشكل 2: كائنات فيها `correct` منطقي */
    if (opts.every((x) => !!x && typeof x === "object" && typeof (x as Record<string, unknown>).correct === "boolean")) {
      seq += 1;
      const current = (opts as Record<string, unknown>[]).findIndex((x) => x.correct === true);
      if (current < 0 || current === target) return out;
      out.options = rotateArray(opts as Record<string, unknown>[], current, target);
      return out;
    }
    return out;
  };
  return walk(root) as T;
}
