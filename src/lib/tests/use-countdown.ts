"use client";

import * as React from "react";

/**
 * مؤقت تنازلي — يعيد الثواني المتبقية ويستدعي onExpire عند الصفر
 * (يوقف تلقائياً عند الانتهاء)
 *
 * ═══ A-04 (تدقيق 2026-08-15): كان onExpire ضمن dependencies —
 * كل إعادة تصيير تُنشئ دالة جديدة فتُعاد تهيئة المؤقت من جديد ═══
 * الحل: حفظ onExpire في ref مستقر، والمؤقت يعتمد على totalSeconds فقط.
 */
export function useCountdown(totalSeconds: number, onExpire?: () => void) {
  const [remaining, setRemaining] = React.useState(totalSeconds);
  const onExpireRef = React.useRef(onExpire);

  // تحديث المرجع عند كل تصيير (بلا إعادة تشغيل المؤقت)
  React.useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  React.useEffect(() => {
    setRemaining(totalSeconds);
    if (totalSeconds <= 0) return;
    const timer = setInterval(() => {
      setRemaining((s) => {
        if (s <= 1) {
          clearInterval(timer);
          onExpireRef.current?.();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalSeconds]);

  return remaining;
}
