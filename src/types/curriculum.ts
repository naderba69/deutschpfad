/**
 * الأنواع الأساسية للمنهج الأكاديمي
 * — المستويات والوحدات الدراسية وفق معايير CEFR ومنهجية غوته —
 */

export type LevelCode = "A1" | "A2" | "B1" | "B2";

export type UnitStatus = "locked" | "current" | "completed";

export interface LevelMeta {
  code: LevelCode;
  /** الاسم الألماني للمستوى */
  titleDe: string;
  /** الاسم الألماني الفرعي (Grundstufe/Mittelstufe...) */
  subtitleDe: string;
  /** الاسم بالعربية */
  titleAr: string;
  /** وصف المستوى بالعربية */
  description: string;
  /** رؤوس الموضوعات النحوية الرئيسية في المستوى */
  topics: string[];
  /** عدد الوحدات */
  units: number;
  /** الحصيلة المفرداتية التقريبية */
  words: number;
  /** نسبة إتمام المستوى المطلوبة للانتقال للتالي (0-100) */
  unlockThreshold: number;
  /** تدرّج لوني من Tailwind لبطاقات المستوى */
  gradient: string;
  /** لون مميز لمؤشرات المستوى (hex) */
  accent: string;
  /** الرمز التعبيري المميز */
  emoji: string;
}

export interface Unit {
  /** معرّف فريد مثل a1-03 */
  id: string;
  level: LevelCode;
  /** الرقم داخل المستوى (يبدأ من 1) */
  number: number;
  /** عنوان الوحدة بالألمانية */
  titleDe: string;
  /** عنوان الوحدة بالعربية */
  titleAr: string;
  /** وصف مختصر بالألمانية */
  descDe: string;
  /** وصف مختصر بالعربية */
  descAr: string;
  /**
   * ملاحظة: لا يوجد هنا `lessons` ولا `minutes`.
   *
   * كانا حقلين يُكتبان يدوياً فتعفّنا: 44 وحدة من 46 كانت تعلن 5–6 دروس
   * بينما لكل وحدة درس واحد فعلي، و44 وحدة تعلن زمناً يزيد 15–25 دقيقة
   * عن `duration` المكتوب في الدرس نفسه.
   *
   * البديل: يُشتقّان من LESSON_META عبر getUnitLessonCount/getUnitMinutes،
   * فلا يمكن أن يتناقضا مع الدروس الفعلية بعد اليوم.
   */
  /**
   * ملاحظة: لا يوجد هنا `keyWords` أيضاً.
   *
   * كان يُكتب يدوياً فتعفّن كما تعفّن سابقاه: 90 كلمة من 193 لم تكن
   * تقابلها أي بطاقة في دروس وحدتها، وبعضها كان يَعِد المتعلّم بنحوٍ
   * يُدرَّس في وحدة أخرى — مثل b1-06 التي تَعِد بـ Relativsatz بينما
   * درسها الفعلي هو Adjektivdeklination.
   *
   * البديل: getUnitKeyWords(unitId) يجمعها من بطاقات الدروس نفسها.
   */
}

export interface ProgressState {
  /** معرفات الوحدات المكتملة */
  completedUnits: string[];
  /** المستويات المختومة بامتحان الختم (Seal Exams) */
  sealedLevels?: LevelCode[];
  /** معرفات الدروس المكتملة (المسار المتسلسل — منذ 2026-08) */
  completedLessons?: string[];
}

export interface LevelCompletion {
  level: LevelCode;
  total: number;
  completed: number;
  pct: number;
}
