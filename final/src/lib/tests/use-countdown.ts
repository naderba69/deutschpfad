"use client";

import * as React from "react";

/**
 * مؤقت تنازلي — يعيد الثواني المتبقية ويستدعي onExpire عند الصفر
 * (يوقف تلقائياً عند الانتهاء)
 */
export function useCountdown(totalSeconds: number, onExpire?: () => void) {
  const [remaining, setRemaining] = React.useState(totalSeconds);

  React.useEffect(() => {
    setRemaining(totalSeconds);
    if (totalSeconds <= 0) return;
    const timer = setInterval(() => {
      setRemaining((s) => {
        if (s <= 1) {
          clearInterval(timer);
          onExpire?.();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [totalSeconds, onExpire]);

  return remaining;
}
