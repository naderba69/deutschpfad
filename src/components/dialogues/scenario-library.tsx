"use client";

import * as React from "react";
import {ArrowRight, MessagesSquare} from "lucide-react";

import {DialoguePlayer} from "@/components/dialogues/dialogue-player";
import {Button} from "@/components/ui/button";
import {DIALOGUES} from "@/data/supplemental/dialogues";

/**
 * مكتبة السيناريوهات المتفرعة: بطاقة مختصرة لكل سيناريو، ويُفتح سيناريو واحد في كل مرة.
 *
 * سابقاً كانت كل السيناريوهات مفتوحة معاً بطاقات كاملة، فتطول الصفحة كثيراً قبل أن يصل
 * المتعلم إلى مكتبة الحوارات اليومية. الآن يتبع النمط نفسه: قائمة مختصرة ثم فتح عند الطلب.
 */
export function ScenarioLibrary() {
  const [openId, setOpenId] = React.useState<string | null>(null);

  if (openId) {
    return (
      <div className="space-y-4">
        <Button variant="outline" size="sm" onClick={() => setOpenId(null)} className="gap-1.5">
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
          رجوع إلى السيناريوهات
        </Button>
        <DialoguePlayer dialogueId={openId} />
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      {DIALOGUES.map((d) => (
        <li key={d.id}>
          <button
            type="button"
            onClick={() => setOpenId(d.id)}
            className="group h-full w-full rounded-2xl border bg-card p-4 text-start transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-soft"
          >
            <div className="flex items-center justify-between">
              <span className="font-de rounded-full bg-gold/15 px-2 py-0.5 text-[11px] font-extrabold text-gold-strong">
                {d.level}
              </span>
              <MessagesSquare className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </div>
            <h3 className="mt-2 text-sm font-extrabold group-hover:text-primary">{d.title}</h3>
            <p className="font-de mt-0.5 text-xs font-bold text-muted-foreground" dir="ltr" lang="de">
              {d.titleDe}
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{d.situation}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
