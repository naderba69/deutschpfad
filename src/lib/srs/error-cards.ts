/**
 * ═══════════════════════════════════════════════════════════
 *  تحويل الخطأ إلى بطاقة مراجعة — دوال نقية
 *
 *  كل خطأ مُسجَّل في دفتر الأخطاء ويحمل إجابة صحيحة يصبح بطاقة مستحقة،
 *  فيعود للمتعلم في مراجعة لاحقة (بعد يوم، ثم حسب نموذج إبنغهاوس).
 *  الخطأ المتكرر يعيد جدولة البطاقة نفسها (فشل ⇒ 10 دقائق).
 *  بلا إجابة صحيحة لا بطاقة: لا شيء نتدرّب عليه.
 * ═══════════════════════════════════════════════════════════
 */

import type {LevelCode} from "@/types/curriculum";

export interface ErrorCardInput {
  /** معرّف البطاقة المستقر (مشتق من معرّف الدفتر) */
  id: string;
  /** الإجابة الصحيحة التي يُكتب بها المتعلم */
  de: string;
  /** تلميح عربي يوضح الخطأ دون أن يكشف الجواب */
  ar: string;
  level: LevelCode;
}

export interface NotebookLike {
  id: string;
  lessonId?: string;
  explanation: string;
  correctAnswer?: string;
}

const LEVELS: readonly LevelCode[] = ["A1", "A2", "B1", "B2"];

/** المستوى من معرّف الدرس («a1-03» ⇒ A1)؛ الافتراضي A1 */
export function levelFromLessonId(lessonId?: string): LevelCode {
  const m = /^(a1|a2|b1|b2)/i.exec(lessonId ?? "");
  if (!m) return "A1";
  const level = m[1].toUpperCase() as LevelCode;
  return LEVELS.includes(level) ? level : "A1";
}

/** معرّف البطاقة من معرّف الدفتر: ثابت، فالخطأ المتكرر يصل إلى البطاقة نفسها */
export function errorCardId(notebookId: string): string {
  return `err-${notebookId}`;
}

/** null إن لم توجد إجابة صحيحة (لا بطاقة بلا ما نتدرب عليه) */
export function errorCardInput(entry: NotebookLike): ErrorCardInput | null {
  const answer = entry.correctAnswer?.trim();
  if (!answer) return null;
  return {
    id: errorCardId(entry.id),
    de: answer,
    ar: `صحّح هذا الخطأ: ${entry.explanation}`,
    level: levelFromLessonId(entry.lessonId),
  };
}
