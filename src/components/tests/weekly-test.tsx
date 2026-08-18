"use client";

import * as React from "react";
import {CalendarDays, Sparkles} from "lucide-react";

import {TestRunner} from "@/components/tests/test-runner";
import {TEST_BANK} from "@/data/tests/question-banks";
import {sample} from "@/lib/lesson/shuffle";

const SKILLS: ("grammatik" | "wortschatz" | "lesen" | "hören" | "schreiben")[] = [
  "grammatik",
  "wortschatz",
  "lesen",
  "hören",
  "schreiben",
];

/**
 * الاختبار الأسبوعي التجميعي — يخلط مستويات متعددة (A1→B2 حسب الأسبوع)
 * — اقتراح المرحلة 10: اختبار أسبوعي عشوائي متجدد —
 */
export function WeeklyTest() {
  // اختيار مستوى البداية حسب رقم الأسبوع (تجديد أسبوعي)
  const [seed, setSeed] = React.useState(0);

  React.useEffect(() => {
    // تجديد تلقائي أسبوعي
    const week = Math.floor(Date.now() / (7 * 24 * 3600 * 1000));
    setSeed(week);
  }, []);

  const levelPool: ("A1" | "A2" | "B1" | "B2")[] = ["A1", "A2", "B1", "B2"];
  const focusLevel = levelPool[seed % 4];

  // أسئلة: 60% من مستوى التركيز + 40% من بقية المستويات (خلط)
  const focusQs = TEST_BANK.filter((q) => q.level === focusLevel);
  const otherQs = TEST_BANK.filter((q) => q.level !== focusLevel);
  const questions = [
    ...sample(focusQs, Math.min(8, focusQs.length)),
    ...sample(otherQs, 6),
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4">
        <p className="inline-flex items-center gap-2 font-bold">
          <CalendarDays className="h-5 w-5 text-gold-strong-foreground" aria-hidden="true" />
          الاختبار الأسبوعي التجميعي
        </p>
        <p className="text-sm text-muted-foreground">
          أسبوع هذا الأسبوع: التركيز على{" "}
          <span className="font-de font-bold text-primary">{focusLevel}</span> + خلط بقية المستويات
        </p>
      </div>

      <TestRunner
        kind="level"
        level={focusLevel}
        sections={[
          { skill: "grammatik", title: "قواعد ومفردات", titleDe: "Grammatik", minutes: 15 },
          { skill: "lesen", title: "قراءة", titleDe: "Lesen", minutes: 15 },
          { skill: "hören", title: "استماع", titleDe: "Hören", minutes: 10 },
          { skill: "schreiben", title: "كتابة", titleDe: "Schreiben", minutes: 10 },
        ]}
        questions={questions}
        title="الاختبار الأسبوعي التجميعي"
      />

      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-gold-strong" aria-hidden="true" />
        يتجدد أسبوعياً تلقائياً: مستوى تركيز مختلف كل أسبوع + أسئلة عشوائية في كل جلسة.
      </p>
    </div>
  );
}
