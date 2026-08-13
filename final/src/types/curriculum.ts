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
  /** عدد الدروس داخل الوحدة */
  lessons: number;
  /** الزمن التقديري بالدقائق */
  minutes: number;
  /** أهم المفردات في الوحدة */
  keyWords: string[];
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
