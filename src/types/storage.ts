import type { ProgressState } from "@/types/curriculum";
import type { Sm2CardData } from "@/types/srs";
import type { AnalyticsEvent } from "@/types/analytics";

/**
 * نسخة احتياطية كاملة — تُصدَّر/تُستورد كـ JSON
 * (v2: تشمل الأحداث + تقدم كامل — إصلاح P0-01)
 */
export interface BackupData {
  version: 1 | 2;
  exportedAt: string;
  progress: ProgressState;
  cards: Sm2CardData[];
  /** نتائج الاختبارات والأحداث التحليلية (جديد في v2) */
  events?: AnalyticsEvent[];
  settings: Record<string, unknown>;
}

/**
 * لقطة نسخ احتياطي مخزنة في IndexedDB (مخزن snapshots)
 */
export interface Snapshot {
  id: string;
  createdAt: number;
  kind: "auto" | "manual";
  data: BackupData;
}
