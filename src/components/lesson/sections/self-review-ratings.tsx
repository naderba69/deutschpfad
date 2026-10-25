"use client";

import * as React from "react";

import {summarizeSelfReview, type SelfReviewRating} from "@/lib/lesson/self-review";

const CHOICES: {value: SelfReviewRating; label: string}[] = [
  {value: "yes", label: "نعم"},
  {value: "partly", label: "جزئياً"},
  {value: "not-yet", label: "ليس بعد"},
];

export function SelfReviewRatings({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: string[];
}) {
  const [ratings, setRatings] = React.useState<(SelfReviewRating | undefined)[]>([]);
  const summary = summarizeSelfReview(ratings);

  return (
    <section className="mt-4 space-y-3" aria-labelledby={`${id}-title`}>
      <div>
        <h4 id={`${id}-title`} className="text-sm font-bold">{title}</h4>
        <p className="mt-1 text-xs text-muted-foreground">
          اختر ما تراه في محاولتك. هذه مراجعة ذاتية لا درجة ولا قياساً لمستوى CEFR.
        </p>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <fieldset key={`${id}-${index}`} className="rounded-lg border bg-muted/20 p-3">
            <legend className="max-w-full px-1 text-sm">{item}</legend>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-2">
              {CHOICES.map((choice) => {
                const inputId = `${id}-${index}-${choice.value}`;
                return (
                  <label key={choice.value} htmlFor={inputId} className="inline-flex cursor-pointer items-center gap-1.5 text-xs">
                    <input
                      id={inputId}
                      type="radio"
                      name={`${id}-${index}`}
                      value={choice.value}
                      checked={ratings[index] === choice.value}
                      onChange={() => setRatings((current) => {
                        const next = [...current];
                        next[index] = choice.value;
                        return next;
                      })}
                      className="accent-primary"
                    />
                    {choice.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>
      <div className="rounded-lg border border-primary/15 bg-primary/[0.03] p-3 text-xs" aria-live="polite">
        <p>
          راجعت {summary.answered} من {items.length} بنود: نعم {summary.yes}، جزئياً {summary.partly}، ليس بعد {summary.notYet}.
        </p>
        {summary.notYet > 0 ? (
          <p className="mt-1 text-muted-foreground">اختر بنداً واحداً من «ليس بعد» واجعله هدف محاولتك التالية.</p>
        ) : summary.partly > 0 ? (
          <p className="mt-1 text-muted-foreground">اختر بنداً واحداً من «جزئياً» وركّز عليه في محاولة أخرى.</p>
        ) : summary.answered === items.length ? (
          <p className="mt-1 text-muted-foreground">أشرت إلى تحقق كل البنود ذاتياً؛ هذا لا يثبت الإتقان ولا يحل محل ملاحظات المعلم.</p>
        ) : (
          <p className="mt-1 text-muted-foreground">يمكنك مراجعة البنود بعد الكتابة أو الاستماع إلى تسجيلك.</p>
        )}
      </div>
    </section>
  );
}
