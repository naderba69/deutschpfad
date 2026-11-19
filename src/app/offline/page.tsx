import type { Metadata } from "next";

import {OfflineClient} from "@/components/offline/offline-client";

export const metadata: Metadata = {
  title: "غير متصل — DeutschPfad",
  description: "أنت غير متصل بالإنترنت. الدروس المحفوظة تعمل دون اتصال.",
};

/**
 * صفحة الانقطاع عن الإنترنت (يستخدمها الـ Service Worker)
 * صفحة خادمية بغلاف عميل — تتيح metadata كاملة
 */
export default function OfflinePage() {
  return <OfflineClient />;
}
