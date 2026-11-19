/**
 * تسجيل الـ Service Worker
 * — @ducanh2912/next-pwa يسجّله تلقائياً (register: true)؛
 *   هذه الدالة طبقة أمان إضافية تضمن التسجيل حتى مع تغيير
 *   الإعدادات مستقبلاً. التسجيل المتكرر لنفس المسار لا يسبب
 *   أي مشكلة (يعيد نفس التسجيل).
 */
export function registerServiceWorker(): void {
  if (typeof window === "undefined") return;
  if (!("serviceWorker" in navigator)) return;
  // في بيئة التطوير يكون الـ SW معطلاً عن قصد (لتفادي تعارض HMR)
  if (process.env.NODE_ENV === "development") return;

  const register = () => {
    void navigator.serviceWorker.register("/sw.js").catch(() => {
      /* تجاهل صامت لأي فشل في التسجيل */
    });
  };

  // قد يُحمّل المكوّن بعد حدث load (ترطيب React/تنقل عميل)، فلا ننتظر حدثاً لن يتكرر.
  if (document.readyState === "complete") {
    register();
  } else {
    window.addEventListener("load", register, { once: true });
  }
}
