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
  /** مجموعة سريعة للدروس المكتملة */
  completedLessonsSet: Set<string>;
  /** تبديل حالة اكتمال وحدة */
  toggleUnit: (unitId: string) => void;
  /** تعليم وحدة كمكتملة */
  completeUnit: (unitId: string) => void;
  /** إلغاء اكتمال وحدة */
  uncompleteUnit: (unitId: string) => void;
  /** تعليم درس كمكتمل (المسار المتسلسل) */
  completeLesson: (lessonId: string) => void;
  /** إلغاء اكتمال درس */
  uncompleteLesson: (lessonId: string) => void;
  /** تبديل حالة اكتمال درس */
  toggleLesson: (lessonId: string) => void;
  /** ختم مستوى بامتحان الختم (Seal Exam) */
  sealLevel: (level: LevelCode) => void;
  /** مسح كل التقدم */
  resetProgress: () => void;
}

const EMPTY: ProgressState = { completedUnits: [], sealedLevels: [], completedLessons: [] };

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
    // ═══ P0-01: كان يُعيد { completedUnits } فقط فيُسقط sealedLevels
    // و completedLessons — الآن ننشر الحالة كاملة ═══
    setState((prev) => ({
      ...prev,
      completedUnits: prev.completedUnits.includes(unitId)
        ? prev.completedUnits.filter((id) => id !== unitId)
        : [...prev.completedUnits, unitId],
    }));
  }, []);

  const completeUnit = React.useCallback((unitId: string) => {
    setState((prev) =>
      prev.completedUnits.includes(unitId)
        ? prev
        : { ...prev, completedUnits: [...prev.completedUnits, unitId] },
    );
  }, []);

  const uncompleteUnit = React.useCallback((unitId: string) => {
    setState((prev) => ({
      ...prev,
      completedUnits: prev.completedUnits.filter((id) => id !== unitId),
    }));
  }, []);

  const completeLesson = React.useCallback((lessonId: string) => {
    setState((prev) => {
      const done = prev.completedLessons ?? [];
      if (done.includes(lessonId)) return prev;
      return { ...prev, completedLessons: [...done, lessonId] };
    });
  }, []);

  const uncompleteLesson = React.useCallback((lessonId: string) => {
    setState((prev) => ({
      ...prev,
      completedLessons: (prev.completedLessons ?? []).filter((id) => id !== lessonId),
    }));
  }, []);

  const toggleLesson = React.useCallback((lessonId: string) => {
    setState((prev) => {
      const done = prev.completedLessons ?? [];
      return {
        ...prev,
        completedLessons: done.includes(lessonId)
          ? done.filter((id) => id !== lessonId)
          : [...done, lessonId],
      };
    });
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
      completedLessons: state.completedLessons ?? [],
      completedSet: new Set(state.completedUnits),
      sealedSet: new Set(state.sealedLevels ?? []),
      completedLessonsSet: new Set(state.completedLessons ?? []),
      isHydrated,
      toggleUnit,
      completeUnit,
      uncompleteUnit,
      completeLesson,
      uncompleteLesson,
      toggleLesson,
      sealLevel,
      resetProgress,
    }),
    [state, isHydrated, toggleUnit, completeUnit, uncompleteUnit, completeLesson, uncompleteLesson, toggleLesson, sealLevel, resetProgress],
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
