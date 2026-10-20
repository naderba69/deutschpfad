import {getRecentEvents} from "@/lib/analytics/events";
import {errorTypeLabel} from "@/lib/lesson/error-types";
import {getDb} from "@/lib/storage/db";
import {createCard} from "@/lib/srs/sm2";
import type { ErrorTypeCode } from "@/types/lesson";

/**
 * قاموس الأخطاء الشخصي — من أحداث التمارين المخزنة
 * (نقاط الضعف: أكثر أنواع الأخطاء تكراراً + أمثلة حديثة)
 */

export interface MistakeStat {
  errorType: ErrorTypeCode;
  label: string;
  count: number;
  /** آخر أمثلة على هذا الخطأ */
  examples: { questionDe?: string; explanation: string; ts: number }[];
}

/** إحصاءات الأخطاء: تكرار كل نوع + أحدث 3 أمثلة لكل نوع */
export async function getMistakeStats(): Promise<MistakeStat[]> {
  const events = await getRecentEvents(800);
  const wrong = events.filter((e) => e.type === "exercise-result" && !e.correct && e.errorType);

  const byType = new Map<ErrorTypeCode, MistakeStat>();
  for (const e of wrong) {
    if (e.type !== "exercise-result" || !e.errorType) continue;
    const stat = byType.get(e.errorType) ?? {
      errorType: e.errorType,
      label: errorTypeLabel(e.errorType),
      count: 0,
      examples: [],
    };
    stat.count++;
    if (stat.examples.length < 3) {
      stat.examples.push({
        questionDe: e.exerciseId ? `(تمرين ${e.exerciseId})` : undefined,
        explanation: "خطأ مصنف في تمرين — راجعه في الدرس",
        ts: e.ts,
      });
    }
    byType.set(e.errorType, stat);
  }

  return [...byType.values()].sort((a, b) => b.count - a.count);
}

/** إضافة خطأ كبطاقة SM-2 للتدرب عليه */
export async function addMistakeAsCard(mistake: MistakeStat): Promise<void> {
  const db = await getDb();
  const id = `mistake-${mistake.errorType}-${Date.now()}`;
  await db.put(
    "cards",
    createCard({
      id,
      de: `⚠️ خطأ متكرر: ${mistake.label}`,
      ar: `تذكر: هذا النوع من الأخطاء (${mistake.label}) تكرر ${mistake.count} مرة. راجعه حتى لا يقع مرة أخرى!`,
      example: "→ تصحيح هذا الخطأ يحسّن دقتك مباشرة",
      level: "A1",
      source: "manual",
    }),
  );
}
