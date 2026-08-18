"use client";

import * as React from "react";
import {BookOpen, Bot, CheckCircle2, Send, Sparkles, User, Zap, ZapOff} from "lucide-react";

import {useLLM} from "@/components/providers/llm-provider";
import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const QUICK_PROMPTS = [
  "صحّح لي: Ich bin gut in Deutsch sprechen.",
  "اشرح لي الفرق بين weil و denn.",
  "ولّد لي 3 جمل بسيطة بكلمة das Wetter.",
  "كيف أسأل عن الطريق في ألمانيا؟",
];

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const PROVIDER_LABEL: Record<string, string> = {
  gemini: "Gemini Flash",
  groq: "Groq",
  openrouter: "OpenRouter",
  cache: "ذاكرة التخزين المؤقت (بدون استهلاك حصة)",
};

/** سياق درس يُمرَّر للمعلّم (من ?lesson=) ليجيب بسياق مخصص */
export interface LessonContext {
  id: string;
  titleDe: string;
  titleAr: string;
  summary: string;
  theoryTitles: string[];
}

function buildSystemPrompt(ctx?: LessonContext): string {
  const base =
    "أنت معلّم لغة ألمانية محترف للمتعلمين العرب (مستوى A1–B2 وفق CEFR).\n" +
    "قواعد عملك:\n" +
    "- ردّك الأساسي بالعربية، مع الجمل الألمانية مكتوبة بدقة إملائية.\n" +
    "- عند تصحيح خطأ: اشرح «لماذا» باختصار واذكر نوع الخطأ.\n" +
    "- استخدم مستوى المفردات المناسب لمستوى المتعلم.\n" +
    "- كن مشجعاً ومختصراً (لا تتجاوز 150 كلمة إلا عند الطلب).\n" +
    "- عند طلب توليد جمل: أعط 3-5 جمل متدرجة الصعوبة مع الترجمة.";

  if (!ctx) return base;

  return (
    base +
    "\n\n── سياق الدرس الذي يدرسه المستخدم الآن ──\n" +
    `عنوان الدرس: ${ctx.titleAr} (${ctx.titleDe})\n` +
    `نبذة: ${ctx.summary}\n` +
    `القواعد المغطاة: ${ctx.theoryTitles.join("؛ ")}\n` +
    "عند الإجابة: ركّز على هذا الدرس تحديداً، واربط إجاباتك بقواعده ومفرداته."
  );
}

/**
 * المعلّم الافتراضي — محادثة حرة تعمل عبر /api/llm
 * — يدعم سياق درس عبر lessonContext (اقتراح المرحلة 5) —
 */
