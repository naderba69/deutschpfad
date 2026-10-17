"use client";

/**
 * ═══════════════════════════════════════════════════════════
 *  هيكل تدفق الدرس (الشريط الجانبي + التقدم + اللعب + التنقل)
 *  — مُستخرَج من lesson-flow.tsx (المرحلة 4).
 *  مكوّنات عرض صِرفة: تستقبل القيم والدوال جاهزةً من المكوّن الأب.
 *  النقل حرفيّ — لا تغيير في أي DOM أو نص.
 * ═══════════════════════════════════════════════════════════
 */
import {ArrowLeft, CheckCircle2, Trophy} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";

/** قائمة مراحل الدرس الجانبية (شاشات كبيرة) */
export function LessonSidebar({
  stageNames,
  stage,
  onSelect,
}: {
  stageNames: string[];
  stage: number;
  onSelect: (index: number) => void;
}) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border bg-card p-3">
        <p className="mb-2 px-2 text-[11px] font-extrabold uppercase tracking-wide text-muted-foreground">
          مراحل الدرس
        </p>
        <ol className="space-y-1">
          {stageNames.map((name, i) => {
            const isCurrent = i === stage;
            const isDone = i < stage;
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => onSelect(i)}
                  disabled={i > stage}
                  className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-start text-xs font-semibold transition-colors ${
                    isCurrent
                      ? "bg-primary/10 text-primary"
                      : isDone
                        ? "text-success hover:bg-muted/50"
                        : "cursor-not-allowed text-muted-foreground/60"
                  }`}
                >
                  <span
                    className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-de text-[11px] font-extrabold ${
                      isCurrent
                        ? "bg-primary text-primary-foreground"
                        : isDone
                          ? "bg-success/15 text-success"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="h-3 w-3" aria-hidden="true" /> : i + 1}
                  </span>
                  <span className="truncate">{name}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </aside>
  );
}

/** شريط التقدم العلوي اللاصق */
export function LessonProgressBar({
  progressPct,
  stage,
  totalStages,
  done,
}: {
  progressPct: number;
  stage: number;
  totalStages: number;
  done: boolean;
}) {
  return (
    <div className="sticky top-16 z-30 mb-5 rounded-xl border bg-background/90 px-4 py-2.5 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <Progress value={progressPct} className="progress-gradient h-2.5" aria-label={`تقدم الدرس ${progressPct}%`} />
        <span className="font-de shrink-0 text-sm font-extrabold text-primary">{progressPct}%</span>
        <span className="shrink-0 text-[11px] font-bold text-muted-foreground">
          {stage + 1}/{totalStages}
        </span>
      </div>
      <p className="mt-1 text-center text-[11px] font-semibold text-muted-foreground">
        {done ? "🎉 اكتمل الدرس" : "تفاعل مع كل خطوة — المحتوى يتكشف معك"}
      </p>
    </div>
  );
}

/** شريط اللعب: القلوب + النقاط + التحدي الزمني + مؤثر الإجابة + زر إعادة التعيين */
export function LessonGameBar({
  hearts,
  xpEarned,
  timeBonus,
  secondsLeft,
  feedbackFx,
  onReset,
}: {
  hearts: number;
  xpEarned: number;
  timeBonus: boolean;
  secondsLeft: number;
  feedbackFx: "correct" | "wrong" | null;
  onReset: () => void;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border bg-muted/30 px-4 py-2">
      <div className="flex items-center gap-1.5">
        {/* القلوب */}
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={`text-base transition-all ${i < hearts ? "" : "opacity-25 grayscale"}`} aria-hidden="true">❤️</span>
        ))}
        {hearts === 0 && (
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-destructive">نفدت القلوب!</span>
            <a
              href="/flashcards?refill=1"
              className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary transition-colors hover:bg-primary/20"
              title="راجع 3 بطاقات لاستعادة قلب واحد"
            >
              💗 راجع 3 بطاقات لشحن قلب
            </a>
          </span>
        )}
      </div>
      <div className="flex items-center gap-3">
        {/* XP */}
        <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-extrabold text-gold-strong">
          ⚡ {xpEarned} XP
        </span>
        {/* تحدي الزمن — مؤقت مرئي دائري */}
        {timeBonus && (
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary"
            role="timer"
            aria-live="polite"
            aria-label={`متبقي ${secondsLeft} ثانية`}
          >
            <span
              className="inline-block h-3.5 w-3.5 rounded-full border-2 border-primary/30"
              style={{
                background: `conic-gradient(var(--primary) ${(secondsLeft / 15) * 360}deg, transparent 0deg)`,
                borderRadius: "9999px",
              }}
              aria-hidden="true"
            />
            {secondsLeft}s · +5 XP
          </span>
        )}
        {/* مؤثر الإجابة */}
        {feedbackFx === "correct" && (
          <span className="animate-bounce text-base" aria-hidden="true">✅</span>
        )}
        {feedbackFx === "wrong" && (
          <span className="animate-bounce text-base" aria-hidden="true">❌</span>
        )}
        {/* إعادة تعيين تقدم الدرس — حد يومي (3) + تأكيد لمنع خداع القلوب */}
        <button
          type="button"
          onClick={onReset}
          className="rounded-full border border-muted px-2 py-0.5 text-[11px] font-bold text-muted-foreground hover:border-destructive/50 hover:text-destructive"
          title="إعادة تعيين تقدم هذا الدرس (بحد أقصى 3 مرات يومياً)"
        >
          ↺ إعادة
        </button>
      </div>
    </div>
  );
}

/** مؤشرات المراحل الأفقية (جوال) */
export function LessonMobileChips({stageNames, stage}: {stageNames: string[]; stage: number}) {
  return (
    <div className="mb-4 flex items-center gap-1.5 overflow-x-auto pb-1 lg:hidden">
      {stageNames.map((name, i) => {
        const isCurrent = i === stage;
        const isDone = i < stage;
        return (
          <span
            key={i}
            className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${
              isCurrent
                ? "bg-primary text-primary-foreground"
                : isDone
                  ? "bg-success/15 text-success"
                  : "bg-muted text-muted-foreground"
            }`}
          >
            {isDone ? <CheckCircle2 className="h-3 w-3" aria-hidden="true" /> : i + 1}
            {name}
          </span>
        );
      })}
    </div>
  );
}

