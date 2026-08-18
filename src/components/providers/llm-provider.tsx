"use client";

import * as React from "react";

import {callLLM, fetchLLMStatus} from "@/lib/llm/client";
import {getTodayUsage} from "@/lib/llm/usage";
import type { LLMCallInput, LLMResult, LLMStatus } from "@/types/llm";

interface LLMContextValue {
  /** هل المفاتيح مضبوطة على الخادم؟ (عند غيابها تُخفى الميزات الذكية) */
  isConfigured: boolean;
  providers: LLMStatus["providers"];
  dailyLimit: number;
  usageToday: number;
  remaining: number;
  refresh: () => Promise<void>;
  callLLM: (input: LLMCallInput) => Promise<LLMResult>;
}

const LLMContext = React.createContext<LLMContextValue | null>(null);

/**
 * مزوّد الذكاء الاصطناعي العام:
 * — يجلب الحالة (هل المفاتيح مضبوطة؟) والحد اليومي
 * — يتابع العدّاد المرئي
 * — يوفّر دالة callLLM موحّدة لجميع الميزات الذكية
 */
export function LLMProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = React.useState<LLMStatus | null>(null);
  const [usageToday, setUsageToday] = React.useState(0);

  const refresh = React.useCallback(async () => {
    const [s, usage] = await Promise.all([fetchLLMStatus(), getTodayUsage()]);
    if (s) setStatus(s);
    setUsageToday(usage.count);
  }, []);

  React.useEffect(() => {
    void refresh();
  }, [refresh]);

  const call = React.useCallback(async (input: LLMCallInput): Promise<LLMResult> => {
    const result = await callLLM(input);
    // تحديث العدّاد بعد كل استدعاء (نجاح أو وصول للحد)
    const usage = await getTodayUsage();
    setUsageToday(usage.count);
    return result;
  }, []);

  const value = React.useMemo<LLMContextValue>(() => {
    const configured = status?.configured ?? false;
    const limit = status?.dailyLimit ?? 50;
    return {
      isConfigured: configured,
      providers: status?.providers ?? [],
      dailyLimit: limit,
      usageToday,
      remaining: Math.max(0, limit - usageToday),
      refresh,
      callLLM: call,
    };
  }, [status, usageToday, refresh, call]);

  return <LLMContext.Provider value={value}>{children}</LLMContext.Provider>;
}

export function useLLM(): LLMContextValue {
  const ctx = React.useContext(LLMContext);
  if (!ctx) {
    throw new Error("useLLM يجب استخدامه داخل LLMProvider");
  }
  return ctx;
}
