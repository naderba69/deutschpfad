"use client";

import * as React from "react";
import {CheckCircle2, ChevronLeft, Headphones, Mic, Play, Sparkles, User, XCircle} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {SpeakButton} from "@/components/shared/speak-button";
import {recordEvent} from "@/lib/analytics/events";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {cn} from "@/lib/utils";
import type { DailyDialogue } from "@/data/dialogues";

/**
 * ═══════════════════════════════════════════════════════════
 *  مشغّل الحوار اليومي — يتفوق على كتاب Menschen:
 *  1) قراءة الحوار جولة بجولة: اضغط «الجولة التالية»
 *     — كل جولة بنطق ألماني + ترجمة عند الطلب
 *  2) وضع «دورك» 🎭: أَخفِ دور أحد المتحدثين وحاول
 *     التحدث/الكتابة قبل كشف الإجابة
 *  3) أسئلة فهم في النهاية (3) بشروح
 *  4) مفردات الحوار مظللة
 * ═══════════════════════════════════════════════════════════
 */
export function DailyDialoguePlayer({ dialogue, onBack }: { dialogue: DailyDialogue; onBack: () => void }) {
  const [step, setStep] = React.useState(0); // 0 = intro, 1..N = الجولات, N+1 = الأسئلة
  const [showAr, setShowAr] = React.useState(false);
  const [roleMode, setRoleMode] = React.useState(false); // وضع «دورك»
  const [hiddenRole, setHiddenRole] = React.useState<"a" | "b">("b");
  const [revealed, setRevealed] = React.useState<Record<number, boolean>>({});
  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [correctCount, setCorrectCount] = React.useState(0);

  const total = dialogue.turns.length;
  const introDone = step > 0;
  const inQuestions = step > total;
  const progress = inQuestions ? 100 : (step / (total + 1)) * 100;

  const currentTurn = introDone && !inQuestions ? dialogue.turns[step - 1] : null;

  const next = () => {
    if (inQuestions) {
      // إنهاء
      void recordEvent({ type: "skill-result", skill: "الاستماع", correct: true });
      onBack();
      return;
    }
    setStep((s) => s + 1);
    setShowAr(false);
    setRevealed({});
  };

  const answer = (qIdx: number, opt: { text: string; correct: boolean }) => {
    if (answers[qIdx]) return;
    setAnswers((a) => ({ ...a, [qIdx]: opt.text }));
    // تسجيل مهارة الاستماع في كفايات CEFR
    void recordEvent({ type: "skill-result", skill: "الاستماع", correct: opt.correct });
    if (opt.correct) {
      setCorrectCount((c) => c + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  // شاشة الأسئلة
  if (inQuestions) {
    const allAnswered = dialogue.questions.every((_, i) => answers[i]);
    return (
      <div className="mx-auto max-w-xl space-y-4">
        <div className="flex items-center justify-between gap-2">
          <button type="button" onClick={onBack} className="rounded-full border px-2.5 py-1 text-[11px] font-bold text-muted-foreground hover:text-primary">
            خروج
          </button>
          <p className="truncate text-xs font-extrabold text-primary">{dialogue.emoji} {dialogue.title}</p>
          <span className="font-de shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-extrabold text-primary">{dialogue.level}</span>
        </div>

        <div className="rounded-2xl border bg-card p-5">
          <p className="text-sm font-extrabold">📋 أسئلة الفهم — ما فهمت من الحوار؟</p>
          <div className="mt-3 space-y-3">
            {dialogue.questions.map((q, qIdx) => {
              const answered = answers[qIdx];
              return (
                <div key={qIdx} className="rounded-xl border border-primary/20 bg-primary/5 p-3">
                  <p className="font-de text-sm font-bold" dir="ltr" lang="de">{q.de}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{q.ar}</p>
                  <div className="mt-2 grid gap-1.5">
                    {q.options.map((opt) => {
                      const isPicked = answers[qIdx] === opt.text;
                      return (
                        <button
                          key={opt.text}
                          type="button"
                          disabled={!!answered}
                          onClick={() => answer(qIdx, opt)}
                          className={cn(
                            "rounded-lg border px-2.5 py-1.5 text-start text-xs font-bold transition-colors",
                            !answered && "border-muted bg-background hover:border-primary/50",
                            answered && opt.correct && "border-success bg-success/10 text-success",
                            answered && isPicked && !opt.correct && "border-destructive bg-destructive/10 text-destructive",
                          )}
                          dir="ltr"
                        >
                          {opt.text}
                        </button>
                      );
                    })}
                  </div>
                  {answered && (
                    <p className={cn("mt-1.5 text-[11px] font-bold", answers[qIdx] === q.options.find((o) => o.correct)?.text ? "text-success" : "text-destructive")}>
                      {q.options.find((o) => o.text === answers[qIdx])?.explanation ?? ""}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* المفردات */}
        <div className="rounded-2xl border bg-card p-4">
          <p className="text-xs font-extrabold text-primary">💎 مفردات الحوار</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {dialogue.keyVocab.map((v) => (
              <span key={v.de} className="font-de rounded-full bg-muted px-2.5 py-1 text-[11px] font-bold" dir="ltr">
                {v.de} <span className="text-muted-foreground">= {v.ar}</span>
              </span>
            ))}
          </div>
        </div>

        {allAnswered && (
          <div className="rounded-2xl border border-success/40 bg-success/5 p-4 text-center">
            <p className="text-lg font-extrabold text-success">
              {correctCount}/{dialogue.questions.length} إجابات صحيحة
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {correctCount === dialogue.questions.length ? "فهمت الحوار بالكامل — ممتاز! 🎉" : "راجع الجولات التي أخطأت فيها ثم أعد المحاولة."}
            </p>
            <Button onClick={onBack} className="mt-3 gap-1.5">
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              العودة للمكتبة
            </Button>
          </div>
        )}
      </div>
    );
  }

  // شاشة المقدمة
  if (!introDone) {
    return (
      <div className="mx-auto max-w-xl space-y-4">
        <div className="flex items-center justify-between gap-2">
          <button type="button" onClick={onBack} className="rounded-full border px-2.5 py-1 text-[11px] font-bold text-muted-foreground hover:text-primary">
            خروج
          </button>
          <span className="font-de shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-extrabold text-primary">{dialogue.level}</span>
        </div>
        <div className="rounded-2xl border bg-card p-6 text-center">
          <span className="text-5xl" aria-hidden="true">{dialogue.emoji}</span>
          <h2 className="mt-3 text-xl font-extrabold">{dialogue.title}</h2>
          <p className="font-de mt-1 text-sm text-muted-foreground" dir="ltr">{dialogue.titleDe}</p>
          <p className="mt-3 rounded-xl bg-muted/30 px-4 py-2.5 text-sm">{dialogue.situation}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            {total} جولة حوار · نطق صوتي · ترجمة · أسئلة فهم · وضع «دورك» 🎭
          </p>
          <Button onClick={next} className="btn-glow mt-5 gap-2">
            <Play className="h-4 w-4" aria-hidden="true" />
            ابدأ الحوار
          </Button>
        </div>
      </div>
    );
  }

  // جولات الحوار
  const turn = currentTurn!;
  const isMyTurn = roleMode && turn.role === hiddenRole;
  const isRevealed = revealed[step - 1];

  return (
    <div className="mx-auto max-w-xl space-y-4">
      {/* الترويسة */}
      <div className="flex items-center justify-between gap-2">
        <button type="button" onClick={onBack} className="rounded-full border px-2.5 py-1 text-[11px] font-bold text-muted-foreground hover:text-primary">
          خروج
        </button>
        <p className="truncate text-xs font-extrabold text-primary">{dialogue.emoji} {dialogue.title}</p>
        <span className="font-de shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-extrabold text-primary">{dialogue.level}</span>
      </div>

      {/* شريط التقدم */}
      <Progress value={progress} className="h-2" aria-label="التقدم في الحوار" />

      {/* تبديل وضع «دورك» */}
      <div className="flex items-center justify-between gap-2 rounded-xl border border-gold/30 bg-gold/5 px-3 py-2">
        <p className="flex items-center gap-1.5 text-[11px] font-bold text-gold-strong">
          <Mic className="h-3.5 w-3.5" aria-hidden="true" />
          وضع «دورك»: حاول التحدث قبل كشف الإجابة
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setHiddenRole("a")}
            className={cn("rounded-full px-2 py-0.5 text-[11px] font-extrabold", hiddenRole === "a" && roleMode ? "bg-gold text-gold-foreground" : "bg-muted text-muted-foreground")}
          >
            دور المتحدث أ
          </button>
          <button
            type="button"
            onClick={() => setHiddenRole("b")}
            className={cn("rounded-full px-2 py-0.5 text-[11px] font-extrabold", hiddenRole === "b" && roleMode ? "bg-gold text-gold-foreground" : "bg-muted text-muted-foreground")}
          >
            دور المتحدث ب
          </button>
          <button
            type="button"
            onClick={() => setRoleMode((r) => !r)}
            className={cn("rounded-full px-2.5 py-0.5 text-[11px] font-extrabold", roleMode ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}
          >
            {roleMode ? "إيقاف" : "تفعيل"}
          </button>
        </div>
      </div>

      {/* الجولة الحالية */}
      <div className="rounded-2xl border bg-card p-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-de text-xs font-extrabold text-primary">
            {step}
          </span>
          <p className="text-xs font-bold text-muted-foreground">
            {turn.speaker} — جولة {step} من {total}
          </p>
          {isMyTurn && (
            <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[11px] font-extrabold text-gold-strong">🎭 دورك</span>
          )}
        </div>

        {isMyTurn && !isRevealed ? (
          <div className="mt-4 rounded-xl border border-dashed border-gold/50 bg-gold/5 p-4 text-center">
            <p className="text-sm font-bold text-gold-strong">حاول أن تتحدث/تكتب هذا الدور بنفسك…</p>
            <p className="mt-1 text-xs text-muted-foreground">استمع للمتحدث الآخر ثم ردّ — ثم كشف الإجابة للمقارنة.</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <SpeakButton text={turn.de} rate={0.75} size="sm" label="استمع (كشف)؟" />
              <Button size="sm" variant="outline" onClick={() => setRevealed((r) => ({ ...r, [step - 1]: true }))} className="gap-1.5">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                كشف الإجابة
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-2">
            <div className="flex items-start justify-between gap-3 rounded-xl border bg-muted/20 p-3.5">
              <p className="font-de flex-1 text-base font-bold leading-relaxed" dir="ltr" lang="de">
                {turn.de}
              </p>
              <SpeakButton text={turn.de} rate={0.8} size="sm" />
            </div>
            {showAr && (
              <p className="rounded-lg bg-primary/5 px-3 py-2 text-sm text-muted-foreground">{turn.ar}</p>
            )}
          </div>
        )}
      </div>

      {/* أزرار التحكم */}
      <div className="flex items-center justify-between gap-3">
        <Button variant="outline" size="sm" onClick={() => setShowAr((s) => !s)}>
          <Headphones className="h-4 w-4" aria-hidden="true" />
          {showAr ? "إخفاء الترجمة" : "أظهر الترجمة"}
        </Button>
        {isMyTurn && !isRevealed ? (
          <Button size="sm" variant="outline" onClick={() => setRevealed((r) => ({ ...r, [step - 1]: true }))} className="gap-1.5">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            كشف الإجابة
          </Button>
        ) : (
          <Button onClick={next} className="gap-2">
            {step < total ? "الجولة التالية" : "الأسئلة"}
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </Button>
        )}
      </div>
    </div>
  );
}
