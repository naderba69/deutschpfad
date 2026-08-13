/**
 * دالة تنسيق الوقت (خالصة — قابلة للاختبار)
 */

export function formatMinutes(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h > 0) return `${h}س ${m}د`;
  return `${m} دقيقة`;
}
