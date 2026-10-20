"use client";

import * as React from "react";
import Link from "next/link";
import {CheckCircle2, Lock, PlayCircle} from "lucide-react";

import {LESSON_META} from "@/data/lessons/meta";
import type { LevelCode } from "@/types/curriculum";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  خريطة المسار المتعرجة (Winding Path) — أسلوب Duolingo
 *  عقدة لكل درس، تنساب في مسار متعرج SVG، مع حالات:
 *  · مكتمل ✓ (أخضر) · الحالي (مضيء نابض) · مقفل 🔒 (رمادي)
 *  — التسلسل الصارم: لا يُفتح التالي قبل إتمام السابق —
 * ═══════════════════════════════════════════════════════════
 */
export function WindingPath({
  level,
  completedLessons,
}: {
  level: LevelCode;
  completedLessons: Set<string>;
}) {
  const lessons = LESSON_META.filter((l) => l.level === level);
  const levelDone = new Set(lessons.map((l) => l.id).filter((id) => completedLessons.has(id)));

  // ترتيب المسار المتعرج: يمين/يسار بالتناوب
  const zigzag = lessons.map((_, i) => ({
    x: i % 2 === 0 ? 120 : 280,
    y: 70 + i * 92,
  }));

  // العقدة الحالية = أول درس غير مكتمل
  const currentIdx = lessons.findIndex((l) => !levelDone.has(l.id));
  const activeIdx = currentIdx === -1 ? lessons.length - 1 : currentIdx;

  // إحداثيات العقدة حسب فهرسها في الصف
  const nodeAt = (i: number) => zigzag[i] ?? { x: 120, y: 70 + i * 92 };

  // مسار متعرج بين العقد
  const pathD = lessons
    .map((_, i) => {
      const p = nodeAt(i);
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = nodeAt(i - 1);
      const midX = (prev.x + p.x) / 2;
      return `C ${midX} ${prev.y}, ${midX} ${p.y}, ${p.x} ${p.y}`;
    })
    .join(" ");

  const nodeRadius = 26;
  const width = 400;
  const height = 70 + (lessons.length - 1) * 92 + 60;

  return (
    <div className="overflow-x-auto pb-4" dir="ltr">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mx-auto h-auto max-w-full"
        style={{ minWidth: lessons.length > 6 ? 380 : 320 }}
        role="img"
        aria-label={`خريطة مسار المستوى ${level}`}
      >
        {/* المسار المتعرج */}
        <path
          d={pathD}
          fill="none"
          stroke="currentColor"
          strokeWidth={14}
          strokeLinecap="round"
          className="text-muted/60"
        />
        <path
          d={pathD}
          fill="none"
          stroke="currentColor"
          strokeWidth={10}
          strokeLinecap="round"
          className={cn(
            "text-success/70",
          )}
        />

        {/* العقد */}
        {lessons.map((lesson, i) => {
          const { x, y } = nodeAt(i);
          const done = levelDone.has(lesson.id);
          const isCurrent = i === activeIdx && !done;
          const locked = i > activeIdx;
          const isFirst = i === 0;
          const isLast = i === lessons.length - 1;
          return (
            <g key={lesson.id} transform={`translate(${x - nodeRadius}, ${y - nodeRadius})`}>
              {/* توهج للعقدة الحالية */}
              {isCurrent && (
                <circle
                  cx={nodeRadius}
                  cy={nodeRadius}
                  r={nodeRadius + 7}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  className="animate-pulse text-primary"
                />
              )}
              {/* توهج ذهبي للعقد المكتملة */}
              {done && (
                <circle
                  cx={nodeRadius}
                  cy={nodeRadius}
                  r={nodeRadius + 5}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeDasharray="4 3"
                  className="text-gold"
                />
              )}
              <Link href={`/lesson/${lesson.id}`} aria-label={lesson.titleAr}>
                <circle
                  cx={nodeRadius}
                  cy={nodeRadius}
                  r={nodeRadius}
                  fill="currentColor"
                  className={cn(
                    "drop-shadow-sm transition-colors",
                    done
                      ? "text-success"
                      : isCurrent
                        ? "text-primary"
                        : locked
                          ? "text-muted"
                          : "text-primary/80",
                  )}
                />
                {/* الرمز */}
                {done ? (
                  <CheckCircle2
                    x={nodeRadius - 10}
                    y={nodeRadius - 10}
                    width={20}
                    height={20}
                    className="text-background"
                  />
                ) : locked ? (
                  <Lock
                    x={nodeRadius - 8}
                    y={nodeRadius - 8}
                    width={16}
                    height={16}
                    className="text-muted-foreground/70"
                  />
                ) : (
                  <PlayCircle
                    x={nodeRadius - 10}
                    y={nodeRadius - 10}
                    width={20}
                    height={20}
                    className="text-primary-foreground"
                  />
                )}
                {/* نجمة إتقان ذهبية فوق العقدة المكتملة */}
                {done && (
                  <text
                    x={nodeRadius + 16}
                    y={nodeRadius - 16}
                    textAnchor="middle"
                    fontSize={13}
                    className="text-gold"
                  >
                    ⭐
                  </text>
                )}
              </Link>
              {/* رقم الدرس تحت العقدة */}
              <text
                x={nodeRadius}
                y={nodeRadius + 38}
                textAnchor="middle"
                fontSize={11}
                fontWeight={700}
                fill="currentColor"
                className="text-muted-foreground"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
              {/* شارة النهاية */}
              {isLast && (
                <text
                  x={nodeRadius}
                  y={nodeRadius + 56}
                  textAnchor="middle"
                  fontSize={10}
                  fontWeight={800}
                  className="text-gold"
                >
                  🏁
                </text>
              )}
              {isFirst && (
                <text
                  x={nodeRadius}
                  y={nodeRadius - 32}
                  textAnchor="middle"
                  fontSize={10}
                  fontWeight={800}
                  className="text-success"
                >
                  بداية
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* أسطورة الحالات */}
      <div className="mx-auto mt-2 flex max-w-md flex-wrap items-center justify-center gap-4 text-[10px] font-bold text-muted-foreground">
        <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-success" /> مكتمل</span>
        <span className="inline-flex items-center gap-1"><PlayCircle className="h-3 w-3 text-primary" /> درسك الحالي</span>
        <span className="inline-flex items-center gap-1"><Lock className="h-3 w-3 text-muted-foreground" /> مقفل — أتمّ السابق</span>
      </div>
    </div>
  );
}
