/** البيانات الوصفية الخفيفة للدرس — تُستخدم في صفحات القوائم فقط */

export interface LessonMeta {
  id: string;
  unitId: string;
  level: "A1" | "A2" | "B1" | "B2";
  order: number;
  titleDe: string;
  titleAr: string;
  duration: number;
  summary: string;
}
