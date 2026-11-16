"use client";

import * as React from "react";

/**
 * مؤقت تنازلي — يعيد الثواني المتبقية ويستدعي onExpire عند الصفر
 * (يوقف تلقائياً عند الانتهاء)
 *
 * ═══ A-04 (تدقيق 2026-08-15): كان onExpire ضمن dependencies —
 * كل إعادة تصيير تُنشئ دالة جديدة فتُعاد تهيئة المؤقت من جديد ═══
 * الحل: حفظ onExpire في ref مستقر، والمؤقت يعتمد على totalSeconds فقط.
 *
 * ═══ الجولة الحادية عشرة (WCAG 2.2.1 · 2.2.2) ═══
 * أُضيف خيار `paused`: جلسات الدراسة (كبسولة الخمس دقائق، وضع التركيز) كان
 * عدّادها يمضي بلا إيقاف، فلا يمكن للمستخدم إيقافه مؤقتاً — وهو حدّ زمني
 * يضعه المحتوى لا المستخدم. الإيقاف المؤقت يُعطّل العدّاد ويُبقيه عند قيمته
 * الحالية، والاستئناف يُكمل من حيث توقف (لا يعيد الضبط).
 */
export function useCountdown(
  totalSeconds: number,
  onExpire?: () => void,
  options?: {paused?: boolean},
) {
  const paused = options?.paused ?? false;
  const [remaining, setRemaining] = React.useState(totalSeconds);
  const onExpireRef = React.useRef(onExpire);

  // تحديث المرجع عند كل تصيير (بلا إعادة تشغيل المؤقت)
  React.useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  React.useEffect(() => {
    setRemaining(totalSeconds);
  }, [totalSeconds]);

  React.useEffect(() => {
    // لا نُصفّر القيمة عند الإيقاف المؤقت؛ نكتفي بعدم إنشاء عدّاد جديد.
    if (paused || totalSeconds <= 0) return;
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
  }, [totalSeconds, paused]);

  return remaining;
}
