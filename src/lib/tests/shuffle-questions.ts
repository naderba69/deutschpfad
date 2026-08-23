/**
 * خلط خيارات أسئلة الاختبارات مع إعادة تعيين فهرس الإجابة الصحيحة.
 *
 * لماذا؟ بنوك أسئلة الاختبارات مكتوبة بالإجابة الصحيحة في الموضع الأول
 * (correctIndex: 0) في كل الأسئلة تقريباً. ولأن مُصحِّح الاختبار يقارن
 * الفهارس (answer === q.correctIndex)، كان بإمكان المتعلّم اختيار الخيار
 * الأول دائماً فيحصل على 100% ويفتح المستوى التالي دون معرفة حقيقية.
 *
 * الحل: خلط الخيارات عند بناء الجلسة، مع نقل correctIndex إلى الموضع
 * الجديد للنص الصحيح — فيبقى التصحيح بالفهرس سليماً دون تغيير المُصحِّح.
 */

import { shuffle } from "@/lib/lesson/shuffle";
import type { TestQuestion } from "@/types/test";

/** خلط قائمة خيارات وإرجاعها مع الفهرس الجديد للإجابة الصحيحة */
export function shuffleOptions(
  options: readonly string[],
  correctIndex: number,
): { options: string[]; correctIndex: number } {
  if (options.length < 2 || correctIndex < 0 || correctIndex >= options.length) {
    return { options: [...options], correctIndex };
  }
  const correctText = options[correctIndex];
  const shuffled = shuffle(options);
  // النص نفسه قد يتكرر (خيارات مكرّرة) — نأخذ أول تطابق، وهو مقبول
  // لأن الخيارين متطابقان نصياً فأيّهما اختير يُعرض للمتعلّم نفس الشيء.
  const newIndex = shuffled.indexOf(correctText);
  return { options: shuffled, correctIndex: newIndex >= 0 ? newIndex : correctIndex };
}

/** خلط سؤال اختبار واحد (بما فيه الأسئلة الفرعية للقراءة/الاستماع) */
export function shuffleTestQuestion(q: TestQuestion): TestQuestion {
  const next: TestQuestion = { ...q };

  if (next.options && next.options.length > 1 && typeof next.correctIndex === "number") {
    const { options, correctIndex } = shuffleOptions(next.options, next.correctIndex);
    next.options = options;
    next.correctIndex = correctIndex;
  }

  if (next.questions && next.questions.length > 0) {
    next.questions = next.questions.map((sub) => {
      if (!sub.options || sub.options.length < 2) return { ...sub };
      const { options, correctIndex } = shuffleOptions(sub.options, sub.correct);
      return { ...sub, options, correct: correctIndex };
    });
  }

  return next;
}

/** خلط خيارات مجموعة أسئلة (لا يغيّر ترتيب الأسئلة نفسها) */
export function shuffleTestQuestions(questions: readonly TestQuestion[]): TestQuestion[] {
  return questions.map(shuffleTestQuestion);
}

/** الشكل العام لسؤال اختيار من متعدد في بنوك التدريبات */
type ChoiceItem = { options: string[]; correct: number };

/**
 * خلط خيارات عنصر يتبع الشكل { options, correct } مع الحفاظ على بقية حقوله.
 * يُستخدم مع بنوك B2 (الجرامر، الفخاخ، القراءة، المحاكاة) التي لا تمرّ بـ TestRunner.
 */
export function shuffleChoiceItem<T extends ChoiceItem>(item: T): T {
  const { options, correctIndex } = shuffleOptions(item.options, item.correct);
  return { ...item, options, correct: correctIndex };
}

/** خلط خيارات قائمة عناصر { options, correct } */
export function shuffleChoiceItems<T extends ChoiceItem>(items: readonly T[]): T[] {
  return items.map(shuffleChoiceItem);
}

/**
 * خلط خيارات تمرين «الفخاخ» — يعيد تعيين فهرس الصحيح وفهرس المصيدة معاً،
 * وإلا أُبرزت المصيدة على خيار خاطئ بعد الخلط.
 */
export function shuffleTrapItem<T extends ChoiceItem & { trap: number }>(item: T): T {
  const correctText = item.options[item.correct];
  const trapText = item.options[item.trap];
  const shuffled = shuffle(item.options);
  return {
    ...item,
    options: shuffled,
    correct: shuffled.indexOf(correctText),
    trap: shuffled.indexOf(trapText),
  };
}
