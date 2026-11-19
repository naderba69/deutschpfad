"use client";

import * as React from "react";

import {loadCompletedSections} from "@/lib/session/section-completion";
import {SECTION_COMPLETED_EVENT} from "@/lib/session/section-completion";
import {canOpenSection, lockMessageFor} from "@/lib/session/gate-nav";

/**
 * بوابة الدرس: تحمّل الأقسام المكتملة، وتحدّثها عند كل إنجاز جديد.
 * إن تعذّرت قراءة السجل تبقى المجموعة فارغة، فتبقى البوابة مغلقة (لا نفترض إنجازاً).
 */
export function useSessionGate(lessonId: string, availableIds: readonly string[]) {
  const [completed, setCompleted] = React.useState<ReadonlySet<string>>(new Set());

  React.useEffect(() => {
    let cancelled = false;
    const load = () => {
      void loadCompletedSections(lessonId).then((read) => {
        if (!cancelled && read.ok) setCompleted(read.ids);
      });
    };
    load();
    const onDone = (e: Event) => {
      if ((e as CustomEvent<{lessonId: string}>).detail?.lessonId === lessonId) load();
    };
    window.addEventListener(SECTION_COMPLETED_EVENT, onDone);
    return () => {
      cancelled = true;
      window.removeEventListener(SECTION_COMPLETED_EVENT, onDone);
    };
  }, [lessonId]);

  return {
    completed,
    /** هل يُفتح القسم عند هذا الفهرس؟ `done` يسمح بتمرير مجموعة محدّثة فوراً */
    canOpen: (index: number, done: ReadonlySet<string> = completed) => {
      const id = availableIds[index];
      return !!id && canOpenSection(availableIds, done, id);
    },
    lockMessage: (index: number) => {
      const id = availableIds[index];
      return id ? lockMessageFor(availableIds, completed, id) : null;
    },
    /** تحديث محلي فوري بعد إنجاز قسم بالتأكيد */
    markLocal: (id: string) => setCompleted((prev) => (prev.has(id) ? prev : new Set([...prev, id]))),
  };
}
