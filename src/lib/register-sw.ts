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

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .catch(() => {
        /* تجاهل صامت لأي فشل في التسجيل */
      });
  });
}
