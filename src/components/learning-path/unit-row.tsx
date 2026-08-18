"use client";

import Link from "next/link";
import {BookOpen, Check, CheckCircle2, ClipboardCheck, Clock, Lock, PlayCircle} from "lucide-react";

import {getFirstLessonMetaForUnit} from "@/data/lessons/meta";
import {getUnitLessonCount} from "@/lib/constants/curriculum";
import {LangDe} from "@/components/shared/lang-de";
import {Button} from "@/components/ui/button";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import type { Unit } from "@/types/curriculum";
import {cn} from "@/lib/utils";

interface UnitRowProps {
  unit: Unit;
  status: "locked" | "current" | "completed";
  onToggle: (unitId: string) => void;
}

/**
 * صف وحدة دراسية واحدة داخل خارطة الطريق
 */
export function UnitRow({ unit, status, onToggle }: UnitRowProps) {
  const isLocked = status === "locked";
  const isCompleted = status === "completed";
  const lesson = getFirstLessonMetaForUnit(unit.id);

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 rounded-xl border px-4 py-3 transition-colors",
        isCompleted && "border-success/30 bg-success/5",
        !isCompleted && !isLocked && "border-primary/20 bg-primary/[0.03]",
        isLocked && "border-muted bg-muted/30 opacity-70",
      )}
    >
      <div className="flex min-w-0 items-center gap-3">
        {/* أيقونة الحالة */}
        <span
          className={cn(
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
            isCompleted && "bg-success/15 text-success",
            !isCompleted && !isLocked && "bg-primary/10 text-primary",
            isLocked && "bg-muted text-muted-foreground",
          )}
          aria-hidden="true"
        >
          {isLocked ? (
            <Lock className="h-4 w-4" />
          ) : isCompleted ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : (
            <PlayCircle className="h-5 w-5" />
          )}
        </span>

        {/* رقم الوحدة */}
        <span className="font-de shrink-0 text-xs font-bold text-muted-foreground">
          {String(unit.number).padStart(2, "0")}
        </span>

        <div className="min-w-0">
          <p
            className={cn(
              "truncate text-sm font-bold",
              isCompleted && "text-success",
              isLocked && "text-muted-foreground",
            )}
          >
            <LangDe className="font-bold">{unit.titleDe}</LangDe>
          </p>
          <p className="truncate text-xs text-muted-foreground">{unit.titleAr}</p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        {/* بيانات الوحدة */}
        <div className="hidden items-center gap-3 text-[11px] text-muted-foreground sm:flex">
          <span className="inline-flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            {getUnitLessonCount(unit.id)} دروس
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            ~{unit.minutes} د
          </span>
        </div>

        {/* إجراء الوحدة */}
        <div className="flex shrink-0 items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden text-primary sm:inline-flex"
            aria-label={`اختبار الوحدة ${unit.titleAr}`}
          >
            <Link href={`/tests/unit/${unit.id}`}>
              <ClipboardCheck className="h-3.5 w-3.5" aria-hidden="true" />
              اختبار الوحدة
            </Link>
          </Button>
          {lesson ? (
            <Button asChild size="sm" variant={isCompleted ? "ghost" : "default"} className={isCompleted ? "text-success hover:text-success" : ""}>
              <Link href={`/lesson/${lesson.id}`}>
                <PlayCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">ابدأ الدرس</span>
              </Link>
            </Button>
          ) : isLocked ? (
            <TooltipProvider delayDuration={150}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex">
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled
                      aria-disabled="true"
                      aria-label={`الوحدة ${unit.titleAr} مقفلة`}
                    >
                      مقفلة
                    </Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  أكمل الوحدة السابقة لفتح هذه الوحدة
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onToggle(unit.id)}
              aria-pressed={isCompleted}
              aria-label={
                isCompleted
                  ? `إلغاء إتمام الوحدة ${unit.titleAr}`
                  : `تعليم الوحدة ${unit.titleAr} كمكتملة (تجريبي)`
              }
              className="text-primary"
            >
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">إكمال (تجريبي)</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