export function AssistantClient({ lessonContext }: { lessonContext?: LessonContext }) {
  const { isConfigured, providers, remaining, dailyLimit, usageToday, callLLM } = useLLM();
  const systemPrompt = React.useMemo(() => buildSystemPrompt(lessonContext), [lessonContext]);
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [input, setInput] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [lastProvider, setLastProvider] = React.useState<string | null>(null);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    const history: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(history);
    setInput("");
    setBusy(true);

    try {
      const result = await callLLM({
        messages: [{ role: "system", content: systemPrompt }, ...history],
        purpose: lessonContext ? `chat:lesson:${lessonContext.id}` : "chat",
      });

      if (result.ok && result.content) {
        setMessages([...history, { role: "assistant", content: result.content }]);
        setLastProvider(result.provider ?? null);
      } else if (result.status === "limit") {
        setMessages([
          ...history,
          {
            role: "assistant",
            content:
              "⚠️ استنفدت حصتك اليومية من طلبات الذكاء الاصطناعي (50/50). ستعود الحصة غداً — والدروس والتمارين والبطاقات تعمل جميعها دون أي حصة.",
          },
        ]);
      } else if (result.status === "not-configured") {
        setMessages([
          ...history,
          {
            role: "assistant",
            content:
              "🔧 لم تُضف مفاتيح الذكاء الاصطناعي بعد (GEMINI_API_KEY أو GROQ_API_KEY أو OPENROUTER_API_KEY). أضفها في ملف .env.local ثم أعد تشغيل الخادم، وسيظهر المعلّم الافتراضي هنا فوراً.",
          },
        ]);
      } else {
        setMessages([
          ...history,
          { role: "assistant", content: `⚠️ حدث خطأ: ${result.error ?? "غير معروف"}` },
        ]);
      }
    } finally {
      setBusy(false);
    }
  };

  /* ── غير مضبوط: شاشة إعداد المفاتيح ── */
  if (!isConfigured) {
    return (
      <div className="rounded-2xl border bg-muted/20 p-8 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <ZapOff className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-xl font-extrabold">الميزات الذكية غير مفعّلة بعد</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
          المنصة تعمل بالكامل (الدروس والتمارين والبطاقات) بدون أي مفتاح. لتفعيل المعلّم
          الافتراضي: أضف مفتاحاً واحداً على الأقل في <code dir="ltr" className="font-de">.env.local</code>:
        </p>
        <ul className="mx-auto mt-4 max-w-md space-y-2 rounded-xl border bg-background p-4 text-start text-sm">
          {[
            ["GEMINI_API_KEY", "الأساسي — مجاني ~1500 طلب/يوم"],
            ["GROQ_API_KEY", "احتياطي أول — سريع"],
            ["OPENROUTER_API_KEY", "احتياطي ثانٍ — تشكيلة نماذج"],
          ].map(([key, note]) => (
            <li key={key} className="flex items-start justify-between gap-3">
              <code dir="ltr" className="font-de font-semibold text-primary">{key}</code>
              <span className="text-muted-foreground">{note}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          ثم أعد تشغيل الخادم وسيظهر العدّاد اليومي والمعلّم تلقائياً.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* سياق الدرس */}
      {lessonContext && (
        <div className="flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
          <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-gold-strong-foreground" aria-hidden="true" />
          <p>
            <span className="font-bold">تتحدث الآن عن الدرس: </span>
            <span className="font-de font-semibold" dir="ltr" lang="de">
              {lessonContext.titleDe}
            </span>{" "}
            <span className="text-muted-foreground">({lessonContext.titleAr})</span> — أسئلتك
            ستُجاب في سياق هذا الدرس وقواعده.
          </p>
        </div>
      )}

      {/* بطاقة الحالة */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-muted/30 p-4 text-sm">
        <p className="inline-flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
          <span className="font-semibold">المعلّم الافتراضي مفعّل</span>
          <span className="text-muted-foreground">— المزوّدون:</span>
          <span className="font-de font-semibold text-primary" dir="ltr">
            {providers.map((p) => (p === "gemini" ? "Gemini" : p === "groq" ? "Groq" : "OpenRouter")).join(" ← ")}
          </span>
        </p>
        <span className="font-de inline-flex items-center gap-1.5 font-bold text-primary">
          <Zap className="h-4 w-4" aria-hidden="true" />
          {remaining}/{dailyLimit} اليوم
        </span>
      </div>
      <p className="text-xs text-muted-foreground">
        المستهلك اليوم: {usageToday} · التخزين المؤقت لا يستهلك حصة · عند فشل Gemini ينتقل
        تلقائياً إلى Groq ثم OpenRouter (مع معالجة 429).
      </p>

      {/* الرسائل */}
      <div className="space-y-3">
        {messages.length === 0 && (
          <div className="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">
            ابدأ محادثة مع معلّمك — اسأل عن أي قاعدة، اطلب تصحيحاً، أو ولّد جملة بالضغط على
            الاقتراحات أدناه 👇
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              "flex gap-3",
              msg.role === "user" ? "justify-end" : "justify-start",
            )}
          >
            {msg.role === "assistant" && (
              <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Bot className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
            <div
              className={cn(
                "max-w-[80%] whitespace-pre-wrap rounded-2xl border px-4 py-3 text-sm leading-relaxed",
                msg.role === "user"
                  ? "rounded-br-sm border-primary/30 bg-primary text-primary-foreground"
                  : "rounded-bl-sm bg-card",
              )}
              dir={msg.role === "user" ? "rtl" : "rtl"}
            >
              {msg.role === "assistant" ? (
                <span className="font-de whitespace-pre-wrap">{msg.content}</span>
              ) : (
                msg.content
              )}
            </div>
            {msg.role === "user" && (
              <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-strong">
                <User className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
          </div>
        ))}
        {busy && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 animate-pulse text-primary" aria-hidden="true" />
            المعلّم يكتب…
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* الاقتراحات */}
      <div className="flex flex-wrap gap-1.5">
        {QUICK_PROMPTS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => void send(p)}
            disabled={busy}
            className="rounded-full border bg-background px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary disabled:opacity-50"
          >
            {p}
          </button>
        ))}
      </div>

      {/* الإدخال */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void send(input);
        }}
        className="flex items-end gap-2"
      >
        <AutoGrowTextarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onEnter={() => void send(input)}
          disabled={busy}
          placeholder="اكتب سؤالك بالعربية أو الألمانية…"
          aria-label="رسالتك للمعلّم"
          className="flex-1 text-sm"
        />
        <Button type="submit" disabled={busy || input.trim() === ""} className="shrink-0 gap-1.5">
          <Send className="h-4 w-4" aria-hidden="true" />
          إرسال
        </Button>
      </form>

      {lastProvider && (
        <p className="text-center text-xs text-muted-foreground">
          آخر استدعاء عبر:{" "}
          <span className="font-de font-semibold text-primary" dir="ltr">
            {PROVIDER_LABEL[lastProvider] ?? lastProvider}
          </span>
        </p>
      )}
    </div>
  );
}
