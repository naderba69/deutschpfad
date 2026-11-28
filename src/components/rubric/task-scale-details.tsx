import * as React from "react";

import {SCALE_BANDS, type ScaleTaskType, type TaskScale} from "@/lib/rubric/task-scales";

const TASK_LABEL: Record<ScaleTaskType, string> = {
  Forumsbeitrag: "Forumsbeitrag · منشور منتدى",
  "formelle E-Mail": "formelle E-Mail · رسالة رسمية",
  Meinung: "Meinung · إبداء رأي",
  Übersetzung: "Übersetzung · ترجمة",
  Sprechen: "Sprechen · إنتاج شفهي",
};

/**
 * سلّم التدريب الذاتي لمهمة واحدة: مطوي افتراضياً ليبقى المتعلم على نص المهمة.
 * كل بند وصف للمحاولة لا درجة، ويُعلن ذلك في أول السلّم.
 */
export function TaskScaleDetails({scale, id}: {scale: TaskScale; id: string}) {
  return (
    <details id={id} className="group rounded-xl border bg-muted/20 p-3 text-sm">
      <summary className="cursor-pointer font-bold">
        سلّم التدريب الذاتي ·{" "}
        <span className="font-de" dir="ltr">{TASK_LABEL[scale.taskType]}</span>
        <span className="ms-2 text-xs font-normal text-muted-foreground">({scale.level} · غير معتمد)</span>
      </summary>

      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{scale.disclaimer}</p>

      <ul className="mt-3 space-y-4">
        {scale.rows.map((row) => (
          <li key={row.id} className="space-y-1.5 border-t pt-3 first:border-t-0 first:pt-0">
            <p className="font-bold">
              <span className="font-de" dir="ltr">{row.de}</span> — {row.ar}
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold">توقع المستوى {scale.level}:</span> {row.levelExpectation}
            </p>
            <p className="text-xs">
              <span className="font-semibold">سؤال هذه المهمة:</span> {row.taskCheck}
            </p>
            <dl className="grid gap-1 text-xs sm:grid-cols-[auto,1fr] sm:gap-x-3">
              {SCALE_BANDS.map((band) => (
                <React.Fragment key={band.value}>
                  <dt className="font-semibold">{band.label}</dt>
                  <dd className="text-muted-foreground">{row.bands[band.value]}</dd>
                </React.Fragment>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </details>
  );
}
