import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  addFavorite,
  countFavorites,
  getFavorites,
  getFavoritesByKind,
  isFavorite,
  removeFavorite,
  toggleFavorite,
} from "@/lib/storage/favorites";

/** محاكاة localStorage بسيطة للاختبار */
function installLocalStorage() {
  const store = new Map<string, string>();
  const storage = {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => store.set(k, v),
    removeItem: (k: string) => store.delete(k),
    clear: () => store.clear(),
  };
  vi.stubGlobal("window", { localStorage: storage });
  vi.stubGlobal("localStorage", storage);
  return store;
}

describe("تخزين المفضلة", () => {
  beforeEach(() => {
    installLocalStorage();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("يبدأ فارغاً", () => {
    expect(getFavorites()).toEqual([]);
    expect(countFavorites()).toBe(0);
  });

  it("يضيف درساً ويتحقق منه", () => {
    addFavorite("lesson", "a1-01", "التعليم والدراسة");
    expect(isFavorite("lesson", "a1-01")).toBe(true);
    expect(isFavorite("lesson", "a1-02")).toBe(false);
    expect(countFavorites()).toBe(1);
  });

  it("يضيف كلمة ويتحقق منها", () => {
    addFavorite("word", "der Kredit", "القرض");
    expect(isFavorite("word", "der Kredit")).toBe(true);
    expect(getFavoritesByKind("word")).toHaveLength(1);
    expect(getFavoritesByKind("lesson")).toHaveLength(0);
  });

  it("لا يكرر الإضافة", () => {
    addFavorite("lesson", "a1-01");
    addFavorite("lesson", "a1-01");
    expect(countFavorites()).toBe(1);
  });

  it("يبدّل الحالة (إضافة ثم إزالة)", () => {
    expect(toggleFavorite("lesson", "b1-01")).toBe(true);
    expect(isFavorite("lesson", "b1-01")).toBe(true);
    expect(toggleFavorite("lesson", "b1-01")).toBe(false);
    expect(isFavorite("lesson", "b1-01")).toBe(false);
    expect(countFavorites()).toBe(0);
  });

  it("يزيل عنصراً صراحة", () => {
    addFavorite("word", "das Buch");
    removeFavorite("word", "das Buch");
    expect(isFavorite("word", "das Buch")).toBe(false);
    expect(countFavorites()).toBe(0);
  });

  it("يميّز بين الدرس والكلمة بنفس المعرّف", () => {
    addFavorite("lesson", "x");
    addFavorite("word", "x");
    expect(countFavorites()).toBe(2);
    removeFavorite("lesson", "x");
    expect(isFavorite("word", "x")).toBe(true);
    expect(countFavorites()).toBe(1);
  });

  it("يحفظ التسمية ووقت الإضافة", () => {
    addFavorite("lesson", "a2-07", "البنوك");
    const [item] = getFavorites();
    expect(item.label).toBe("البنوك");
    expect(item.addedAt).toBeGreaterThan(0);
  });
});
