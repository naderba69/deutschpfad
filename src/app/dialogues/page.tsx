import type { Metadata } from "next";

import {DialoguePlayer} from "@/components/dialogues/dialogue-player";
import {DailyLibrary} from "@/components/dialogues/daily-library";
import {DIALOGUES} from "@/data/supplemental/dialogues";
import {DAILY_DIALOGUES} from "@/data/dialogues";

export const metadata: Metadata = {
  title: "الحوارات والمحادثات — DeutschPfad",
  description:
    "60 حواراً يومياً متدرجاً A1→B2 (محادثة + نطق + ترجمة + أسئلة + وضع «دورك») + سيناريوهات محادثة متفرعة تختار فيها ردك — تغطية تتجاوز كتاب Menschen.",
};

export default function DialoguesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          💬 الحوارات والمحادثات
        </h1>
        <p className="mt-2 max-w-3xl text-balance text-muted-foreground">
          <b>{DAILY_DIALOGUES.length} حواراً يومياً</b> متدرجاً من A1 إلى B2 — كل حوار:
          محادثة كاملة بنطق صوتي، ترجمة، أسئلة فهم، ووضع «دورك» 🎭. بالإضافة إلى{" "}
          <b>{DIALOGUES.length} سيناريوهات متفرعة</b> تختار فيها ردك فيتغير مسار الحوار.
        </p>
      </div>

      {/* حوارات الحياة اليومية */}
      <div className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold">
          🗣️ حوارات الحياة اليومية
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
            {DAILY_DIALOGUES.length} حواراً · A1→B2
          </span>
        </h2>
        <DailyLibrary />
      </div>

      {/* السيناريوهات المتفرعة */}
      <div>
        <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold">
          🌿 سيناريوهات محادثة متفرعة
          <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold-strong">
            {DIALOGUES.length} سيناريوهات
          </span>
        </h2>
        <div className="space-y-6">
          {DIALOGUES.map((d) => (
            <DialoguePlayer key={d.id} dialogueId={d.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
