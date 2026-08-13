"use client";

import Link from "next/link";
import {Zap} from "lucide-react";

import {useLLM} from "@/components/providers/llm-provider";
import {Badge} from "@/components/ui/badge";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";

/**
 * العدّاد المرئي لحصتك اليومية من طلبات الذكاء الاصطناعي
 * — يظهر فقط عندما تكون المفاتيح مضبوطة —
 * (الطلبات المخزنة مؤقتاً لا تستهلك من الحصة)
 */
export function UsageCounter() {
  const { isConfigured, remaining, dailyLimit } = useLLM();

  if (!isConfigured) return null;

  const ratio = dailyLimit > 0 ? remaining / dailyLimit : 0;
  const tone =
    remaining === 0
      ? "destructive"
      : ratio <= 0.15
        ? "gold"
        : "secondary";

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href="/assistant" aria-label="حصتك اليومية من الذكاء الاصطناعي">
            <Badge
              variant={tone}
              className={cn("gap-1 px-2.5 py-1 font-de font-semibold", remaining === 0 && "animate-pulse")}
            >
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              {remaining}/{dailyLimit}
            </Badge>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          {remaining === 0
            ? "استنفدت حصتك اليومية — تعود غداً (الطلبات المخزنة ما زالت تعمل)"
            : `طلبات الذكاء الاصطناعي المتبقية اليوم: ${remaining}/${dailyLimit} — التخزين المؤقت لا يستهلك طلباً`}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
