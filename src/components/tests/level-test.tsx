"use client";

import * as React from "react";

import { TestRunner } from "@/components/tests/test-runner";
import { TEST_BANK } from "@/data/tests/question-banks";
import { shuffleTestQuestions } from "@/lib/tests/shuffle-questions";
import { LEVEL_TEST_CONFIGS } from "@/lib/tests/test-engine";
import type { TestLevel, TestResult } from "@/types/test";

interface LevelTestProps {
  level: TestLevel;
  /** يُستدعى بعد اكتمال الاختبار (يستخدمه امتحان الختم) */
  onComplete?: (result: TestResult) => void;
  /** وضع سريع: 20 سؤالاً متوازناً بدل المجموعة الكاملة (27) */
  quick?: boolean;
}

/**
 * اختبار نهاية المستوى — تدريب تجريبي مستوحى من بنية Goethe (ليس امتحاناً رسمياً):
 * Lesen + Hören + Grammatik/Wortschatz + Schreiben بتوقيت حقيقي
 * quick = نسخة مختصرة (20 سؤالاً) لامتحان الختم السريع.
 */
export function LevelTest({ level, onComplete, quick = false }: LevelTestProps) {
  const config = LEVEL_TEST_CONFIGS[level];
  /* خلط الخيارات مرة واحدة لكل جلسة (useMemo): التصحيح يُخزَّن **بالفهرس**،
     فخلطٌ في كل تصيير يغيّر معنى إجابة سابقة. وسبب الخلط أساساً: بنك الأسئلة
     كان إجاباته كلها في الموضع الأول (قياس 2026-10-16: 171/171) — ومع موازنة
     البيانات صار الخلط طبقة ثانية لا طبقة وحيدة. */
  const questions = React.useMemo(() => {
    let list = shuffleTestQuestions(TEST_BANK.filter((q) => q.level === level));
    // الوضع التكيفي: يبدأ بأسهل ثم يصعد، ويتكيف مع الأداء
    // (يُستخدم في محاكاة Goethe — ترتيب حسب نوع المهارة وطول النص)
    if (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("adaptive") === "1") {
      const bySkill = (skill: string) => list.filter((q) => q.skill === skill);
      list = [...bySkill("wortschatz"), ...bySkill("grammatik"), ...bySkill("lesen"), ...bySkill("hören"), ...bySkill("schreiben")];
    }
    if (quick) {
      // اختيار متوازن: 6 قواعد + 6 مفردات + 3 قراءة + 3 استماع + 2 كتابة = 20
      const take = (skill: string, n: number) => list.filter((q) => q.skill === skill).slice(0, n);
      list = [
        ...take("grammatik", 6),
        ...take("wortschatz", 6),
        ...take("lesen", 3),
        ...take("hören", 3),
        ...take("schreiben", 2),
      ];
    }
    return list;
  }, [level, quick]);

  return (
    <TestRunner
      kind="level"
      level={level}
      sections={config.sections.map((s) => ({ skill: s.skill, title: s.title, titleDe: s.titleDe, minutes: quick ? Math.max(8, Math.round(s.minutes * 0.6)) : s.minutes }))}
      questions={questions}
      title={quick ? `اختبار ختم سريع ${level} — تدريب تجريبي` : `اختبار مستوى ${level} — تدريب تجريبي مستوحى من Goethe`}
      onComplete={onComplete}
    />
  );
}
