"use client";

import * as React from "react";

import { installChunkRecovery } from "@/lib/chunk-recovery";

/**
 * يستعيد التطبيق تلقائياً إذا فشل تحميل حزمة JS (ChunkLoadError) — يحدث فعلياً
 * بعد نشر جديد مع service worker يحمل كاشاً قديماً. انظر `src/lib/chunk-recovery.ts`.
 */
export function ChunkRecovery() {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    return installChunkRecovery(window);
  }, []);
  return null;
}
