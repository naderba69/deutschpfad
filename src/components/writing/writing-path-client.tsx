"use client";

import * as React from "react";
import {CheckCircle2, Lightbulb, Send, Sparkles} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {evaluateWriting} from "@/lib/writing/goethe-local";
import {recordMistake} from "@/lib/storage/error-notebook";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {addGems, GEM_REWARDS} from "@/lib/gamification/gems";
import {STAGE_ORDER, getTasksByStage, WRITING_TASKS, type WritingStage, type WritingTask} from "@/data/writing-path";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  مسار الكتابة المتدرج — مرحلة بمرحلة:
 *  · شريط المراحل الأربع (الجملة ← الفقرة ← الرسالة ← المقال)
 *  · مهمة مع نموذج + مفردات مساعدة
 *  · تقييم فوري بقواعد Goethe (معايير + نسبة + حكم)
 *  · كل مرحلة مكتملة تُخزَّن وتُفتح التالية
 * ═══════════════════════════════════════════════════════════
 */
export function WritingPathClient() {
  const [activeStage, setActiveStage] = React.useState<WritingStage>("sentence");
  const [taskIdx, setTaskIdx] = React.useState(0);
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState<Awaited<ReturnType<typeof evaluateWriting>> | null>(null);
  const [showExample, setShowExample] = React.useState(false);
  const [showHilfen, setShowHilfen] = React.useState(false);
  const [completedStages, setCompletedStages] = React.useState<Record<string, boolean>>({});

  const tasks = getTasksByStage(activeStage);
  const task = tasks[taskIdx] ?? WRITING_TASKS[0];
  const passed = (result?.pct ?? 0) >= 75;

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("dp:writing-path:v1");
      if (raw) setCompletedStages(JSON.parse(raw));
    } catch {
      /* تجاهل */
    }
  }, []);

  const saveStage = (stage: WritingStage) => {
    const next = { ...completedStages, [stage]: true };
    setCompletedStages(next);
    try {
      localStorage.setItem("dp:writing-path:v1", JSON.stringify(next));
    } catch {
      /* تجاهل */
    }
  };

  const submit = async () => {
    if (text.trim().length < 3) return;
    const r = await evaluateWriting(text, task.taskType, task.requires ?? []);
    setResult(r);
    // تسجيل مهارة الكتابة في كفايات CEFR
    void import("@/lib/analytics/events").then(({recordEvent}) =>
      recordEvent({ type: "skill-result", skill: "الكتابة", correct: r.pct >= 75 }),
    );
    if (r.pct >= 75) {
      playCorrect();
      addGems(GEM_REWARDS.LESSON_COMPLETED);
      saveStage(activeStage);
    } else {
      playWrong();
      if (r.words < task.minWords) {
        void recordMistake({
          id: `writing-${task.id}`,
          errorType: "spelling",
          explanation: `مهمة كتابة: «${task.title}» — النص قصير جداً (${r.words} كلمة، المطلوب ${task.minWords}+). وسّع بالأسباب والأمثلة.`,
        });
      }
    }
  };

  const nextTask = () => {
    setText("");
    setResult(null);
    setShowExample(false);
    setShowHilfen(false);
    if (taskIdx + 1 < tasks.length) {
      setTaskIdx((i) => i + 1);
    } else {
      const stageIdx = STAGE_ORDER.findIndex((s) => s.key === activeStage);
      if (stageIdx < STAGE_ORDER.length - 1) {
        setActiveStage(STAGE_ORDER[stageIdx + 1].key);
        setTaskIdx(0);
      }
    }
  };

  const goToStage = (stage: WritingStage, idx: number) => {
    if (idx > 0 && !completedStages[STAGE_ORDER[idx - 1].key]) return;
    setActiveStage(stage);
    setTaskIdx(0);
    setText("");
    setResult(null);
  };

  const stageComplete = completedStages[activeStage];
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-4">
      {/* شريط المراحل */}
      <div className="grid grid-cols-4 gap-2">
        {STAGE_ORDER.map((s, i) => {
          const done = completedStages[s.key];
          const locked = i > 0 && !completedStages[STAGE_ORDER[i - 1].key];
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => goToStage(s.key, i)}
              disabled={locked}
              className={cn(
                "rounded-xl border px-2 py-2.5 text-center transition-colors",
                activeStage === s.key
                  ? "border-primary bg-primary/10"
                  : done
                    ? "border-success/50 bg-success/5"
                    : locked
                      ? "cursor-not-allowed border-muted bg-muted/20 opacity-50"
                      : "border-muted bg-card hover:border-primary/40",
              )}
            >
              <span className="block text-base" aria-hidden="true">{done ? "✅" : s.emoji}</span>
              <span className="block text-[11px] font-extrabold">{s.title}</span>
              <span className="font-de block text-[11px] font-bold text-muted-foreground">{s.level}</span>
            </button>
          );
        })}
      </div>

      {/* المهمة الحالية */}
      <div className="rounded-2xl border bg-card p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="flex items-center gap-1.5 text-xs font-extrabold text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            المهمة {taskIdx + 1} من {tasks.length} — {task.title}
          </p>
          <span className="font-de text-[11px] font-bold text-muted-foreground">{task.level} · {task.taskType === "Übersetzung" ? "ترجمة من العربية — الألمانية" : `حد أدنى ${task.minWords} كلمة`}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed">{task.promptAr}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          <Button size="sm" variant="outline" className="gap-1.5" onClick={() => setShowExample((e) => !e)}>
            <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
            {showExample ? "إخفاء النموذج" : "أظهر نموذجاً"}
          </Button>
          <Button size="sm" variant="ghost" className="gap-1.5" onClick={() => setShowHilfen((h) => !h)}>
            {showHilfen ? "إخفاء المفردات" : "مفردات مساعدة"}
          </Button>
        </div>
        {showExample && (
          <p className="font-de mt-2 rounded-lg bg-muted/30 px-3 py-2 text-xs leading-relaxed" dir="ltr">
            {task.exampleDe}
          </p>
        )}
        {showHilfen && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {task.hilfen.map((h) => (
              <span key={h} className="font-de rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary" dir="ltr">
                {h}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* منطقة الكتابة */}
      <div className="rounded-2xl border bg-card p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-extrabold text-muted-foreground">اكتب بالألمانية:</p>
          <span className={cn("font-de text-[11px] font-extrabold", words >= task.minWords ? "text-success" : "text-muted-foreground")}>
            {words} كلمة {words < task.minWords && `(${task.minWords - words} إضافية)`}
          </span>
        </div>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setResult(null);
          }}
          dir="ltr"
          lang="de"
          placeholder="Schreiben Sie hier auf Deutsch…"
          className="font-de mt-2 min-h-40 w-full rounded-xl border bg-muted/20 p-3 text-sm outline-none ring-primary/40 focus:ring-2"
        />
        <div className="mt-2 flex items-center justify-between">
          <div className="flex-1" />
          <Button onClick={submit} className="gap-2">
            <Send className="h-4 w-4" aria-hidden="true" />
            قيّم كتابتي
          </Button>
        </div>
      </div>

      {/* التقييم */}
      {result && (
        <div
          className={cn(
            "rounded-2xl border p-4",
            passed ? "border-success/40 bg-success/5" : "border-gold/40 bg-gold/5",
          )}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-de text-3xl font-extrabold text-foreground">{result.pct}%</span>
            <div>
              <p className="text-sm font-extrabold">
                {result.verdict}
              </p>
              <p className="text-xs text-muted-foreground">{result.recommendation}</p>
            </div>
          </div>

          {/* المعايير */}
          <div className="mt-3 space-y-1.5">
            {result.scores.map((c) => (
              <div key={c.name} className="flex items-center gap-2">
                <span className="w-40 shrink-0 truncate text-[11px] font-bold text-muted-foreground">{c.name}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn("h-full rounded-full", c.score >= 4 ? "bg-success" : c.score >= 3 ? "bg-gold" : "bg-destructive")}
                    style={{ width: `${(c.score / 5) * 100}%` }}
                  />
                </div>
                <span className="font-de w-4 text-end text-[11px] font-extrabold">{c.score}</span>
              </div>
            ))}
          </div>

          {/* العناصر المطلوبة */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {task.requires.map((r) => (
              <span
                key={r}
                className={cn(
                  "font-de rounded-full px-2.5 py-0.5 text-[11px] font-bold",
                  text.toLowerCase().includes(r.toLowerCase()) ? "bg-success/15 text-success" : "bg-muted text-muted-foreground",
                )}
                dir="ltr"
              >
                {text.toLowerCase().includes(r.toLowerCase()) ? "✓" : "○"} {r}
              </span>
            ))}
          </div>

          {passed && (
            <Button onClick={nextTask} className="mt-3 w-full gap-2">
              {taskIdx + 1 < tasks.length ? "المهمة التالية" : "أكملت المرحلة — تقدم للتمهيد التالي"}
            </Button>
          )}
        </div>
      )}

      {stageComplete && !result && (
        <div className="flex items-center justify-between rounded-2xl border border-success/40 bg-success/5 p-3">
          <p className="flex items-center gap-1.5 text-sm font-extrabold text-success">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            أكملت مرحلة «{STAGE_ORDER.find((s) => s.key === activeStage)?.title}»
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const next = STAGE_ORDER[STAGE_ORDER.findIndex((s) => s.key === activeStage) + 1];
              if (next) goToStage(next.key, STAGE_ORDER.findIndex((s) => s.key === next.key));
            }}
          >
            تقدم للمرحلة التالية
          </Button>
        </div>
      )}

      <Progress
        value={STAGE_ORDER.filter((s) => completedStages[s.key]).length * 25}
        className="progress-gradient h-2"
        aria-label="التقدم في مسار الكتابة"
      />
    </div>
  );
}
