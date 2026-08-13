"use client";

import * as React from "react";

import {maybeAutoSnapshot} from "@/lib/storage/export-import";
import {loadProgressFromDb, saveProgressToDb} from "@/lib/storage/progress-db";
import type { LevelCode, ProgressState } from "@/types/curriculum";

interface ProgressContextValue extends ProgressState {
  /** هل تم تحميل التقدم من IndexedDB بعد؟ (لمنع وميض الحالة الأولية) */
  isHydrated: boolean;
  /** مجموعة سريعة للتحقق من اكتمال وحدة */
  completedSet: Set<string>;
  /** مجموعة سريعة للمستويات المختومة */
  sealedSet: Set<string>;
  /** تبديل حالة اكتمال وحدة */
  toggleUnit: (unitId: string) => void;
  /** تعليم وحدة كمكتملة */
  completeUnit: (unitId: string) => void;
  /** إلغاء اكتمال وحدة */
  uncompleteUnit: (unitId: string) => void;
  /** ختم مستوى بامتحان الختم (Seal Exam) */
  sealLevel: (level: LevelCode) => void;
  /** مسح كل التقدم */
  resetProgress: () => void;
}

const EMPTY: ProgressState = { completedUnits: [], sealedLevels: [] };

const ProgressContext = React.createContext<ProgressContextValue | null>(null);

/**
 * مزوّد التقدم العام — المرحلة 4:
 * IndexedDB (تخزين أساسي) + مرآة LocalStorage + نسخة احتياطية تلقائية يومية
 * — نفس الواجهة السابقة تماماً (لا تتأثر المكونات) —
 */
export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<ProgressState>(EMPTY);
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const loaded = await loadProgressFromDb();
      if (!cancelled) {
        setState(loaded);
        setIsHydrated(true);
        // نسخة احتياطية تلقائية (مرة واحدة يومياً)
        void maybeAutoSnapshot();
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  React.useEffect(() => {
    if (isHydrated) void saveProgressToDb(state);
  }, [state, isHydrated]);

  const toggleUnit = React.useCallback((unitId: string) => {
    setState((prev) => ({
      completedUnits: prev.completedUnits.includes(unitId)
        ? prev.completedUnits.filter((id) => id !== unitId)
        : [...prev.completedUnits, unitId],
    }));
  }, []);

  const completeUnit = React.useCallback((unitId: string) => {
    setState((prev) =>
      prev.completedUnits.includes(unitId)
        ? prev
        : { completedUnits: [...prev.completedUnits, unitId] },
    );
  }, []);

  const uncompleteUnit = React.useCallback((unitId: string) => {
    setState((prev) => ({
      completedUnits: prev.completedUnits.filter((id) => id !== unitId),
    }));
  }, []);

  const sealLevel = React.useCallback((level: LevelCode) => {
    setState((prev) => {
      const sealed = prev.sealedLevels ?? [];
      if (sealed.includes(level)) return prev;
      return { ...prev, sealedLevels: [...sealed, level] };
    });
  }, []);

  const resetProgress = React.useCallback(() => {
    setState(EMPTY);
  }, []);

  const value = React.useMemo<ProgressContextValue>(
    () => ({
      completedUnits: state.completedUnits,
      sealedLevels: state.sealedLevels ?? [],
      completedSet: new Set(state.completedUnits),
      sealedSet: new Set(state.sealedLevels ?? []),
      isHydrated,
      toggleUnit,
      completeUnit,
      uncompleteUnit,
      sealLevel,
      resetProgress,
    }),
    [state, isHydrated, toggleUnit, completeUnit, uncompleteUnit, sealLevel, resetProgress],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = React.useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress يجب استخدامه داخل ProgressProvider");
  }
  return ctx;
}
