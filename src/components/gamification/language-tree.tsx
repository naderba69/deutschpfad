"use client";

import * as React from "react";
import {Sprout} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {LEVELS} from "@/lib/constants/curriculum";
import {getLevelCompletion} from "@/lib/progress-selectors";

/**
 * شجرة اللغة المتنامية — تنمو مع تقدمك:
 * كل مستوى = فرع يظهر عند تجاوز عتبته، وكل وحدة مكتملة = ورقة.
 * (SVG داخلي بالكامل)
 */
export function LanguageTree({ completedUnits }: { completedUnits: string[] }) {
  const completions = LEVELS.map((l) => getLevelCompletion(completedUnits, l.code));

  // عدد الفروع النامية: المستويات التي تجاوزت 20%
  const grownBranches = completions.filter((c) => c.pct >= 20).length;
  const totalLeaves = completions.reduce((s, c) => s + c.completed, 0);
  const maxLeaves = completions.reduce((s, c) => s + c.total, 0);
  const growthPct = Math.min(100, Math.round((totalLeaves / Math.max(maxLeaves, 1)) * 100));

  return (
    <Card>
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Sprout className="h-5 w-5 text-emerald-600" aria-hidden="true" />
          شجرتك اللغوية
          <span className="font-de ms-auto rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-bold text-emerald-600">
            {growthPct}% نموّاً
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <div className="flex flex-col items-center gap-4">
          {/* الشجرة */}
          <svg viewBox="0 0 300 220" className="w-full max-w-sm" role="img" aria-label="شجرة اللغة تنمو مع تقدمك">
            {/* الجذع */}
            <rect x="140" y="120" width="20" height="90" rx="6" fill="#92400e" />
            {/* الجذور */}
            <path d="M150 210 C 120 200, 100 210, 80 205" stroke="#92400e" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M150 210 C 180 200, 200 210, 220 205" stroke="#92400e" strokeWidth="6" fill="none" strokeLinecap="round" />

            {/* الفروع حسب المستويات المنجزة */}
            {completions.map((c, i) => {
              const active = c.pct >= 20;
              const color = LEVELS[i].accent;
              const x = 110 + i * 26;
              const y = 120 - i * 18;
              return (
                <g key={LEVELS[i].code} opacity={active ? 1 : 0.25}>
                  {/* الفرع */}
                  <path
                    d={`M150 125 C ${140 + i * 12} ${95 - i * 8}, ${x} ${90 - i * 10}, ${x} ${60 - i * 8}`}
                    stroke={active ? color : "#a8a29e"}
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* تاج الفرع */}
                  <circle cx={x} cy={55 - i * 8} r="14" fill={active ? color : "#d6d3d1"} opacity="0.8" />
                  {/* أوراق الوحدات */}
                  {Array.from({ length: c.completed }).slice(0, 6).map((_, li) => (
                    <circle
                      key={li}
                      cx={x + (li % 3) * 10 - 10}
                      cy={45 - i * 8 + Math.floor(li / 3) * 10}
                      r="3.5"
                      fill="#22c55e"
                      stroke="#166534"
                      strokeWidth="0.5"
                    />
                  ))}
                  {/* تسمية المستوى */}
                  <text
                    x={x}
                    y={105 - i * 8}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="bold"
                    fill={active ? color : "#a8a29e"}
                  >
                    {LEVELS[i].code}
                  </text>
                </g>
              );
            })}

            {/* الأرض */}
            <ellipse cx="150" cy="212" rx="130" ry="8" fill="#65a30d" opacity="0.4" />
          </svg>

          <p className="text-center text-sm text-muted-foreground">
            كل مستوى تضيفه = فرع جديد 🌿 · كل وحدة تكملها = ورقة خضراء 🍃
            <br />
            {grownBranches === 0
              ? "أكمل وحدات من مستوى A1 لتبدأ شجرتك بالنمو!"
              : `شجرتك تملك ${grownBranches} فروعاً و${totalLeaves} ورقة — واصل!`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
