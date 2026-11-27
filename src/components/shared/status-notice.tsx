import * as React from "react";
import {AlertTriangle, CheckCircle2, Info} from "lucide-react";

import {cn} from "@/lib/utils";

/**
 * رسالة حالة موحّدة (نجاح / تنبيه / معلومة).
 *
 * النوع صريح في الخاصية `kind` لا في أول الرسالة: سابقاً كان الدور (alert/status)
 * يُحدَّد بالبحث عن رمز ⚠️ في بداية النص، فيتغير السلوك بتغيير رمز تجميلي.
 * - تنبيه (warning) يُعلَن فوراً بدور alert؛ النجاح والمعلومة بدور status.
 * - الأيقونة تُخفى عن قارئ الشاشة لأن النص يحمل المعنى كاملاً.
 */
export type NoticeKind = "success" | "warning" | "info";

export interface Notice {
  text: string;
  kind: NoticeKind;
}

const TONE: Record<NoticeKind, string> = {
  success: "border-success/30 bg-success/10 text-foreground",
  warning: "border-gold/40 bg-gold/10 text-foreground",
  info: "border-primary/30 bg-primary/5 text-foreground",
};

const ICON_TONE: Record<NoticeKind, string> = {
  success: "text-success",
  warning: "text-gold-strong",
  info: "text-primary",
};

export function StatusNotice({
  kind = "info",
  children,
  className,
}: {
  kind?: NoticeKind;
  children: React.ReactNode;
  className?: string;
}) {
  const Icon = kind === "success" ? CheckCircle2 : kind === "warning" ? AlertTriangle : Info;
  return (
    <div
      role={kind === "warning" ? "alert" : "status"}
      className={cn("flex items-start gap-2 rounded-xl border p-3 text-sm font-semibold", TONE[kind], className)}
    >
      <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", ICON_TONE[kind])} aria-hidden="true" />
      <span className="min-w-0">{children}</span>
    </div>
  );
}
