/**
 * مساعد اختبارات بوابة المراحل:
 * الاختبارات التي تمرّ عبر مراحل متعددة لا تستطيع حلّ كل تمارين الدرس.
 * هذا المساعد يكتب أحداث إنجاز لكل أقسام الدرس في سجل IndexedDB (كما يفعل
 * النظام عند الإنجاز الفعلي)، ثم يعيد تحميل الصفحة فتقرأ البوابة الإنجازات.
 */
import type { Page } from "@playwright/test";

/** كل معرّفات الأقسام التي تغطيها مراحل الحصة (تطابق SECTION_PROOF) */
export const ALL_SESSION_SECTION_IDS = [
  "lernziele",
  "einfuehrung",
  "review",
  "wortschatz",
  "theorie",
  "verben",
  "lesetext",
  "hoerverstehen",
  "aussprache",
  "schreiben",
  "uebungen",
  "fehler",
  "minitest",
  "lernkarten",
  "landeskunde",
  "mediation",
  "interaction",
  "oral-production",
  "vertiefung",
];

/** يكتب إنجاز كل الأقسام للدرس، ثم يعيد التحميل. يشترط أن تكون قاعدة البيانات قد أُنشئت. */
export async function seedLessonCompletions(page: Page, lessonId: string): Promise<void> {
  await page.evaluate(
    async ({ lessonId, sectionIds }) => {
      for (let attempt = 0; attempt < 20; attempt++) {
        const written = await new Promise<boolean>((resolve, reject) => {
          const req = indexedDB.open("deutschpfad");
          req.onerror = () => reject(req.error);
          req.onsuccess = () => {
            const db = req.result;
            if (!db.objectStoreNames.contains("events")) {
              db.close();
              resolve(false);
              return;
            }
            const tx = db.transaction("events", "readwrite");
            const store = tx.objectStore("events");
            for (const sectionId of sectionIds) {
              store.add({ type: "section-completed", lessonId, sectionId, ts: Date.now() });
            }
            tx.oncomplete = () => {
              db.close();
              resolve(true);
            };
            tx.onerror = () => {
              db.close();
              reject(tx.error);
            };
          };
        });
        if (written) return;
        await new Promise((r) => setTimeout(r, 300));
      }
      throw new Error("قاعدة البيانات لم تُنشأ بعد — لا يمكن كتابة الإنجازات");
    },
    { lessonId, sectionIds: ALL_SESSION_SECTION_IDS },
  );
  await page.reload();
  await page.waitForTimeout(1200);
}
