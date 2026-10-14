"use client";

import * as React from "react";
import {Lightbulb} from "lucide-react";

import {LESSON_META} from "@/data/lessons/meta";
import {consumeRefills} from "@/lib/gamification/hearts";
import {buildInterleavedReview} from "@/lib/lesson/review-generator";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import type { Exercise, Lesson, TheoryBlock } from "@/types/lesson";
import {LessonGameBar, LessonMobileChips, LessonNavBar, LessonProgressBar, LessonSidebar} from "@/components/lesson/lesson-flow-chrome";
import {DialogueSimStage, ProductionStage} from "@/components/lesson/lesson-flow-extras";
import {
  FinalStage,
  ListeningStage,
  MistakesStage,
  OpeningStage,
  PracticeStage,
  QuizStage,
  TheoryStage,
} from "@/components/lesson/lesson-flow-stages";

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
  const [showListeningTranscript, setShowListeningTranscript] = React.useState(false);
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
  /* ── المراحل: كل مرحلة مكوّن مستقلّ — هذا موزّع فقط ── */
  const renderStage = () => {
    let s = stage;

    // المرحلة 0: الافتتاح
    if (s === 0) {
      return (
        <OpeningStage
          lesson={lesson}
          reviewQuestions={reviewQuestions}
          timeBonus={timeBonus}
          setTimeBonus={setTimeBonus}
        />
      );
    }

    s -= 1;

    // مراحل التعلم (لكل كتلة نظرية)
    if (s < learnBlocks.length) {
      return <TheoryStage block={learnBlocks[s]} index={s} total={learnBlocks.length} />;
    }

    s -= learnBlocks.length;

    // مرحلة التدريب (تتكشف التمارين واحداً واحداً)
    if (practiceCount > 0 && s === 0) {
      return <PracticeStage lesson={lesson} practiceCount={practiceCount} practiceShown={practiceShown} />;
    }

    if (practiceCount > 0) s -= 1;

    // مرحلة الاستماع
    if (hasListening && s === 0) {
      return (
        <ListeningStage
          lesson={lesson}
          listeningQuestions={listeningQuestions}
          showListeningTranscript={showListeningTranscript}
          setShowListeningTranscript={setShowListeningTranscript}
          next={next}
        />
      );
    }

    if (hasListening) s -= 1;

    // مرحلة الإنتاج اللغوي (بند 11-12): يكتب جملة أصلية ويقيّمها
    if (s === 0) {
      return <ProductionStage lesson={lesson} />;
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
        <QuizStage
          lesson={lesson}
          quizQuestions={quizQuestions}
          quizCount={quizCount}
          quizAnswered={quizAnswered}
          setQuizAnswered={setQuizAnswered}
        />
      );
    }

    // مرحلة أخطائي اليوم: إعادة التمارين الخاطئة لتثبيتها (المستوى الذهبي)
    if (mistakes.length > 0 && s === 0) {
      return <MistakesStage mistakes={mistakes} setMistakes={setMistakes} />;
    }

    if (mistakes.length > 0) s -= 1;

    // المرحلة الأخيرة: الإكمال
    return (
      <FinalStage
        lesson={lesson}
        xpEarned={xpEarned}
        hearts={hearts}
        streakPoints={streakPoints}
        mistakes={mistakes}
        timeBonus={timeBonus}
      />
    );
  };

  /* ── إعادة تعيين تقدم الدرس — حد يومي (3) + تأكيد لمنع خداع القلوب ── */
  const resetProgress = () => {
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
    setStage(0); setHearts(5); setXpEarned(0); setStreakPoints(0); setPracticeShown(1); setQuizAnswered(0); setMistakes([]);
  };

  /* ── الرجوع مرحلة واحدة ── */
  const prev = () => setStage((s) => Math.max(0, s - 1));

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
      <LessonSidebar stageNames={stageNames} stage={stage} onSelect={setStage} />

      {/* ═══ المحتوى الرئيسي ═══ */}
      <div className="min-w-0">
      <LessonProgressBar progressPct={progressPct} stage={stage} totalStages={totalStages} done={done} />

      <LessonGameBar
        hearts={hearts}
        xpEarned={xpEarned}
        timeBonus={timeBonus}
        secondsLeft={secondsLeft}
        feedbackFx={feedbackFx}
        onReset={resetProgress}
      />

      <LessonMobileChips stageNames={stageNames} stage={stage} />

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

      <LessonNavBar
        stage={stage}
        totalStages={totalStages}
        stageNames={stageNames}
        next={next}
        onPrev={prev}
      />
      </div>
    </div>
  );
}
