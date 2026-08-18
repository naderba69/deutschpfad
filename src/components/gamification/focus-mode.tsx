"use client";

import * as React from "react";
import {CheckCircle2, Focus, ListTodo} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {useCountdown} from "@/lib/tests/use-countdown";
import {formatTime} from "@/lib/tests/test-engine";
;
import {cn} from "@/lib/utils";

const SESSION_OPTIONS = [
  { minutes: 15, label: "15 دقيقة" },
  { minutes: 25, label: "25 دقيقة" },
  { minutes: 50, label: "50 دقيقة" },
];

/**
 * وضع التركيز — جلسة هادئة بمؤقت + قائمة مهام اليوم
 */
export function FocusMode() {
  const [session, setSession] = React.useState(0);
  const [phase, setPhase] = React.useState<"setup" | "running">("setup");
  const [tasks, setTasks] = React.useState<string[]>(["مراجعة بطاقات SM-2", "درس واحد + تمارينه", "تقييم نطق واحد"]);
  const [done, setDone] = React.useState<Set<number>>(new Set());
  const [newTask, setNewTask] = React.useState("");

  const minutes = SESSION_OPTIONS[session]?.minutes ?? 25;
  const remaining = useCountdown(phase === "running" ? minutes * 60 : 0, () => setPhase("setup"));

  const start = () => setPhase("running");
  const stop = () => setPhase("setup");

  const toggleTask = (i: number) => {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks((t) => [...t, newTask.trim()]);
      setNewTask("");
    }
  };

  return (
    <Card>
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Focus className="h-5 w-5 text-primary" aria-hidden="true" />
          وضع التركيز
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 p-5">
        {phase === "setup" ? (
          <>
            <p className="text-sm text-muted-foreground">
              اختر مدة الجلسة، حدد مهامك، وركّز — لا مشتتات. (يُوصى: 25 دقيقة ثم استراحة 5)
            </p>
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="مدة الجلسة">
              {SESSION_OPTIONS.map((o, i) => (
                <button
                  key={o.minutes}
                  type="button"
                  onClick={() => setSession(i)}
                  className={cn(
                    "rounded-lg border px-4 py-2 text-sm font-semibold transition-colors",
                    session === i ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:border-primary/40",
                  )}
                >
                  {o.label}
                </button>
              ))}
            </div>
            <Button onClick={start} size="lg" className="w-full gap-1.5">
              <Focus className="h-4 w-4" aria-hidden="true" />
              ابدأ جلسة التركيز
            </Button>
          </>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary/5 p-4">
              <p className="font-bold">الجلسة جارية… 🎧</p>
              <span className="font-de text-2xl font-extrabold text-primary tabular-nums">
                {formatTime(remaining)}
              </span>
            </div>
            <Progress value={((minutes * 60 - remaining) / (minutes * 60)) * 100} aria-label="التقدم في الجلسة" />
            <Button variant="outline" onClick={stop} className="w-full">
              إنهاء الجلسة مبكراً
            </Button>
          </div>
        )}

        {/* قائمة المهام */}
        <div className="border-t pt-4">
          <p className="mb-2 inline-flex items-center gap-2 font-bold">
            <ListTodo className="h-4 w-4 text-primary" aria-hidden="true" />
            مهام جلسة اليوم
          </p>
          <ul className="space-y-1.5">
            {tasks.map((t, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => toggleTask(i)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-start text-sm transition-colors",
                    done.has(i) ? "border-success/40 bg-success/5 text-muted-foreground line-through" : "bg-background hover:border-primary/40",
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border",
                      done.has(i) ? "border-success bg-success text-white" : "border-muted-foreground/40",
                    )}
                  >
                    {done.has(i) && <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
                  </span>
                  {t}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              placeholder="أضف مهمة…"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring"
            />
            <Button size="sm" variant="outline" onClick={addTask}>
              إضافة
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
