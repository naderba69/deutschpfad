"use client";

import * as React from "react";

import {maybeAutoSnapshot} from "@/lib/storage/export-import";
import {loadProgressResult, saveProgressToDb} from "@/lib/storage/progress-db";
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
  /** تعليم وحدة كمكتملة */
  completeUnit: (unitId: string) => void;
  /** تعليم درس كمكتمل (المسار المتسلسل) */
  completeLesson: (lessonId: string) => void;
  /** إلغاء اكتمال درس */
  uncompleteLesson: (lessonId: string) => void;
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
  const [canPersist, setCanPersist] = React.useState(false);
  const [storageWarning, setStorageWarning] = React.useState<string | null>(null);
  const saveAttempt = React.useRef(0);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const loaded = await loadProgressResult();
      if (!cancelled) {
        setState(loaded.state);
        setCanPersist(loaded.ok);
        setIsHydrated(true);
        if (loaded.ok) {
          setStorageWarning(null);
          // نسخة احتياطية تلقائية (مرة واحدة يومياً) بعد قراءة موثوقة فقط.
          void maybeAutoSnapshot();
        } else {
          setStorageWarning("تعذرت قراءة تقدمك من قاعدة البيانات؛ أوقفنا الحفظ التلقائي كي لا نستبدل بيانات غير مقروءة بنسخة قديمة. أعد المحاولة.");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  React.useEffect(() => {
    if (!isHydrated || !canPersist) return;
    const attempt = ++saveAttempt.current;
    void saveProgressToDb(state).then((result) => {
      if (attempt !== saveAttempt.current) return;
      if (!result.persistedSomewhere) {
        setStorageWarning("تعذر حفظ تقدمك في التخزين المحلي. انسخ بياناتك احتياطياً إن أمكن، ولا تغلق الصفحة قبل إعادة المحاولة.");
      } else if (!result.indexedDbSaved) {
        setStorageWarning("حُفظ التقدم في النسخة المحلية المؤقتة فقط؛ قاعدة البيانات غير متاحة حالياً. صدّر نسخة احتياطية وأعد المحاولة لاحقاً.");
      } else if (!result.localStorageSaved) {
        setStorageWarning("حُفظ التقدم في قاعدة البيانات، لكن تعذرت كتابة المرآة المحلية؛ بعض الشاشات قد لا تعرضه فوراً.");
      } else {
        setStorageWarning(null);
      }
    }).catch(() => {
      if (attempt === saveAttempt.current) {
        setStorageWarning("تعذر التحقق من حفظ تقدمك؛ تحقق من التخزين المحلي وأعد المحاولة.");
      }
    });
  }, [state, isHydrated, canPersist]);

  const completeUnit = React.useCallback((unitId: string) => {
    setState((prev) =>
      prev.completedUnits.includes(unitId)
        ? prev
        : { ...prev, completedUnits: [...prev.completedUnits, unitId] },
    );
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
      completeUnit,
      completeLesson,
      uncompleteLesson,
      sealLevel,
      resetProgress,
    }),
    [state, isHydrated, completeUnit, completeLesson, uncompleteLesson, sealLevel, resetProgress],
  );

  return (
    <ProgressContext.Provider value={value}>
      {storageWarning && (
        <div role="alert" className="fixed inset-x-3 top-3 z-[100] mx-auto max-w-2xl rounded-xl border border-amber-500/40 bg-background p-3 text-sm font-semibold text-foreground shadow-lg">
          {storageWarning}
          {!canPersist && isHydrated && (
            <button type="button" className="ms-2 underline underline-offset-2" onClick={() => window.location.reload()}>
              إعادة المحاولة
            </button>
          )}
        </div>
      )}
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = React.useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress يجب استخدامه داخل ProgressProvider");
  }
  return ctx;
}
