import { describe, expect, it, vi } from "vitest";

import { CHUNK_RELOAD_FLAG, installChunkRecovery, isChunkLoadFailure } from "./chunk-recovery";

function makeWindow(storage: Record<string, string> = {}) {
  const listeners = new Map<string, ((event: unknown) => void)[]>();
  const reload = vi.fn();
  return {
    reload,
    listeners,
    win: {
      addEventListener: (type: string, fn: (event: unknown) => void) => {
        listeners.set(type, [...(listeners.get(type) ?? []), fn]);
      },
      removeEventListener: (type: string, fn: (event: unknown) => void) => {
        listeners.set(type, (listeners.get(type) ?? []).filter((f) => f !== fn));
      },
      sessionStorage: {
        getItem: (k: string) => storage[k] ?? null,
        setItem: (k: string, v: string) => {
          storage[k] = v;
        },
      },
      location: { reload },
    },
    storage,
  };
}

describe("isChunkLoadFailure", () => {
  it("يتعرّف على صيغ فشل الحزم الثلاث المعروفة", () => {
    expect(isChunkLoadFailure("Loading chunk 8051 failed.")).toBe(true);
    expect(isChunkLoadFailure("ChunkLoadError: Loading chunk app/lesson failed")).toBe(true);
    expect(isChunkLoadFailure("Failed to fetch dynamically imported module: /_next/static/x.js")).toBe(true);
    expect(isChunkLoadFailure("Loading CSS chunk 12 failed.")).toBe(true);
  });

  it("لا يخلط أخطاء JavaScript العادية بفشل الحزم", () => {
    expect(isChunkLoadFailure("TypeError: Cannot read properties of undefined")).toBe(false);
    expect(isChunkLoadFailure("")).toBe(false);
    expect(isChunkLoadFailure(undefined)).toBe(false);
  });
});

describe("installChunkRecovery", () => {
  it("يعيد التحميل مرة واحدة عند فشل حزمة ويضع الحارس", () => {
    const { win, reload, listeners } = makeWindow();
    const cleanup = installChunkRecovery(win as never);
    listeners.get("error")?.[0]({ message: "Loading chunk 42 failed." });
    expect(reload).toHaveBeenCalledTimes(1);
    expect(win.sessionStorage.getItem(CHUNK_RELOAD_FLAG)).toBe("1");
    cleanup();
  });

  it("لا يعيد التحميل مرتين في الجلسة نفسها (يمنع الحلقة)", () => {
    const { win, reload, listeners } = makeWindow();
    installChunkRecovery(win as never);
    listeners.get("error")?.[0]({ message: "ChunkLoadError" });
    listeners.get("unhandledrejection")?.[0]({ reason: new Error("Loading chunk 7 failed.") });
    expect(reload).toHaveBeenCalledTimes(1);
  });

  it("يتجاهل الأخطاء غير المتعلقة بالحزم", () => {
    const { win, reload, listeners } = makeWindow();
    installChunkRecovery(win as never);
    listeners.get("error")?.[0]({ message: "TypeError: x is not a function" });
    listeners.get("unhandledrejection")?.[0]({ reason: "NetworkError" });
    expect(reload).not.toHaveBeenCalled();
  });

  it("يزيل المستمعات عند التنظيف", () => {
    const { win, listeners } = makeWindow();
    const cleanup = installChunkRecovery(win as never);
    cleanup();
    expect(listeners.get("error")).toHaveLength(0);
    expect(listeners.get("unhandledrejection")).toHaveLength(0);
  });
});
