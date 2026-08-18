"use client";

import * as React from "react";
import {Brain} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {getA1VocabAll} from "@/data/vocabulary/a1";
import {getA2VocabAll} from "@/data/vocabulary/a2";
import {sample, shuffle} from "@/lib/lesson/shuffle";
;

const ROUNDS = 8;

/**
 * تحدي الذاكرة الأسبوعي — كلمات عشوائية من كل المستويات:
 * انظر الكلمة → اختر معناها الصحيح من 4
 */
export function MemoryChallenge() {
  const [phase, setPhase] = React.useState<"intro" | "running" | "done">("intro");
  const [rounds, setRounds] = React.useState<{ de: string; ar: string }[]>([]);
  const [index, setIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [options, setOptions] = React.useState<string[]>([]);

  const all = React.useMemo(() => [...getA1VocabAll(), ...getA2VocabAll()], []);

  const start = () => {
    const picked = sample(all, ROUNDS);
    setRounds(picked);
    setIndex(0);
    setScore(0);
    setPhase("running");
  };

  const current = rounds[index];

  // توليد الخيارات عند كل جولة
  React.useEffect(() => {
    if (phase === "running" && current) {
      const distractors = sample(all.filter((v) => v.ar !== current.ar), 3).map((v) => v.ar);
      setOptions(shuffle([current.ar, ...distractors]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, phase]);

  const answer = (ar: string) => {
    if (ar === current?.ar) setScore((s) => s + 1);
    setTimeout(() => {
      if (index + 1 >= rounds.length) setPhase("done");
      else setIndex((i) => i + 1);
    }, 400);
  };

  if (phase === "intro") {
    return (
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Brain className="h-5 w-5 text-primary" aria-hidden="true" />
            تحدي الذاكرة الأسبوعي 🧠
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5">
          <p className="text-sm text-muted-foreground">
            {ROUNDS} كلمات عشوائية من المستويات الأربعة — لكل كلمة اختر معناها من 4 خيارات.
            الأسئلة تتبدل كل مرة!
          </p>
          <Button className="mt-4" onClick={start}>
            ابدأ التحدي
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (phase === "done") {
    return (
      <div className="rounded-2xl border bg-muted/20 p-6 text-center">
        <Brain className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
        <p className="font-de mt-3 text-4xl font-extrabold text-primary">
          {score}/{ROUNDS}
        </p>
        <p className="mt-1 font-bold">
          {score >= 7 ? "ذاكرة حديدية! 🏆" : score >= 5 ? "جيد جداً — واصل!" : "تدرب أكثر — الذاكرة عضلة"}
        </p>
        <Button className="mt-4" onClick={start}>
          جولة جديدة
        </Button>
      </div>
    );
  }

  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            كلمة {index + 1}/{ROUNDS}
          </span>
          <span className="font-de font-bold text-primary">⭐ {score}</span>
        </div>
        <Progress value={((index + 1) / ROUNDS) * 100} aria-label="التقدم في تحدي الذاكرة" />
        <div className="rounded-xl border bg-muted/20 p-6 text-center">
          <p className="font-de text-2xl font-extrabold" dir="ltr" lang="de">
            {current?.de}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {options.map((opt, i) => (
            <button
              key={`${opt}-${i}`}
              type="button"
              onClick={() => answer(opt)}
              className="rounded-xl border bg-background px-4 py-3 text-start transition-all hover:border-primary/50 hover:bg-primary/5 active:scale-[0.99]"
            >
              {opt}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
