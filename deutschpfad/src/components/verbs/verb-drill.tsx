"use client";

/**
 * تدريب تصريف الأفعال الشاذة — مدرب تفاعلي
 * يختار فعلاً شاذاً + زمناً (Präsens / Präteritum / Partizip II)
 * وتطلب تصريفه مع er/sie/es — مع تصحيح فوري وتصنيف الخطأ.
 */
import * as React from "react";
import {CheckCircle2, Dumbbell, RefreshCw, XCircle} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Progress} from "@/components/ui/progress";
import {STARK_VERBEN, type StarkeVerb} from "@/data/verbs/starke-verben";
import {cn} from "@/lib/utils";

type Tense = "präsens" | "präteritum" | "partizip2";

const TENSES: { id: Tense; label: string; de: string }[] = [
  { id: "präsens", label: "المضارع", de: "Präsens" },
  { id: "präteritum", label: "الماضي البسيط", de: "Präteritum" },
  { id: "partizip2", label: "التصريف الثالث", de: "Partizip II" },
];

interface DrillQuestion {
  verb: StarkeVerb;
  tense: Tense;
  answer: string;
}

const ROUND_SIZE = 10;

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildQuestion(): DrillQuestion {
  const verb = pick(STARK_VERBEN);
  const tense = pick(TENSES).id;
  const answer =
    tense === "präsens" ? verb.präsens3 : tense === "präteritum" ? verb.präteritum : verb.partizip2;
  return { verb, tense, answer };
}

function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

/** رسالة تلميح حسب الزمن */
function hint(verb: StarkeVerb, tense: Tense): string {
  if (tense === "präsens")
    return `المضارع مع er/sie/es من «${verb.infinitiv}» (ابحث في الجدول أو احفظ النمط).`;
  if (tense === "präteritum")
    return `الماضي البسيط مع er/sie/es — الفعل المساعد في الجملة ليس مطلوباً هنا.`;
  return `التصريف الثالث (Partizip II) — يتطلب عادة ge- والنهاية -en، والمساعد هو «${verb.hilfsverb}».`;
}

export function VerbDrill() {
  const [question, setQuestion] = React.useState<DrillQuestion>(() => buildQuestion());
  const [value, setValue] = React.useState("");
  const [feedback, setFeedback] = React.useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = React.useState({ correct: 0, total: 0 });
  const [done, setDone] = React.useState(false);
  const [round, setRound] = React.useState(0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback) return;
    const ok = normalize(value) === normalize(question.answer);
    setFeedback(ok ? "correct" : "wrong");
    setScore((s) => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
  };

  const next = () => {
    if (score.total + 1 >= ROUND_SIZE) {
      setDone(true);
      return;
    }
    setQuestion(buildQuestion());
    setValue("");
    setFeedback(null);
  };

  const restart = () => {
    setScore({ correct: 0, total: 0 });
    setDone(false);
    setFeedback(null);
    setValue("");
    setQuestion(buildQuestion());
    setRound((r) => r + 1);
  };

  /* ── النتيجة ── */
  if (done) {
    const pct = Math.round((score.correct / score.total) * 100);
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-8 text-center">
          <p className="font-de text-5xl font-extrabold text-primary">
            {score.correct}/{score.total}
          </p>
          <p className="mt-2 font-bold">
            {pct >= 90 ? "ممتاز! أنت تتقن تصريف الأفعال الشاذة 🏆" : pct >= 70 ? "جيد جداً — بقي القليل" : pct >= 50 ? "متوسط — كرر التدريب يومياً" : "لا بأس — الأفعال الشاذة تحتاج تكراراً يومياً"}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            دقة {pct}% في {ROUND_SIZE} سؤالاً — راجع الجدول ثم أعد التدريب.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button onClick={restart} className="gap-1.5">
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              جولة جديدة
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  /* ── التدريب ── */
  return (
    <Card key={round} className="overflow-hidden">
      <CardContent className="space-y-4 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="inline-flex items-center gap-2 font-bold">
            <Dumbbell className="h-5 w-5 text-primary" aria-hidden="true" />
            مدرب تصريف الأفعال الشاذة
          </p>
          <span className="text-sm text-muted-foreground">
            السؤال {score.total + 1}/{ROUND_SIZE}
          </span>
        </div>
        <Progress
          value={(score.total / ROUND_SIZE) * 100}
          aria-label="التقدم في التدريب"
        />

        {/* السؤال */}
        <div className="rounded-xl border bg-muted/20 p-4 text-center">
          <p className="text-sm font-bold text-muted-foreground">
            صرّف الفعل «<span className="font-de" dir="ltr" lang="de">{question.verb.infinitiv}</span>»
            ({question.verb.ar}) في زمن {TENSES.find((t) => t.id === question.tense)?.label} مع er/sie/es:
          </p>
          <p className="font-de mt-3 text-2xl font-extrabold" dir="ltr" lang="de">
            {question.tense === "partizip2" ? "Partizip II" : "er / sie / es"}
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <SpeakButton text={question.verb.infinitiv} variant="outline" size="sm" label="استمع للفعل" />
            {question.tense !== "partizip2" && (
              <SpeakButton text={`er ${question.answer}`} variant="ghost" size="sm" label="استمع للإجابة" />
            )}
          </div>
        </div>

        {/* الإدخال */}
        <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={question.tense === "partizip2" ? "اكتب التصريف الثالث (مثال: gegangen)" : "اكتب التصريف (مثال: geht / ging)"}
            className="font-de text-center text-lg font-bold"
            dir="ltr"
            lang="de"
            disabled={!!feedback}
            aria-label="إجابتك"
            autoComplete="off"
          />
          {!feedback ? (
            <Button type="submit" className="shrink-0">تحقق</Button>
          ) : (
            <Button type="button" onClick={next} className="shrink-0 gap-1.5">
              {score.total + 1 >= ROUND_SIZE ? "عرض النتيجة" : "التالي"}
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
            </Button>
          )}
        </form>

        {/* التصحيح الفوري */}
        {feedback && (
          <div
            className={cn(
              "flex items-start gap-2 rounded-xl border p-3 text-sm",
              feedback === "correct" ? "border-success/40 bg-success/10" : "border-destructive/40 bg-destructive/10",
            )}
            role="status"
          >
            {feedback === "correct" ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
            ) : (
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
            )}
            <div>
              {feedback === "correct" ? (
                <p className="font-bold text-success">إجابة صحيحة! 🎉</p>
              ) : (
                <p className="font-bold text-destructive">
                  ليس تماماً — الصحيح هو <span className="font-de" dir="ltr" lang="de">{question.answer}</span>
                </p>
              )}
              <p className="mt-1 text-muted-foreground">
                نوع الخطأ: <span className="font-bold">تصريف الفعل (Konjugation)</span>. {hint(question.verb, question.tense)}
              </p>
            </div>
          </div>
        )}

        {/* النتيجة الحية */}
        <p className="text-center text-xs text-muted-foreground">
          النتيجة: {score.correct} صحيحة من {score.total}
        </p>
      </CardContent>
    </Card>
  );
}
