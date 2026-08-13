"use client";

/**
 * التذكيرات اليومية — تذكير محلي (Notification API) يعمل دون خادم
 * (عند فتح التطبيق، تُجدول تذكيرات أثناء الجلسة؛ والنشر الكامل عبر Web Push
 * موثق في DEPLOYMENT.md لاحقاً).
 */
import * as React from "react";
import { Bell, BellOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecord, putRecord } from "@/lib/storage/db";
import { cn } from "@/lib/utils";

const REMINDER_KEY = "reminder-settings";

interface ReminderPrefs {
  enabled: boolean;
  /** الساعة (0-23) للتذكير */
  hour: number;
}

async function loadPrefs(): Promise<ReminderPrefs> {
  try {
    const stored = await getRecord<ReminderPrefs>("settings", REMINDER_KEY);
    if (stored) return stored;
  } catch {
    /* تجاهل */
  }
  return { enabled: false, hour: 20 };
}

function notify(title: string, body: string) {
  if (typeof window === "undefined" || !("Notification" in window)) return;
  if (Notification.permission !== "granted") return;
  try {
    new Notification(title, { body, icon: "/icons/icon-192.png" });
  } catch {
    /* تجاهل */
  }
}

/** التحقق كل 30 ثانية: هل حان وقت التذكير؟ */
function scheduleLoop(hour: number) {
  const id = window.setInterval(() => {
    const now = new Date();
    if (now.getHours() === hour && now.getMinutes() === 0) {
      notify("⏰ حان وقت التعلم!", "5 دقائق من درب الألمانية اليوم — تقدم نحو B2.");
    }
  }, 30_000);
  return id;
}

export function ReminderSettings() {
  const [prefs, setPrefs] = React.useState<ReminderPrefs | null>(null);
  const [permission, setPermission] = React.useState<NotificationPermission | "unsupported">("unsupported");

  React.useEffect(() => {
    let mounted = true;
    void (async () => {
      const p = await loadPrefs();
      if (mounted) setPrefs(p);
    })();
    setPermission(typeof window !== "undefined" && "Notification" in window ? Notification.permission : "unsupported");
    return () => {
      mounted = false;
    };
  }, []);

  React.useEffect(() => {
    if (!prefs?.enabled) return;
    const id = scheduleLoop(prefs.hour);
    return () => window.clearInterval(id);
  }, [prefs?.enabled, prefs?.hour]);

  if (!prefs) return null;

  const askPermission = async () => {
    if (permission === "unsupported") return;
    const res = await Notification.requestPermission();
    setPermission(res);
  };

  const save = async (next: ReminderPrefs) => {
    setPrefs(next);
    await putRecord("settings", REMINDER_KEY, next);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          {prefs.enabled ? (
            <Bell className="h-5 w-5 text-gold-strong" aria-hidden="true" />
          ) : (
            <BellOff className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
          )}
          التذكير اليومي بالمراجعة
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 p-5">
        {permission === "unsupported" ? (
          <p className="text-sm text-muted-foreground">
            متصفحك لا يدعم الإشعارات — يمكنك الاعتماد على جدول اللوحة والخطة الأسبوعية.
          </p>
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => void save({ ...prefs, enabled: !prefs.enabled })}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors",
                  prefs.enabled
                    ? "border-gold bg-gold/15 text-gold-strong"
                    : "bg-muted/40 text-muted-foreground hover:border-primary/40",
                )}
              >
                {prefs.enabled ? "🔔 مفعّل" : "🔕 معطّل"}
              </button>
              {prefs.enabled && (
                <select
                  value={prefs.hour}
                  onChange={(e) => void save({ ...prefs, hour: Number(e.target.value) })}
                  className="rounded-lg border bg-background px-2 py-1.5 text-xs font-bold outline-none focus:border-primary"
                  aria-label="ساعة التذكير"
                >
                  {Array.from({ length: 24 }, (_, h) => (
                    <option key={h} value={h}>
                      {h}:00
                    </option>
                  ))}
                </select>
              )}
              {permission !== "granted" && prefs.enabled && (
                <Button size="sm" variant="outline" onClick={() => void askPermission()}>
                  السماح بالإشعارات
                </Button>
              )}
            </div>
            {permission !== "granted" && (
              <p className="text-xs text-muted-foreground">
                {permission === "denied"
                  ? "الإشعارات مرفوضة من المتصفح — فعّلها من إعدادات الموقع."
                  : "اسمح بالإشعارات لتستقبل تذكير المراجعة اليومية."}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              💡 تذكير محلي يعمل أثناء فتح التطبيق. بعد النشر، يمكن تفعيل Web Push كاملاً
              (إشعارات حتى عند إغلاق الموقع) — راجع DEPLOYMENT.md.
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
