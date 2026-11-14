/**
 * قياس الاحتفاظ — من سجل الأحداث المحلي إلى مؤشرات قابلة للمقارنة.
 *
 * ⚠️ حدود صريحة:
 *  · هذه **أداة قياس** لا نتيجة قياس. تعمل على أحداث مسجّلة على الجهاز نفسه
 *    (`events` في IndexedDB). لا تُرسل بيانات ولا تجمعها من متعلمين آخرين.
 *  · لا تثبت مستوى CEFR ولا جاهزية لامتحان، ولا تقيس «الاحتفاظ اللغوي» بالمعنى
 *    البحثي. تقيس **عودية الاستخدام** (هل عاد المتعلم في اليوم التالي والأسبوع
 *    التالي والشهر التالي؟) وهي مؤشر سلوكي أولي فقط.
 *  · عندما يكون السجل أقصر من النافذة الزمنية تُعاد القيمة `null` صراحةً بدل
 *    اعتبار الغياب دليل عدم عودة — الغياب هنا يعني «لا بيانات بعد».
 */

export type RetentionEvent = { ts: number };

export type RetentionSummary = {
  /** عدد الأيام التي فيها نشاط واحد على الأقل */
  activeDays: number;
  /** أول يوم نشاط (YYYY-MM-DD) أو null */
  firstDay: string | null;
  /** آخر يوم نشاط أو null */
  lastDay: string | null;
  /** عدد الأيام من أول نشاط إلى آخر نشاط ضمناً */
  spanDays: number;
  /** نسبة الأيام النشطة إلى المدة (0..1) */
  density: number;
  /** هل عاد في اليوم التالي لأول نشاط؟ null = لم تكتمل النافذة بعد */
  d1: boolean | null;
  /** هل عاد في اليوم السابع من أول نشاط؟ null = لم تكتمل النافذة بعد */
  d7: boolean | null;
  /** هل عاد في اليوم الثلاثين من أول نشاط؟ null = لم تكتمل النافذة بعد */
  d30: boolean | null;
  /** هل نشط في أسبوع تقويمي (الاثنين) مختلف عن أسبوع أول نشاط؟ */
  returnedNextWeek: boolean | null;
  /** أطول فجوة بين يومين نشطين (بالأيام، 0 إن لم توجد فجوة) */
  longestGapDays: number;
  /** عدد الأسابيع التقويمية التي فيها نشاط */
  activeWeeks: number;
};

const DAY_MS = 86_400_000;

/** مفتاح اليوم المحلي (وقت المتعلم لا UTC) — YYYY-MM-DD */
export function dayKey(ts: number): string {
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** منتصف ليل اليوم المحلي لأي طابع زمني */
function startOfDay(ts: number): number {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

/** بداية الأسبوع (الاثنين) لأي طابع زمني */
export function startOfWeek(ts: number): number {
  const d = new Date(startOfDay(ts));
  const offset = (d.getDay() + 6) % 7; // الاثنين = 0
  d.setDate(d.getDate() - offset);
  return d.getTime();
}

function daysBetween(a: number, b: number): number {
  return Math.round((startOfDay(b) - startOfDay(a)) / DAY_MS);
}

/**
 * ملخّص الاحتفاظ من قائمة أحداث.
 * @param events أحداث بأي ترتيب (تُرتَّب داخلياً)
 * @param now اللحظة المرجعية — تُمرَّر صراحةً في الاختبارات، وتُهمَل الأحداث المستقبلية
 */
export function computeRetention(events: readonly RetentionEvent[], now: number): RetentionSummary {
  const valid = events
    .map((event) => event.ts)
    .filter((ts) => Number.isFinite(ts) && ts > 0 && ts <= now)
    .sort((a, b) => a - b);

  if (valid.length === 0) {
    return {
      activeDays: 0,
      firstDay: null,
      lastDay: null,
      spanDays: 0,
      density: 0,
      d1: null,
      d7: null,
      d30: null,
      returnedNextWeek: null,
      longestGapDays: 0,
      activeWeeks: 0,
    };
  }

  const first = valid[0];
  const last = valid[valid.length - 1];

  // أيام النشاط كأرقام منتصف ليل محلية (فريدة ومرتّبة)
  const dayStarts = [...new Set(valid.map(startOfDay))].sort((a, b) => a - b);
  const daySet = new Set(dayStarts);

  const firstStart = dayStarts[0];
  const lastStart = dayStarts[dayStarts.length - 1];
  const spanDays = daysBetween(firstStart, lastStart) + 1;

  /** هل مرّ من أول نشاط عدد الأيام الكافي لحسم المؤشر؟ */
  const windowReached = (days: number) => daysBetween(firstStart, now) >= days;
  const dayActive = (days: number) => daySet.has(firstStart + days * DAY_MS);

  let longestGapDays = 0;
  for (let i = 1; i < dayStarts.length; i += 1) {
    const gap = daysBetween(dayStarts[i - 1], dayStarts[i]) - 1;
    if (gap > longestGapDays) longestGapDays = gap;
  }

  const weeks = new Set(valid.map(startOfWeek));
  const firstWeek = startOfWeek(first);
  // العودة الأسبوعية تُحسم فقط بعد انقضاء أسبوع كامل من أسبوع أول نشاط
  const returnedNextWeek = daysBetween(firstWeek, startOfWeek(now)) >= 7
    ? [...weeks].some((week) => week > firstWeek)
    : null;

  return {
    activeDays: dayStarts.length,
    firstDay: dayKey(first),
    lastDay: dayKey(last),
    spanDays,
    density: spanDays > 0 ? dayStarts.length / spanDays : 0,
    d1: windowReached(1) ? dayActive(1) : null,
    d7: windowReached(7) ? dayActive(7) : null,
    d30: windowReached(30) ? dayActive(30) : null,
    returnedNextWeek,
    longestGapDays,
    activeWeeks: weeks.size,
  };
}

/**
 * متوسط عدد الأحداث في اليوم النشط — مؤشر كثافة الجلسة لا جودة التعلّم.
 * يعيد null عندما لا يوجد نشاط.
 */
export function eventsPerActiveDay(events: readonly RetentionEvent[], now: number): number | null {
  const valid = events.filter((event) => Number.isFinite(event.ts) && event.ts > 0 && event.ts <= now);
  if (valid.length === 0) return null;
  const days = new Set(valid.map((event) => dayKey(event.ts))).size;
  return days === 0 ? null : valid.length / days;
}
