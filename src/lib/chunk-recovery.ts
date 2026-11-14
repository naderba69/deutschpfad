/**
 * استرداد من فشل تحميل الحِزم (ChunkLoadError)
 *
 * السبب العملي: التطبيق PWA يخزّن `_next/static/*.js` بـ CacheFirst لمدة 30 يوماً،
 * وصفحات التنقّل بـ NetworkFirst. بعد أي نشر جديد تتغيّر أسماء الحِزم؛ فمن يفتح
 * التطبيق من كاش قديم (أو تتعارض نسخة service worker قديمة مع جديدة) يرى شاشة
 * بيضاء وخطأ «Loading chunk … failed» — وهو الخطأ الذي رُصد فعلياً في تدقيق
 * 2026-10-13 (54 صفحة درس). الحل المعتاد: إعادة تحميل واحدة تلقائياً لتُجلب
 * الحِزم الجديدة، مع حارس في sessionStorage يمنع حلقة إعادة تحميل.
 */
export const CHUNK_RELOAD_FLAG = "dp-chunk-reload-attempted";

/** هل نص الخطأ يعني أن حزمة JS لم تُحمّل؟ */
export function isChunkLoadFailure(message: string | null | undefined): boolean {
  if (!message) return false;
  return (
    /Loading chunk [\w./-]+ failed/i.test(message) ||
    /ChunkLoadError/i.test(message) ||
    /Loading CSS chunk/i.test(message) ||
    /Failed to fetch dynamically imported module/i.test(message)
  );
}

interface RecoveryWindow {
  addEventListener: (type: string, listener: (event: unknown) => void) => void;
  removeEventListener: (type: string, listener: (event: unknown) => void) => void;
  sessionStorage?: { getItem: (k: string) => string | null; setItem: (k: string, v: string) => void };
  location: { reload: () => void };
}

interface ErrorLikeEvent {
  message?: string;
  reason?: unknown;
}

function messageOf(event: unknown): string | undefined {
  if (!event || typeof event !== "object") return undefined;
  const e = event as ErrorLikeEvent;
  if (typeof e.message === "string") return e.message;
  const reason = e.reason;
  if (typeof reason === "string") return reason;
  if (reason && typeof reason === "object" && "message" in reason) {
    const m = (reason as { message?: unknown }).message;
    if (typeof m === "string") return m;
  }
  return undefined;
}

/**
 * يثبّت المستمعات ويعيد التحميل مرة واحدة عند فشل الحزمة.
 * @returns دالة تنظيف لإزالة المستمعات
 */
export function installChunkRecovery(win: RecoveryWindow): () => void {
  const reloadOnce = () => {
    try {
      if (win.sessionStorage?.getItem(CHUNK_RELOAD_FLAG) === "1") return;
      win.sessionStorage?.setItem(CHUNK_RELOAD_FLAG, "1");
    } catch {
      // التخزين قد يكون معطّلاً (وضع خاص/سياسة متصفح) — نعيد التحميل على أي حال
    }
    win.location.reload();
  };

  const onError = (event: unknown) => {
    if (isChunkLoadFailure(messageOf(event))) reloadOnce();
  };
  const onRejection = (event: unknown) => {
    if (isChunkLoadFailure(messageOf(event))) reloadOnce();
  };

  win.addEventListener("error", onError);
  win.addEventListener("unhandledrejection", onRejection);

  return () => {
    win.removeEventListener("error", onError);
    win.removeEventListener("unhandledrejection", onRejection);
  };
}
