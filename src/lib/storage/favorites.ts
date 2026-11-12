/**
 * مفضلة المستخدم — عناصر محفوظة للوصول السريع والمراجعة.
 * نوعان: دروس (lesson) وكلمات (word). تُحفظ محلياً في المتصفح فقط؛
 * لا تمثل قياساً للإتقان ولا مزامنة بين الأجهزة.
 * التخزين: localStorage بمفتاح dp:favorites (قائمة صغيرة، وصول فوري للواجهة).
 */

export type FavoriteKind = "lesson" | "word";

export interface FavoriteItem {
  kind: FavoriteKind;
  /** معرّف الدرس (lesson) أو الكلمة الألمانية (word) */
  id: string;
  /** نص معروض اختياري (عنوان الدرس أو الكلمة) */
  label?: string;
  /** وقت الحفظ */
  addedAt: number;
}

const KEY = "dp:favorites";

function readAll(): FavoriteItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as FavoriteItem[]) : [];
  } catch {
    return [];
  }
}

function writeAll(items: FavoriteItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    /* التخزين ممتلئ أو غير متاح — تُتجاهل الكتابة بصمت */
  }
}

function keyOf(kind: FavoriteKind, id: string): string {
  return `${kind}:${id}`;
}

/** كل المفضلة */
export function getFavorites(): FavoriteItem[] {
  return readAll();
}

/** مفضلة من نوع معين */
export function getFavoritesByKind(kind: FavoriteKind): FavoriteItem[] {
  return readAll().filter((item) => item.kind === kind);
}

/** هل العنصر مفضل؟ */
export function isFavorite(kind: FavoriteKind, id: string): boolean {
  const target = keyOf(kind, id);
  return readAll().some((item) => keyOf(item.kind, item.id) === target);
}

/** تبديل حالة المفضلة — يعيد الحالة الجديدة (true = صار مفضلاً) */
export function toggleFavorite(kind: FavoriteKind, id: string, label?: string): boolean {
  const items = readAll();
  const target = keyOf(kind, id);
  const existing = items.findIndex((item) => keyOf(item.kind, item.id) === target);
  if (existing >= 0) {
    items.splice(existing, 1);
    writeAll(items);
    return false;
  }
  items.push({ kind, id, label, addedAt: Date.now() });
  writeAll(items);
  return true;
}

/** إضافة صريحة (بلا تبديل) */
export function addFavorite(kind: FavoriteKind, id: string, label?: string): void {
  const items = readAll();
  const target = keyOf(kind, id);
  if (!items.some((item) => keyOf(item.kind, item.id) === target)) {
    items.push({ kind, id, label, addedAt: Date.now() });
    writeAll(items);
  }
}

/** إزالة صريحة */
export function removeFavorite(kind: FavoriteKind, id: string): void {
  const items = readAll();
  const target = keyOf(kind, id);
  const next = items.filter((item) => keyOf(item.kind, item.id) !== target);
  if (next.length !== items.length) writeAll(next);
}

/** عدد المفضلة */
export function countFavorites(): number {
  return readAll().length;
}
