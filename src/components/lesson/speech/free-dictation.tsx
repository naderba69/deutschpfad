"use client";

import * as React from "react";
import {CheckCircle2, Dices, Headphones, Send, XCircle} from "lucide-react";

import {Button} from "@/components/ui/button";
import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {normalizeGermanText} from "@/lib/speech/scoring";
import {speakRepeated} from "@/lib/speech/voices";
import {cn} from "@/lib/utils";

/** جمل إملاء حر متنوعة (تُخلط عشوائياً) */
const FREE_DICTATION_BANK: { de: string; ar: string }[] = [
  { de: "Ich heiße Anna und komme aus Berlin.", ar: "اسمي آنا وأنا من برلين." },
  { de: "Meine Familie wohnt in Tunis.", ar: "عائلتي تسكن في تونس." },
  { de: "Ich habe einen Bruder und eine Schwester.", ar: "لدي أخ وأخت." },
  { de: "Guten Morgen! Wie geht es dir?", ar: "صباح الخير! كيف حالك؟" },
  { de: "Das ist mein Vater, er heißt Ahmed.", ar: "هذا أبي، اسمه أحمد." },
  { de: "Wir lernen zusammen Deutsch.", ar: "نتعلم الألمانية معاً." },
  { de: "Meine Oma ist sehr nett.", ar: "جدتي لطيفة جداً." },
  { de: "Woher kommen Sie?", ar: "من أين أنتم (بصيغة الاحترام)؟" },
];

/**
 * الإملاء الحر (Free Dictation) — تدرب بجمل عشوائية أو بجملتك الخاصة:
 * استمع → اكتب → تحليل كلمة-بكلمة + درجة
 */
export function FreeDictation() {
  const [sentence, setSentence] = React.useState(() => FREE_DICTATION_BANK[0]);
  const [custom, setCustom] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [result, setResult] = React.useState<{
    correct: string[];
    missed: string[];
    score: number;
  } | null>(null);

  const target = custom.trim() ? custom.trim() : sentence.de;

  const pickRandom = () => {
    const others = FREE_DICTATION_BANK.filter((s) => s.de !== sentence.de);
    setSentence(others[Math.floor(Math.random() * others.length)]);
    setCustom("");
    setAnswer("");
    setResult(null);
  };

  const check = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim() === "") return;

    const targetWords = normalizeGermanText(target).split(" ").filter(Boolean);
    const answerWords = normalizeGermanText(answer).split(" ").filter(Boolean);
    const correct = targetWords.filter((w) => answerWords.includes(w));
    const missed = targetWords.filter((w) => !answerWords.includes(w));
    const score = Math.round((correct.length / targetWords.length) * 100);
    setResult({ correct, missed, score });
  };

  return (
    <div className="space-y-4">
      {/* شريط اختيار الجملة */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border bg-muted/30 p-3">
        <p className="text-sm font-semibold">
          {custom.trim() ? "جملتك الخاصة:" : "جملة اليوم (انقر السهم لتبديلها):"}
        </p>
        <Button variant="outline" size="sm" onClick={pickRandom} className="gap-1.5">
          <Dices className="h-4 w-4" aria-hidden="true" />
          جملة عشوائية
        </Button>
      </div>

      {/* جملة خاصة — يتمدد تلقائياً ليعرض الجملة كاملة */}
      <div className="flex items-end gap-2">
        <AutoGrowTextarea
          value={custom}
          onChange={(e) => {
            setCustom(e.target.value);
            setAnswer("");
            setResult(null);
          }}
          onEnter={() => {
            if (custom.trim()) {
              setSentence({ de: custom.trim(), ar: "" });
              setAnswer("");
              setResult(null);
            }
          }}
          placeholder="…أو اكتب جملة ألمانية بنفسك للتدريب عليها"
          dir="ltr"
          lang="de"
          aria-label="جملة ألمانية مخصصة"
          className="font-de flex-1"
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            if (custom.trim()) {
              setSentence({ de: custom.trim(), ar: "" });
              setAnswer("");
              setResult(null);
            }
          }}
        >
          استخدامها
        </Button>
      </div>

      {/* الجملة المعروضة */}
      {target && (
        <div className="rounded-xl border bg-background p-4">
          <p className="font-de text-lg font-bold" dir="ltr" lang="de">
            {target}
          </p>
          {!custom.trim() && sentence.ar && (
            <p className="mt-1 text-sm text-muted-foreground">{sentence.ar}</p>
          )}
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Button type="button" variant="outline" size="sm" onClick={() => speakRepeated(target, 1, { rate: 0.75 })}>
              <Headphones className="h-3.5 w-3.5" aria-hidden="true" />
              بطيء
            </Button>
            <Button type="button" size="sm" onClick={() => speakRepeated(target, 1, { rate: 1 })}>
              <Headphones className="h-3.5 w-3.5" aria-hidden="true" />
              عادي
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={() => speakRepeated(target, 2, { rate: 1 })}>
              <Headphones className="h-3.5 w-3.5" aria-hidden="true" />
              ×2 متتالي
            </Button>
          </div>
        </div>
      )}

      {/* الكتابة والتحقق — صندوق يتمدد تلقائياً: النص يظهر كاملاً على الجوال */}
      <form onSubmit={check} className="flex items-end gap-2">
        <AutoGrowTextarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onEnter={() => check({ preventDefault: () => {} } as React.FormEvent)}
          placeholder="اكتب ما سمعت…"
          dir="ltr"
          lang="de"
          aria-label="إجابتك"
          className="font-de flex-1"
        />
        <Button type="submit" disabled={answer.trim() === ""} className="shrink-0 gap-1.5">
          <Send className="h-4 w-4" aria-hidden="true" />
          تحقق
        </Button>
      </form>

      {/* النتيجة */}
      {result && (
        <div
          className={cn(
            "space-y-2 rounded-xl border p-3 text-sm",
            result.score >= 75
              ? "border-success/40 bg-success/10"
              : "border-amber-300/50 bg-amber-50/60 dark:border-amber-500/30 dark:bg-amber-500/10",
          )}
          role="status"
        >
          <p className="font-bold">
            درجتك: <span className="font-de text-xl font-extrabold">{result.score}%</span>{" "}
            {result.score >= 75 ? "— ممتاز! 🎉" : result.score >= 50 ? "— جيد، واصل التدريب" : "— أعد الاستماع ببطء"}
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            {normalizeGermanText(target)
              .split(" ")
              .filter(Boolean)
              .map((word, i) => {
                const ok = result.correct.includes(word);
                return (
                  <span
                    key={i}
                    className={cn(
                      "font-de rounded-md px-1.5 py-0.5",
                      ok ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive",
                    )}
                    dir="ltr"
                    lang="de"
                  >
                    {word}
                    {ok ? (
                      <CheckCircle2 className="ms-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
                    ) : (
                      <XCircle className="ms-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
                    )}
                  </span>
                );
              })}
          </div>
          <p className="text-xs text-muted-foreground">
            أتقنت {result.correct.length} من {result.correct.length + result.missed.length} كلمة —
            ركّز على الكلمات الحمراء واستمع إليها منفردة.
          </p>
        </div>
      )}
    </div>
  );
}
