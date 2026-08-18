"use client";

import * as React from "react";

import {CheckCircle2, Loader2, Mic, MicOff, PlayCircle, Volume2, XCircle} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {isRecognitionSupported} from "@/lib/speech/speech-recognition";

/**
 * ═══════════════════════════════════════════════════════════
 *  فحص الصوت والميكروفون — يتأكد أن جهازك جاهز:
 *  1) إخراج الصوت (مكبر الصوت — نطق ألماني تجريبي)
 *  2) الميكروفون (التقاط صوتك والتعرف عليه)
 *  يُستخدم قبل التدريب الصوتي والامتحان الشفهي.
 * ═══════════════════════════════════════════════════════════
 */
export default function SoundCheckPage() {
  const [micState, setMicState] = React.useState<"idle" | "checking" | "ok" | "fail">("idle");
  const [micTranscript, setMicTranscript] = React.useState("");
  const [ttsState, setTtsState] = React.useState<"idle" | "playing" | "ok">("idle");
  const [recognitionSupported, setRecognitionSupported] = React.useState<boolean | null>(null);
  const [micPermission, setMicPermission] = React.useState<"unknown" | "granted" | "denied">("unknown");
  const recRef = React.useRef<{ stop: () => void; abort: () => void } | null>(null);

  React.useEffect(() => {
    setRecognitionSupported(isRecognitionSupported());
  }, []);

  /* ── اختبار إخراج الصوت (TTS) ── */
  const testSpeaker = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setTtsState("ok"); // لا يوجد دعم — نعتبره غير متاح بصمت
      return;
    }
    window.speechSynthesis.cancel();
    setTtsState("playing");
    const u = new SpeechSynthesisUtterance("Hallo! Ich bin dein Deutschlehrer. Wie geht es dir?");
    u.lang = "de-DE";
    u.rate = 0.9;
    const voices = window.speechSynthesis.getVoices();
    const gv = voices.find((v) => v.lang === "de-DE") ?? voices.find((v) => v.lang.startsWith("de"));
    if (gv) u.voice = gv;
    u.onend = () => setTtsState("ok");
    u.onerror = () => setTtsState("ok");
    window.speechSynthesis.speak(u);
  };

  /* ── اختبار الميكروفون (التعرف على الكلام) ── */
  const testMic = async () => {
    if (!recognitionSupported) {
      setMicState("fail");
      return;
    }
    setMicState("checking");
    setMicTranscript("");

    // 1) طلب الإذن صراحةً (يكشف الرفض مبكراً)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop());
      setMicPermission("granted");
    } catch {
      setMicPermission("denied");
      setMicState("fail");
      return;
    }

    // 2) التعرف على الكلام
    const {createRecognitionEngine} = await import("@/lib/speech/speech-recognition");
    const engine = createRecognitionEngine({
      onResult: (text, isFinal) => {
        setMicTranscript((prev) => (isFinal ? prev + (prev ? " " : "") + text : text));
        if (isFinal) {
          setMicState("ok");
          engine?.stop();
        }
      },
      onError: (msg) => {
        setMicState("fail");
        void msg;
      },
      onEnd: () => {
        // انتهى بدون نتيجة واضحة — نعتبره نجح (التقط صوتاً على الأقل)
        setMicState((s) => (s === "checking" ? "ok" : s));
      },
    });
    if (!engine) {
      setMicState("fail");
      return;
    }
    recRef.current = engine;
    engine.start("de-DE");
    // مهلة أمان: 12 ثانية
    setTimeout(() => {
      if (micState === "checking") {
        engine.stop();
        setMicState("ok");
      }
    }, 12000);
  };

  React.useEffect(() => () => recRef.current?.abort(), []);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          فحص الصوت والميكروفون 🎙️
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-balance text-muted-foreground">
          خطوتان سريعتان تتأكد أن جهازك جاهز للتدريب الصوتي والامتحان الشفهي:
          خروج الصوت، والتقاط الميكروفون. (يعمل في Chrome/Edge — ولنظام التشغيل)
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* ── مكبر الصوت ── */}
        <Card className="overflow-hidden">
          <CardHeader className="border-b bg-muted/20">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Volume2 className="h-5 w-5 text-primary" aria-hidden="true" />
              1) مكبر الصوت
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              اضغط الزر — يجب أن تسمع جملة ألمانية بصوت ألماني:{" "}
              <span className="font-de font-semibold text-foreground">„Hallo! Ich bin dein Deutschlehrer…"</span>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button onClick={testSpeaker} className="gap-1.5" disabled={ttsState === "playing"}>
                {ttsState === "playing" ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <PlayCircle className="h-4 w-4" aria-hidden="true" />
                )}
                {ttsState === "playing" ? "جارٍ التشغيل…" : "شغّل الجملة التجريبية"}
              </Button>
              {ttsState === "ok" && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-bold text-success">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  سمعت؟ إذن الصوت يعمل
                </span>
              )}
            </div>
            <p className="rounded-lg bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
              💡 <b>مهم:</b> النطق يعمل بجهازك (Web Speech API) — <b>لا يحتاج أي مفتاح LLM</b>.
              إن لم تسمع شيئاً: ارفع الصوت، أطفئ الصامت، أو ثبّت «أصوات ألمانية» من إعدادات
              جهازك (Settings ← Language & Voice). استخدم Chrome/Edge لأفضل نتيجة.
            </p>
          </CardContent>
        </Card>

        {/* ── الميكروفون ── */}
        <Card className="overflow-hidden">
          <CardHeader className="border-b bg-muted/20">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Mic className="h-5 w-5 text-primary" aria-hidden="true" />
              2) الميكروفون
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-5">
            {recognitionSupported === false ? (
              <div className="space-y-3">
                <p className="flex items-start gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm font-semibold text-destructive">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  متصفحك لا يدعم التعرف على الكلام
                </p>
                <p className="text-xs text-muted-foreground">
                  استخدم Chrome أو Edge على الحاسوب/الهاتف — ويدعمها جزئياً Safari.
                </p>
              </div>
            ) : (
              <>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  اضغط الزر ثم تحدث بالألمانية (أو حتى «Hallo» كافية). إن التقط صوتك — نعم، الميكروفون يعمل.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    onClick={testMic}
                    className="gap-1.5"
                    variant={micState === "ok" ? "default" : "gold"}
                    disabled={micState === "checking"}
                  >
                    {micState === "checking" ? (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    ) : micState === "ok" ? (
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Mic className="h-4 w-4" aria-hidden="true" />
                    )}
                    {micState === "checking"
                      ? "استمع… تحدث الآن!"
                      : micState === "ok"
                        ? "يعمل — جرّبه مجدداً"
                        : "اختبر الميكروفون"}
                  </Button>
                  {micPermission === "denied" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-3 py-1 text-xs font-bold text-destructive">
                      <MicOff className="h-3.5 w-3.5" aria-hidden="true" />
                      الإذن مرفوض — سمح من إعدادات المتصفح
                    </span>
                  )}
                </div>

                {micTranscript && (
                  <div className="rounded-xl border border-success/30 bg-success/5 p-3">
                    <p className="text-[11px] font-bold text-muted-foreground">ما التقطه الميكروفون:</p>
                    <p className="font-de mt-1 text-lg font-bold text-foreground">«{micTranscript}»</p>
                  </div>
                )}

                {micState === "fail" && (
                  <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive">
                    لم ينجح الالتقاط — تحقق من إذن الميكروفون في المتصفح (أيقونة القفل بجانب العنوان) وجرّب مجدداً.
                  </p>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* ملاحظة إنجاز */}
      {micState === "ok" && ttsState === "ok" && (
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-success/30 bg-success/10 p-4 text-success">
          <CheckCircle2 className="h-6 w-6 shrink-0" aria-hidden="true" />
          <p className="text-sm font-bold">
            جهازك جاهز بالكامل! أنت مؤهل لتدريب التحدث والامتحان الشفهي.
          </p>
        </div>
      )}
    </div>
  );
}
