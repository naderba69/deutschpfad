"use client";

import * as React from "react";
import {ArrowLeft, CheckCircle2, Hand, Headphones, Lightbulb, PenLine, RotateCcw, Sparkles, Trophy, Volume2} from "lucide-react";

import {ExerciseRenderer} from "@/components/lesson/exercises/exercise-renderer";
import {MultipleChoiceExercise} from "@/components/lesson/exercises/multiple-choice";
import {Celebration} from "@/components/gamification/celebration";
import {InterleavingReview} from "@/components/lesson/sections/interleaving-review";
import {TextDe} from "@/components/shared/text-de";
import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {LESSON_META} from "@/data/lessons/meta";
import {consumeRefills} from "@/lib/gamification/hearts";
import {buildInterleavedReview, PREVIOUS_LEVEL_LABEL} from "@/lib/lesson/review-generator";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {cn} from "@/lib/utils";
import type { Exercise, Lesson, TheoryBlock } from "@/types/lesson";

/** زر «استمع للقاعدة» — يقرأ الشرح بصوت (TTS) */
function SpeakRule({ text }: { text: string }) {
  const speak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ar-SA";
    u.rate = 0.95;
    window.speechSynthesis.speak(u);
  };
  return (
    <button
      type="button"
      onClick={speak}
      className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-[11px] font-bold text-primary transition-colors hover:bg-primary/10"
      aria-label="استمع للشرح"
      title="استمع للشرح بصوت"
    >
      <Volume2 className="h-3 w-3" aria-hidden="true" />
      استمع للشرح
    </button>
  );
}

/**
 * ═══════════════════════════════════════════════════════════
 *  تدفق الدرس التفاعلي — منهجية «الأستاذ الحي»:
 *  المحتوى يتكشف تدريجياً كلما تفاعلت — لا كتل مكدسة، لا خطوات قافزة.
 *  التسلسل: سؤال تحفيزي ← شرح قصير بمثال ← تدريب (يتكشف تمريناً تمريناً)
 *  ← استماع ← اختبار سريع ← إكمال. كل مرحلة تُفتح بإتمام سابقتها.
 * ═══════════════════════════════════════════════════════════
 */
