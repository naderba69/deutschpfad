import type { ProgressState } from "@/types/curriculum";
import type { Sm2CardData } from "@/types/srs";

/**
 * نسخة احتياطية كاملة — تُصدَّر/تُستورد كـ JSON
 */
export interface BackupData {
  version: 1;
  exportedAt: string;
  progress: ProgressState;
  cards: Sm2CardData[];
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