/** شريط التنقل السفلي الثابت */
export function LessonNavBar({
  stage,
  totalStages,
  stageNames,
  next,
  onPrev,
}: {
  stage: number;
  totalStages: number;
  stageNames: string[];
  next: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="sticky bottom-0 z-30 mt-6 -mx-4 border-t bg-background/95 px-4 py-3 backdrop-blur-md sm:mx-0 sm:rounded-t-2xl sm:border">
      <div className="flex items-center justify-between gap-3">
        <Button variant="outline" onClick={onPrev} disabled={stage === 0} className="gap-1.5">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          السابق
        </Button>
        {stage < totalStages - 1 ? (
          <Button
            size="lg"
            className="btn-glow gap-2 px-8 text-base"
            onClick={next}
            // لا تعطيل قسري — التمارين اختيارية، المستخدم لا يُحبس أبداً
            disabled={false}
          >
            متابعة
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </Button>
        ) : (
          <Button size="lg" variant="gold" className="btn-glow gap-2 px-8 text-base" onClick={next}>
            <Trophy className="h-5 w-5" aria-hidden="true" />
            أكمل الدرس
          </Button>
        )}
      </div>
      {stage < totalStages - 1 && (
        <p className="mt-2 text-center text-[11px] font-semibold text-muted-foreground">
          {stageNames[stage + 1] ?? ""} ← التالي
        </p>
      )}
    </div>
  );
}
