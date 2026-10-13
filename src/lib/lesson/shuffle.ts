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

/**
 * خلط حتمي يعتمد على بذرة نصية (FNV-1a + mulberry32).
 * يُستعمل في الحالة الابتدائية للمكونات، لأن الخادم والمتصفح يجب أن يصيرا
 * الترتيب نفسه أثناء الـ hydration — وإلا ظهر خطأ عدم تطابق بين HTML الخادم والعميل.
 */
export function seededShuffle<T>(input: readonly T[], seed: string): T[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const rand = () => {
    h = (h + 0x6d2b79f5) | 0;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
