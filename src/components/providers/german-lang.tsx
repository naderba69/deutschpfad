"use client";

import * as React from "react";

import { markGermanElements } from "@/lib/german-lang";

/**
 * يوسم النصوص الألمانية المتبقّية بـ`lang="de"` بعد الترطيب (التفاصيل في
 * `src/lib/german-lang.ts`). يعمل أيضاً على المحتوى الذي يُصيَّر عند التنقل.
 * التغييرات مجمّعة في إطار واحد حتى لا نفحص الشجرة مع كل تعديل صغير.
 */
export function GermanLang() {
  React.useEffect(() => {
    if (typeof document === "undefined") return;
    markGermanElements(document.body);

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        markGermanElements(document.body);
      });
    };
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
