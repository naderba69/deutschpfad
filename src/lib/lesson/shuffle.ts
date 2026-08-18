/**
 * أدوات عشوائية (Fisher–Yates) لتوليد تنويع الأسئلة
 * — كل محاولة تعرض ترتيباً مختلفاً (Varied Practice) —
 */

/** خلط مصفوفة (لا يعدّل الأصل) */
export function shuffle<T>(input: readonly T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** اختيار n عناصر عشوائية فريدة من مصفوفة */
export function sample<T>(input: readonly T[], n: number): T[] {
  const shuffled = shuffle(input);
  return shuffled.slice(0, Math.max(0, n));
}

/** أخذ عنصر عشوائي */
export function pickRandom<T>(input: readonly T[]): T | undefined {
  if (input.length === 0) return undefined;
  return input[Math.floor(Math.random() * input.length)];
}
