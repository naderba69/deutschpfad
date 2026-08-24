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
  /**
   * أهم مفردات الدرس — مأخوذة من بطاقاته (flashcards) لا مكتوبة يدوياً.
   *
   * الحقل المقابل في UNITS كان يُكتب يدوياً فتعفّن: 90 كلمة من 193 لم
   * تكن تقابلها أي بطاقة في وحدتها، وبعضها كان يَعِد بنحوٍ يُدرَّس في
   * وحدة أخرى (b1-06 تَعِد بـ Relativsatz ودرسها Adjektivdeklination).
   */
  keyWords: string[];
}