export function LessonFlow({ lesson, onFinish }: { lesson: Lesson; onFinish?: () => void }) {
  /* ── بناء مراحل التدفق من بيانات الدرس ── */
  const learnBlocks: TheoryBlock[] = lesson.theory.slice(0, 4);
  const practiceCount = Math.min(4, lesson.practiceBank.length);
  // أسئلة الاختبار السريع: MCQ فقط (متوافقة مع MultipleChoiceExercise)
  const quizQuestions = lesson.miniTest.filter((q) => q.type === "multiple-choice");
  const quizCount = Math.min(3, quizQuestions.length);
  const hasListening = lesson.listening.items.length > 0;
  // أسئلة الفهم للاستماع (MCQ فقط) — اختيارية حتى لا يُحبس المتعلم
  const listeningQuestions = lesson.listening.questions.filter((q) => q.type === "multiple-choice");

  const [stage, setStage] = React.useState(0);
  const [learnIdx, setLearnIdx] = React.useState(0);
  const [practiceShown, setPracticeShown] = React.useState(1); // عدد التمارين المتكشفة
  const [practiceSolved, setPracticeSolved] = React.useState(0); // عدد التمارين المحلولة
  const practiceRequired = Math.min(2, practiceCount); // تمرينان فقط كافيان للمتابعة
  const [quizAnswered, setQuizAnswered] = React.useState(0);
  const [done, setDone] = React.useState(false);
  // المستوى الذهبي: أخطاء الجلسة تُعاد في النهاية + تلميحات متدرجة
  const [mistakes, setMistakes] = React.useState<Exercise[]>([]);
  const [reviewMode, setReviewMode] = React.useState(false);
  // المحور الأول (ألعاب تعليمية): قلوب + نقاط + تحدي زمني + مؤثرات
  const [hearts, setHearts] = React.useState(5);
  const [xpEarned, setXpEarned] = React.useState(0);
  const [streakPoints, setStreakPoints] = React.useState(0);
  const [feedbackFx, setFeedbackFx] = React.useState<"correct" | "wrong" | null>(null);
  const [timeBonus, setTimeBonus] = React.useState(false);
  const timeStartRef = React.useRef<number>(Date.now());
  // مؤقت مرئي للتحدي الزمني (ثوانٍ متبقية)
  const [secondsLeft, setSecondsLeft] = React.useState(15);

  // عدّاد تنازلي للتحدي الزمني — يعمل أثناء مرحلة التدريب
  React.useEffect(() => {
    if (!timeBonus) return;
    const tick = window.setInterval(() => {
      const left = Math.max(0, 15 - Math.floor((Date.now() - timeStartRef.current) / 1000));
      setSecondsLeft(left);
      if (left === 0) window.clearInterval(tick);
    }, 250);
    return () => window.clearInterval(tick);
  }, [timeBonus, stage]);

  // ═══ المراجعة التراكمية في بداية الدرس (مولّدة من الدروس السابقة) ═══
  const [reviewQuestions, setReviewQuestions] = React.useState<Exercise[]>([]);
  React.useEffect(() => {
    let cancelled = false;
    void buildInterleavedReview(lesson).then((q) => {
      if (!cancelled) setReviewQuestions(q);
    });
    return () => {
      cancelled = true;
    };
  }, [lesson]);

  // ═══ فهارس المراحل الدقيقة (لا تعتمد على totalStages-2 الهشة) ═══
  const hasMistakeStage = mistakes.length > 0;
  const PRACTICE_IDX = 1 + learnBlocks.length;
  const LISTEN_IDX = PRACTICE_IDX + (practiceCount > 0 ? 1 : 0);
  const PRODUCE_IDX = LISTEN_IDX + (hasListening ? 1 : 0);
  const DIALOGUE_IDX = PRODUCE_IDX + 1;
  const QUIZ_IDX = DIALOGUE_IDX + 1;
  const MISTAKE_IDX = QUIZ_IDX + (quizCount > 0 ? 1 : 0);
  const FINAL_IDX = MISTAKE_IDX + (hasMistakeStage ? 1 : 0);
  const totalStages = FINAL_IDX + 1; // +1 للإكمال

  // ═══ الحفظ الشامل: المرحلة + القلوب + النقاط + الأخطاء تُحفظ وتُستعاد ═══
  // (نحفظ معرفات الأخطاء أيضاً حتى تبقى فهارس المراحل مطابقة بعد إعادة التحميل —
  //  وإلا تتقلص totalStages وتظهر شاشة «الإكمال» كاذبةً في منتصف الدرس)
  React.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(`dp-flow:${lesson.id}`);
      if (raw) {
        const saved = JSON.parse(raw) as {
          stage?: number;
          hearts?: number;
          xp?: number;
          streak?: number;
          mistakeIds?: string[];
          done?: boolean;
        };
        // استعادة الأخطاء المحفوظة (لمطابقة فهارس المراحل)
        if (Array.isArray(saved.mistakeIds)) {
          const all = [...lesson.practiceBank, ...lesson.miniTest];
          const restored = saved.mistakeIds
            .map((id) => all.find((x) => x.id === id))
            .filter((x): x is Exercise => Boolean(x));
          if (restored.length > 0) setMistakes(restored);
        }
        // تحديد سقف المرحلة بعدد المراحل الفعلي (يمنع شاشة الإكمال الكاذبة)
        const maxStage = totalStages - 1;
        const restoredStage = Math.min(Math.max(saved.stage ?? 0, 0), maxStage);
        setStage(restoredStage);
        const restoredHearts = Math.min(5, Math.max(0, saved.hearts ?? 5));
        setHearts(restoredHearts);
        setXpEarned(Math.max(0, saved.xp ?? 0));
        setStreakPoints(Math.max(0, saved.streak ?? 0));
        // إن كان الدرس مُكملاً فعلاً، نعرض شاشة الإكمال
        if (saved.done) setDone(true);
        // إعادة شحن القلوب: كل 3 مراجعات = قلب واحد (من صفحة البطاقات)
        // — فقط إن كانت القلوب ناقصة (لا نهدر المراجعات والقلوب ممتلئة) —
        const refilled = consumeRefills(restoredHearts);
        if (refilled > 0) {
          setHearts((h) => Math.min(5, h + refilled));
        }
      } else {
        // لا توجد بيانات محفوظة: استهلك الشحن إن وُجد والقلوب ناقصة
        const refilled = consumeRefills(5);
        if (refilled > 0) setHearts((h) => Math.min(5, h + refilled));
      }
    } catch {
      /* تجاهل */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id, totalStages]);

  React.useEffect(() => {
    try {
      window.localStorage.setItem(
        `dp-flow:${lesson.id}`,
        JSON.stringify({
          stage,
          hearts,
          xp: xpEarned,
          streak: streakPoints,
          mistakeIds: mistakes.map((m) => m.id),
          done,
        }),
      );
    } catch {
      /* تجاهل */
    }
  }, [stage, hearts, xpEarned, streakPoints, mistakes, done, lesson.id]);

  // الاستماع لحدث «حل تمرين» — يتكشف التالي أو يفتح المرحلة التالية
  React.useEffect(() => {
    const handler = () => {
      if (stage === PRACTICE_IDX && practiceCount > 0) {
        // مرحلة التدريب: زد المحلول + أظهر التالي
        setPracticeSolved((n) => Math.min(practiceCount, n + 1));
        setPracticeShown((p) => {
          if (p < practiceCount) return p + 1;
          return p;
        });
      }
    };
    window.addEventListener("dp:exercise-solved", handler);
    // مؤثر صوتي عند حل تمرين
    const sfx = () => {
      playCorrect();
      setFeedbackFx("correct");
      window.setTimeout(() => setFeedbackFx(null), 600);
    };
    window.addEventListener("dp:exercise-solved", sfx);
    return () => {
      window.removeEventListener("dp:exercise-solved", handler);
      window.removeEventListener("dp:exercise-solved", sfx);
    };
  }, [stage, learnBlocks.length, practiceCount, PRACTICE_IDX]);

  // الاستماع لحدث «خطأ في تمرين» — يُسجَّل في قائمة أخطائي اليوم + خسارة قلب + نقاط
  React.useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent).detail?.exerciseId;
      if (!id) return;
      const found = [...lesson.practiceBank, ...lesson.miniTest].find((x) => x.id === id);
      if (found && !mistakes.some((m) => m.id === id)) {
        setMistakes((prev) => [...prev, found]);
      }
      // القلوب + النقاط + المؤثر (خطأ)
      setHearts((h) => Math.max(0, h - 1));
      setXpEarned((x) => x + 2);
      setFeedbackFx("wrong");
      playWrong();
      window.setTimeout(() => setFeedbackFx(null), 600);
    };
    window.addEventListener("dp:exercise-wrong", handler);
    return () => window.removeEventListener("dp:exercise-wrong", handler);
  }, [lesson, mistakes]);

  // الاستماع لحدث «أنجز الإنتاج» — يفتح المرحلة التالية
  React.useEffect(() => {
    const handler = () => {
      // مرحلة الإنتاج: عند التقييم، يُفتح التالي تلقائياً بعد قليل
      setStage((s) => Math.min(s + 1, totalStages - 1));
    };
    window.addEventListener("dp:production-done", handler);
    return () => window.removeEventListener("dp:production-done", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  // الاستماع لحدث «حل تمرين صحيح» — نقاط + تحدي زمني (نقاط إضافية)
  React.useEffect(() => {
    const handler = () => {
      const elapsed = (Date.now() - timeStartRef.current) / 1000;
      const bonus = timeBonus && elapsed < 15 ? 5 : 0;
      // اهتزاز خفيف عند الإجابة الصحيحة (الجوال)
      try { if (navigator.vibrate) navigator.vibrate(30); } catch {}
      setXpEarned((x) => x + 10 + bonus);
      if (bonus > 0) setStreakPoints((s) => s + 1);
      setFeedbackFx("correct");
      window.setTimeout(() => setFeedbackFx(null), 600);
      timeStartRef.current = Date.now();
    };
    window.addEventListener("dp:exercise-solved", handler);
    return () => window.removeEventListener("dp:exercise-solved", handler);
  }, [timeBonus]);

  const progressPct = Math.round((stage / Math.max(1, totalStages - 1)) * 100);

  const next = () => {
    if (stage < totalStages - 1) {
      setStage((s) => s + 1);
      setLearnIdx((s) => s + 1);
      setPracticeShown(1);
      setQuizAnswered(0);
    } else {
      setDone(true);
      // ═══ نجوم الإتقان: احسب النجوم عند إتمام الدرس ═══
      // ① أُنجز (1) + ② بلا أخطاء (1) + ③ التحدي الزمني (1)
      let stars = 1;
      if (mistakes.length === 0) stars += 1;
      if (timeBonus && streakPoints > 0) stars += 1;
      void import("@/lib/gamification/mastery").then(({setLessonStars}) =>
        setLessonStars(lesson.id, stars),
      );
      onFinish?.();
    }
    // عند التقدم: انزلق لأعلى المحتوى الجديد + انقل التركيز إليه (إتاحة للوحة المفاتيح)
    requestAnimationFrame(() => {
      const content = document.getElementById("lesson-flow-content");
      if (content) {
        content.scrollIntoView({ behavior: "smooth", block: "start" });
        // ننقل التركيز للعنوان/المحتوى الجديد إن كان المستخدم يعمل بلوحة المفاتيح
        const focusTarget = content.querySelector<HTMLElement>("[data-focus-heading]");
        (focusTarget ?? content).focus?.({ preventScroll: true });
      }
    });
  };

  /* ── المراحل ── */
  const renderStage = () => {
    let s = stage;

    // المرحلة 0: الافتتاح
    if (s === 0) {
      return (
        <div className="space-y-5 text-center">
          {/* المراجعة التراكمية من المستوى السابق (تظهر قبل البدء) */}
          {reviewQuestions.length > 0 && (
            <div className="text-start">
              <InterleavingReview
                review={reviewQuestions}
                levelLabel={PREVIOUS_LEVEL_LABEL[lesson.level] ?? "مستوى سابق"}
              />
            </div>
          )}
          <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl" aria-hidden="true">🎯</span>
          <div>
            <h2 className="text-2xl font-extrabold">
              <TextDe text={lesson.titleDe} />
            </h2>
            <p className="mt-1 text-muted-foreground">{lesson.titleAr}</p>
          </div>
          <div className="mx-auto max-w-md rounded-xl border border-primary/20 bg-primary/5 p-4 text-start">
            <p className="flex items-center gap-2 text-sm font-bold text-primary">
              <Hand className="h-4 w-4" aria-hidden="true" />
              قبل أن نبدأ — فكّر:
            </p>
            <p className="mt-2 text-sm leading-relaxed">{lesson.einfuehrung.motivatingQuestionAr}</p>
          </div>
          {lesson.lernziele.length > 0 && (
            <div className="mx-auto max-w-md rounded-xl border border-muted bg-muted/20 p-4 text-start">
              <p className="text-xs font-bold text-muted-foreground">بنهاية هذا الدرس ستكون قادراً على:</p>
              <ul className="mt-2 space-y-1">
                {lesson.lernziele.slice(0, 3).map((z) => (
                  <li key={z.id} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    {z.ar}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* تحدي زمني */}
          <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-xl border border-primary/25 bg-primary/5 p-3">
            <p className="text-start text-sm">
              <span className="font-bold">التحدي الزمني:</span> أجب خلال 15 ثانية لتحصل على +5 XP إضافية لكل سؤال.
            </p>
            <button
              type="button"
              onClick={() => setTimeBonus((v) => !v)}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                timeBonus ? "bg-primary text-primary-foreground" : "bg-background border border-primary/40 hover:bg-primary/10"
              }`}
            >
              {timeBonus ? "✓ مفعّل" : "فعّل"}
            </button>
          </div>
        </div>
      );
    }

    s -= 1;

    // مراحل التعلم (لكل كتلة نظرية)
    if (s < learnBlocks.length) {
      const block = learnBlocks[s];
      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <p className="flex items-center gap-2 text-xs font-bold text-primary">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              القاعدة {s + 1} من {learnBlocks.length}
            </p>
            <h3 className="mt-1 text-lg font-extrabold">{block.titleAr}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              <TextDe text={block.titleDe} />
            </p>
          </div>
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm leading-relaxed">{block.explanationAr}</p>
            <SpeakRule text={block.explanationAr} />
          </div>
          {block.examples && block.examples.length > 0 && (
            <div className="space-y-2">
              {block.examples.slice(0, 2).map((ex, i) => (
                <div key={i} className="flex items-center justify-between gap-3 rounded-xl border border-muted bg-muted/20 p-3">
                  <div>
                    <TextDe text={ex.de} />
                    <p className="mt-0.5 text-sm text-muted-foreground">{ex.ar}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    s -= learnBlocks.length;

    // مرحلة التدريب (تتكشف التمارين واحداً واحداً)
    if (practiceCount > 0 && s === 0) {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gold/15 text-gold-strong">
              <PenLine className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-extrabold">الآن دورك — درّب ما تعلمته</h3>
              <p className="text-xs text-muted-foreground">
                حُل التمارين واحداً تلو الآخر — كل تمرين محلول يكشف الذي يليه.
              </p>
            </div>
          </div>
          {lesson.practiceBank.slice(0, practiceShown).map((ex) => (
            <div key={ex.id}>
              <ExerciseRenderer exercise={ex} />
            </div>
          ))}
          {practiceShown >= practiceCount && (
            <p className="rounded-lg bg-success/10 px-3 py-2 text-sm font-bold text-success">
              🎉 أكملت كل التمارين — أنت جاهز للمتابعة!
            </p>
          )}
        </div>
      );
    }

    if (practiceCount > 0) s -= 1;

    // مرحلة الاستماع
    if (hasListening && s === 0) {
      const item = lesson.listening.items[0];
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Headphones className="h-4 w-4" aria-hidden="true" />
            </span>
            <h3 className="text-base font-extrabold">استمع ثم أجب</h3>
          </div>
          <div className="rounded-xl border border-muted bg-muted/20 p-4">
            <p className="text-xs font-bold text-primary">{item.title}</p>
            <div className="mt-3 space-y-2">
              {item.lines.map((line, i) => (
                <div key={i} className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-bold text-primary">{line.speaker}</p>
                    <TextDe text={line.de} />
                    <p className="text-xs text-muted-foreground">{line.ar}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* أسئلة الفهم إن وُجدت (اختياري) — حتى لا يُحبس المتعلم */}
          {listeningQuestions.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs font-bold text-muted-foreground">أسئلة الفهم (اختيارية):</p>
              {listeningQuestions.map((q) => (
                <MultipleChoiceExercise
                  key={q.id}
                  exercise={q}
                  onResult={(r) => {
                    // تسجيل مهارة الاستماع في كفايات CEFR
                    void import("@/lib/analytics/events").then(({recordEvent}) =>
                      recordEvent({ type: "skill-result", skill: "الاستماع", correct: r.isCorrect }),
                    );
                  }}
                />
              ))}
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            🔊 اضغط زر الصوت بجانب كل سطر لسماعه. استمع جيداً، ثم تابع.
          </p>
          <Button size="sm" onClick={next} className="gap-1.5">
            استمعت وفهمت — تابع
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      );
    }

    if (hasListening) s -= 1;

    // مرحلة الإنتاج اللغوي (بند 11-12): يكتب جملة أصلية ويقيّمها
    if (s === 0) {
      return (
        <ProductionStage lesson={lesson} />
      );
    }

    s -= 1;

    // مرحلة المحادثة المحاكاة (بند 14) — رد على جمل من الدرس
    if (s === 0) {
      return <DialogueSimStage lesson={lesson} />;
    }

    s -= 1;

    // مرحلة الاختبار السريع
    if (quizCount > 0 && s === 0) {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#dc2626]/10 text-[#dc2626]">
              <Trophy className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-extrabold">اختبار سريع — أثبت فهمك</h3>
              <p className="text-xs text-muted-foreground">أجب عن الأسئلة التالية لتثبيت ما تعلمته.</p>
            </div>
          </div>
          {quizQuestions.slice(0, quizCount).map((q, i) => (
            <div key={q.id}>
              <MultipleChoiceExercise
                exercise={q}
                onResult={() => setQuizAnswered((n) => Math.max(n, i + 1))}
              />
            </div>
          ))}
          {quizAnswered >= quizCount && (
            <p className="rounded-lg bg-success/10 px-3 py-2 text-sm font-bold text-success">
              🏆 أحسنت! أنهيت اختبار الدرس.
            </p>
          )}
        </div>
      );
    }

    // مرحلة أخطائي اليوم: إعادة التمارين الخاطئة لتثبيتها (المستوى الذهبي)
    if (mistakes.length > 0 && s === 0) {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-extrabold">أخطاؤك اليوم — أعد حلها لتثبيتها</h3>
              <p className="text-xs text-muted-foreground">
                أخطأت في {mistakes.length} {mistakes.length === 1 ? "سؤال" : "أسئلة"} — أعد حلها الآن لترسخ.
              </p>
            </div>
          </div>
          {mistakes.map((m) => (
            <div key={m.id}>
              <ExerciseRenderer
                exercise={m}
                onResult={(r) => {
                  if (r.isCorrect) {
                    setMistakes((prev) => prev.filter((x) => x.id !== m.id));
                  }
                }}
              />
            </div>
          ))}
          {mistakes.length === 0 && (
            <p className="rounded-lg bg-success/10 px-3 py-2 text-sm font-bold text-success">
              🎉 صحّحت كل أخطائك — تثبّتت!
            </p>
          )}
        </div>
      );
    }

    if (mistakes.length > 0) s -= 1;

    // المرحلة الأخيرة: الإكمال
    return (
      <div className="space-y-4">
        <Celebration
          title="أنهيت الدرس! 🎉"
          subtitle={lesson.summary}
          emoji="🎓"
          stats={[
            { label: "نقاط XP", value: `⚡${xpEarned}` },
            { label: "قلوب متبقية", value: `❤️${hearts}` },
            { label: "مكافآت سرعة", value: `${streakPoints}` },
          ]}
        />
        {mistakes.length === 0 && (
          <p className="mx-auto max-w-md rounded-lg bg-success/10 px-3 py-2 text-center text-sm font-bold text-success">
            🏆 بلا أخطاء في هذه الجلسة — أداء ممتاز!
          </p>
        )}
        {mistakes.length > 0 && (
          <p className="mx-auto max-w-md rounded-lg bg-gold/10 px-3 py-2 text-center text-sm font-bold text-gold-strong">
            📖 راجعت {mistakes.length} خطأ — هذا هو طريق الإتقان.
          </p>
        )}
        {/* نجوم الإتقان */}
        <div className="mx-auto flex max-w-xs items-center justify-center gap-3 rounded-xl border bg-gold/10 px-4 py-2.5">
          <div className="flex items-center gap-1" aria-label="نجوم إتقانك">
            {[0, 1, 2].map((i) => {
              const filled = i < (mistakes.length === 0 ? 2 : 1) + (timeBonus && streakPoints > 0 ? 1 : 0);
              return (
                <span key={i} className={`text-2xl transition-all ${filled ? "" : "opacity-25 grayscale"}`} aria-hidden="true">
                  ⭐
                </span>
              );
            })}
          </div>
          <p className="text-[11px] font-bold text-muted-foreground">
            الإتقان: أُنجز + {mistakes.length === 0 ? "بلا أخطاء" : "أخطاء"} {timeBonus && streakPoints > 0 ? "+ سرعة" : ""}
          </p>
        </div>
        {/* إرشاد الانتقال: الزر السفلي يسجّل الإنجاز ويفتح الدرس التالي */}
        <p className="mx-auto max-w-md rounded-xl border border-primary/20 bg-primary/5 px-4 py-2.5 text-center text-xs font-bold leading-relaxed text-primary">
          👇 اضغط «أكمل الدرس» بالأسفل — سيُسجَّل إنجازك في مسارك، وستظهر لك بطاقة الدرس
          التالي للانتقال إليه مباشرة.
        </p>
      </div>
    );
  };

  /* ── أسماء المراحل (للقائمة الجانبية) ── */
  const stageNames = React.useMemo(() => {
    const names: string[] = ["الافتتاح"];
    learnBlocks.forEach((b, i) => names.push(`القاعدة ${i + 1}`));
    if (practiceCount > 0) names.push("التدريب");
    if (hasListening) names.push("الاستماع");
    names.push("الإنتاج"); // مرحلة الكتابة الأصلية
    names.push("المحادثة"); // مرحلة المحادثة المحاكاة
    if (quizCount > 0) names.push("الاختبار");
    if (hasMistakeStage) names.push("أخطاؤك");
    names.push("الإكمال");
    return names;
  }, [learnBlocks, practiceCount, hasListening, quizCount, hasMistakeStage]);

  /* ── الواجهة ── */
  return (
    <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-6">
      {/* ═══ الشريط الجانبي (شاشات كبيرة) — قائمة مراحل قابلة للسكرول ═══ */}
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
                    onClick={() => setStage(i)}
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

      {/* ═══ المحتوى الرئيسي ═══ */}
      <div className="min-w-0">
      {/* شريط التقدم العلوي اللاصق */}
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

      {/* ═══ شريط اللعب: قلوب + نقاط + تحدي زمني ═══ */}
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
            onClick={() => {
              // عدّاد يومي
              const today = new Date().toISOString().slice(0, 10);
              const key = `dp:reset-count:${today}`;
              let used = 0;
              try { used = Number(window.localStorage.getItem(key)) || 0; } catch {}
              if (used >= 3) {
                try { window.alert("وصلت للحد اليومي لإعادة تعيين الدروس (3 مرات). عد غداً أو أعد حل الدرس بجدية. 😊"); } catch {}
                return;
              }
              try {
                if (!window.confirm("إعادة تعيين الدرس تعيد القلوب والنقاط إلى البداية. هل تريد المتابعة؟")) return;
                window.localStorage.setItem(key, String(used + 1));
                window.localStorage.removeItem(`dp-flow:${lesson.id}`);
              } catch {}
              setStage(0); setHearts(5); setXpEarned(0); setStreakPoints(0); setPracticeShown(1); setQuizAnswered(0); setMistakes([]);
            }}
            className="rounded-full border border-muted px-2 py-0.5 text-[11px] font-bold text-muted-foreground hover:border-destructive/50 hover:text-destructive"
            title="إعادة تعيين تقدم هذا الدرس (بحد أقصى 3 مرات يومياً)"
          >
            ↺ إعادة
          </button>
        </div>
      </div>

      {/* مؤشرات المراحل — شريط أفقي قابل للسكرول (جوال) */}
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

      {/* محتوى المرحلة الحالية */}
      <div id="lesson-flow-content" tabIndex={-1} className="scroll-mt-28 rounded-xl outline-none">
        <div key={stage} className="lesson-step-enter fade-up rounded-2xl border bg-card p-4 shadow-soft sm:p-6">
          {renderStage()}
        </div>
      </div>

      {/* إرشاد صغير: فقط في مرحلة التدريب حيث توجد تمارين فعلية */}
      {stage === PRACTICE_IDX && practiceCount > 0 && (
        <p className="mt-3 text-center text-xs font-semibold text-muted-foreground">
          💡 التمارين اختيارية — حُلّ ما تستطيع، ثم تابع متى شئت.
        </p>
      )}
      {stage === QUIZ_IDX && quizCount > 0 && quizAnswered < quizCount && (
        <p className="mt-3 text-center text-xs font-semibold text-muted-foreground">
          💡 أسئلة الاختبار اختيارية — أجب عنها لتثبيت الفهم، ثم تابع متى شئت.
        </p>
      )}

      {/* ═══ شريط التنقل السفلي الثابت (احترافي — يبقى ظاهراً) ═══ */}
      <div className="sticky bottom-0 z-30 mt-6 -mx-4 border-t bg-background/95 px-4 py-3 backdrop-blur-md sm:mx-0 sm:rounded-t-2xl sm:border">
        <div className="flex items-center justify-between gap-3">
          <Button variant="outline" onClick={() => setStage((s) => Math.max(0, s - 1))} disabled={stage === 0} className="gap-1.5">
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
      </div>
    </div>
  );
}

/* ═══ مرحلة الإنتاج اللغوي (بند 11-12): يكتب جملة أصلية ويقيّمها ═══ */
function ProductionStage({ lesson }: { lesson: Lesson }) {
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState<{ pct: number; verdict: string } | null>(null);
  const [evaluated, setEvaluated] = React.useState(false);

  const evaluate = () => {
    if (text.trim().length < 10) return;
    void import("@/lib/writing/goethe-local").then(async ({evaluateWriting}) => {
      const r = await evaluateWriting(text.trim(), "free");
      setResult({ pct: r.pct, verdict: r.verdict });
      setEvaluated(true);
      // إشارة أن المستخدم أنتج (يفتح التالي)
      try {
        window.dispatchEvent(new CustomEvent("dp:production-done"));
      } catch {}
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <PenLine className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-base font-extrabold">✍️ أنتج بنفسك — اكتب جملة</h3>
          <p className="text-xs text-muted-foreground">
            هذا هو مفتاح الإتقان: اكتب 2-3 جمل أصلية عن «{lesson.titleAr}» مستخدماً ما تعلمته.
          </p>
        </div>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="اكتب هنا بالألمانية…"
        dir="rtl"
        rows={4}
        className="min-h-24 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="جملتك الأصلية"
      />

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          <Sparkles className="me-1 inline h-3 w-3" aria-hidden="true" />
          تقييم فوري بمعايير Goethe — يعمل دون إنترنت.
        </p>
        <Button onClick={evaluate} disabled={text.trim().length < 10 || evaluated} className="gap-1.5">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          {evaluated ? "تم التقييم ✓" : "قيّم كتابتي"}
        </Button>
      </div>

      {evaluated && result && (
        <div className={`rounded-xl border p-4 ${
          result.pct >= 60 ? "border-success/40 bg-success/5" : "border-gold/40 bg-gold/10"
        }`}>
          <p className="text-lg font-extrabold">
            النسبة: <span className="font-de">{result.pct}%</span> · الحكم: {result.verdict}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {result.pct >= 60
              ? "أحسنت! أنتجت جملاً صحيحة — هذا هو الإتقان الحقيقي. 🎉"
              : "بداية جيدة! عدّل جملتك ثم قيّمها مجدداً."}
          </p>
        </div>
      )}
    </div>
  );
}

/* ═══ مرحلة المحادثة المحاكاة (بند 14) — رد على أسئلة بجمل من الدرس ═══ */
function DialogueSimStage({ lesson }: { lesson: Lesson }) {
  const [step, setStep] = React.useState(0);
  const [answered, setAnswered] = React.useState(false);

  // جمل من الدرس (من أمثلة القواعد أو الاستماع) — نبني حواراً بسيطاً
  const phrases = React.useMemo(() => {
    const fromTheory = lesson.theory.flatMap((t) => t.examples ?? []).slice(0, 3);
    return fromTheory.length > 0
      ? fromTheory.map((ex) => ({ de: ex.de, ar: ex.ar }))
      : [{ de: "Guten Tag!", ar: "نهارك سعيد!" }];
  }, [lesson]);

  const botReply = (i: number) =>
    i < phrases.length - 1 ? phrases[i + 1].de : "Sehr gut! Danke. 😊";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-success/15 text-success">
          <Headphones className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-base font-extrabold">💬 تحدّث معي — محادثة مصغّرة</h3>
          <p className="text-xs text-muted-foreground">
            رد على الجملة بأي رد منطقي بالألمانية — ثم اضغط «الرد التالي».
          </p>
        </div>
      </div>

      {/* فقاعة الرد */}
      <div className="space-y-2 rounded-xl border border-muted bg-muted/20 p-4">
        {step > 0 && (
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary/10 px-3 py-2 text-sm">
              <TextDe text={botReply(step - 1)} />
            </div>
          </div>
        )}
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-success/10 px-3 py-2 text-sm">
            <TextDe text={phrases[step].de} />
            <p className="mt-0.5 text-xs text-muted-foreground">{phrases[step].ar}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          ردّ بصوت أو كتابة — ثم تابع.
        </p>
        <div className="flex gap-2">
          <SpeakButton text={phrases[step].de} />
          <Button
            size="sm"
            onClick={() => {
              if (step < phrases.length - 1) setStep((s) => s + 1);
              else setAnswered(true);
            }}
            disabled={answered}
          >
            {answered ? "أنهيت المحادثة ✓" : step < phrases.length - 1 ? "الرد التالي" : "أنهِ المحادثة"}
          </Button>
        </div>
      </div>

      {answered && (
        <p className="rounded-lg bg-success/10 px-3 py-2 text-sm font-bold text-success">
          🎉 أتممت المحادثة — جرّبت التحدث فعلياً بهذه الجمل!
        </p>
      )}
    </div>
  );
}
