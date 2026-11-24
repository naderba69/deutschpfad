/**
 * ═══════════════════════════════════════════════════════════
 *  تنظيف Service Worker في وضع التطوير — دالة نقية
 *
 *  المشكلة: بناء إنتاج على المنفذ نفسه يسجّل Service Worker بنطاق الموقع.
 *  إن بقي مسجّلاً أثناء التطوير، يخدم صفحات وملفات قديمة فتتعطل
 *  الشاشة وHMR. لذلك في التطوير نلغي كل التسجيلات الموجودة.
 *
 *  هذه الدالة تُستدعى من مسار التطوير فقط؛ بناء الإنتاج لا يضمّ هذا
 *  الكود (فرع NODE_ENV === "development" يُحذف عند البناء).
 * ═══════════════════════════════════════════════════════════
 */

export interface ServiceWorkerRegistrationLike {
  unregister(): Promise<boolean>;
}

export interface ServiceWorkerContainerLike {
  getRegistrations(): Promise<readonly ServiceWorkerRegistrationLike[]>;
}

/** يلغي كل التسجيلات ويعيد عددها. فشل تسجيل واحد لا يوقف الباقي. */
export async function unregisterServiceWorkersForDev(
  container: ServiceWorkerContainerLike,
): Promise<number> {
  const registrations = await container.getRegistrations();
  await Promise.allSettled(registrations.map((r) => r.unregister()));
  return registrations.length;
}
