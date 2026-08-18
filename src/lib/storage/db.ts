import {openDB, type DBSchema, type IDBPDatabase} from "idb";

import type { AnalyticsEvent } from "@/types/analytics";
import type { Sm2CardData } from "@/types/srs";
import type { Snapshot } from "@/types/storage";

/**
 * قاعدة بيانات IndexedDB الموحدة عبر مكتبة idb
 * — مخازن: progress / cards / events / settings / snapshots /
 *           llm-cache (تخزين مؤقت لردود LLM) / llm-usage (عدّاد يومي) —
 */
interface DeutschPfadDB extends DBSchema {
  progress: {
    key: string;
    value: { key: string; data: unknown };
  };
  cards: {
    key: string;
    value: Sm2CardData;
  };
  events: {
    key: number;
    value: AnalyticsEvent;
    autoIncrement: true;
  };
  settings: {
    key: string;
    value: { key: string; data: unknown };
  };
  snapshots: {
    key: string;
    value: Snapshot;
  };
  "llm-cache": {
    key: string;
    value: { key: string; response: string; purpose?: string; ts: number };
  };
  "llm-usage": {
    key: string;
    value: { key: string; date: string; count: number };
  };
}

const DB_NAME = "deutschpfad";
const DB_VERSION = 2;

let dbPromise: Promise<IDBPDatabase<DeutschPfadDB>> | null = null;

/** فتح قاعدة البيانات (singleton) */
export function getDb(): Promise<IDBPDatabase<DeutschPfadDB>> {
  if (!dbPromise) {
    dbPromise = openDB<DeutschPfadDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("progress")) {
          db.createObjectStore("progress", { keyPath: "key" });
        }
        if (!db.objectStoreNames.contains("cards")) {
          db.createObjectStore("cards", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("events")) {
          db.createObjectStore("events", { keyPath: "id", autoIncrement: true });
        }
        if (!db.objectStoreNames.contains("settings")) {
          db.createObjectStore("settings", { keyPath: "key" });
        }
        if (!db.objectStoreNames.contains("snapshots")) {
          db.createObjectStore("snapshots", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("llm-cache")) {
          db.createObjectStore("llm-cache", { keyPath: "key" });
        }
        if (!db.objectStoreNames.contains("llm-usage")) {
          db.createObjectStore("llm-usage", { keyPath: "key" });
        }
      },
    });
  }
  return dbPromise;
}

/** قراءة سجل من مخزن progress/settings */
export async function getRecord<T>(store: "progress" | "settings", key: string): Promise<T | null> {
  const rec = await (await getDb()).get(store, key);
  return rec ? (rec.data as T) : null;
}

/** كتابة سجل في مخزن progress/settings */
export async function putRecord(store: "progress" | "settings", key: string, data: unknown): Promise<void> {
  await (await getDb()).put(store, { key, data });
}

/** مسح مخزن بالكامل */
export async function clearStore(store: "progress" | "cards" | "events" | "settings" | "snapshots" | "llm-cache" | "llm-usage"): Promise<void> {
  await (await getDb()).clear(store);
}
