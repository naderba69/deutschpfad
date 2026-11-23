/**
 * أحرف لوحة الكتابة الألمانية (ä ö ü ß) — إدراج عند المؤشر، دالة نقية.
 */

export const GERMAN_KEYS = ["ä", "ö", "ü", "ß"] as const;

/**
 * إدراج نص عند موضع المؤشر (أو يستبدل التحديد).
 * يعيد القيمة الجديدة وموضع المؤشر بعد الإدراج.
 */
export function insertAtSelection(
  value: string,
  selectionStart: number,
  selectionEnd: number,
  text: string,
): {value: string; cursor: number} {
  const start = Math.max(0, Math.min(selectionStart, value.length));
  const end = Math.max(start, Math.min(selectionEnd, value.length));
  return {
    value: value.slice(0, start) + text + value.slice(end),
    cursor: start + text.length,
  };
}
