"use client";

import * as React from "react";

import {
  getFavorites,
  isFavorite,
  toggleFavorite,
  type FavoriteItem,
  type FavoriteKind,
} from "@/lib/storage/favorites";

/**
 * خطاف المفضلة — يزامن الحالة مع التخزين ويعيد الرسم عند التغيير.
 * يستمع لحدث مخصص ليتزامن بين المكونات في نفس الصفحة.
 */
const EVENT = "dp:favorites-changed";

export function useFavorites() {
  const [items, setItems] = React.useState<FavoriteItem[]>([]);

  const refresh = React.useCallback(() => {
    setItems(getFavorites());
  }, []);

  React.useEffect(() => {
    refresh();
    const handler = () => refresh();
    window.addEventListener(EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, [refresh]);

  const toggle = React.useCallback((kind: FavoriteKind, id: string, label?: string) => {
    const nowFavorite = toggleFavorite(kind, id, label);
    window.dispatchEvent(new Event(EVENT));
    return nowFavorite;
  }, []);

  const check = React.useCallback(
    (kind: FavoriteKind, id: string) => isFavorite(kind, id),
    [],
  );

  return { items, toggle, check };
}

/** بث تغيير المفضلة (للمكونات خارج الخطاف) */
export function emitFavoritesChanged(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(EVENT));
  }
}
