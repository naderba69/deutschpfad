"use client";

import * as React from "react";
import {CheckCircle2, Mic, MicOff, RotateCcw, Sparkles, Users} from "lucide-react";

import {B2_SPRECHEN} from "@/data/exams/b2-sprechen";
import {SpeakButton} from "@/components/shared/speak-button";
import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {createRecognitionEngine, isRecognitionSupported, unsupportedRecognitionNote, type RecognitionEngine} from "@/lib/speech/speech-recognition";
import {cn} from "@/lib/utils";

/**
 * محاكي الامتحان الشفهي (Mündliche Prüfung) — الصيغة الرسمية 2019+
 *  Teil 1: Vortrag (~4 دقائق) — موضوع من اثنين + أسئلة إرشادية (Leitfragen)
 *  Teil 2: Diskussion (~5 دقائق) — قضية خلافية بحجج Pro/Kontra
 *  التحضير: 15 دقيقة (يُدار خارج المؤقت كتدريب حر)
 *  المستخدم يسجل إجاباته (SpeechRecognition) أو يكتبها.
 */

type Mode = "listening" | "recording" | "review";

export function MündlichePrüfung() {
  const sprechen = B2_SPRECHEN;

  const [teil, setTeil] = React.useState<1 | 2>(1);
  const [vortragIdx, setVortragIdx] = React.useState(0);
  const [diskIdx, setDiskIdx] = React.useState(0);
  const [mode, setMode] = React.useState<Mode>("listening");
  const [transcript, setTranscript] = React.useState("");
  const [recognition, setRecognition] = React.useState<RecognitionEngine | null>(null);
  const [supported, setSupported] = React.useState(true);
  const [written, setWritten] = React.useState("");

  const vortrag = sprechen.vortrag[vortragIdx % sprechen.vortrag.length];
  const diskussion = sprechen.diskussion[diskIdx % sprechen.diskussion.length];

  React.useEffect(() => {
    if (!isRecognitionSupported()) {
      setSupported(false);
      return;
    }
    const engine = createRecognitionEngine({
      onResult: (text, isFinal) => {
        setTranscript((prev) => (isFinal ? `${prev} ${text}`.trim() : prev || text));
        if (isFinal) setMode("review");
      },
      onStart: () => setMode("recording"),
      onEnd: () => setMode((m) => (m === "recording" ? "review" : m)),
      onError: () => setMode("listening"),
    });
    setRecognition(engine);
    return () => engine?.destroy();
  }, []);

  const toggleRecording = () => {
    if (!recognition) return;
    if (recognition.isListening) {
      recognition.stop();
    } else {
      setTranscript("");
      setWritten("");
      recognition.start("de-DE");
    }
  };

  const clearAnswer = () => {
    setTranscript("");
    setWritten("");
    setMode("listening");
  };

  return (
    <div className="space-y-5">
      {/* تبويب الأجزاء */}
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => { setTeil(1); clearAnswer(); }}
          className={cn(
            "rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors",
            teil === 1 ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:border-primary/50",
          )}
        >
          🎤 Teil 1 — Vortrag (~4 دقائق)
        </button>
        <button
          type="button"
          onClick={() => { setTeil(2); clearAnswer(); }}
          className={cn(
            "rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors",
            teil === 2 ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:border-primary/50",
          )}
        >
          🗣️ Teil 2 — Diskussion (~5 دقائق)
        </button>
      </div>

      {/* ════════ Teil 1: Vortrag ════════ */}
      {teil === 1 && (
        <div className="space-y-4">
          <div className="rounded-xl border border-primary/25 bg-primary/5 p-4">
            <p className="text-sm font-bold">اختر موضوعاً (في الامتحان: موضوعان للاختيار):</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {sprechen.vortrag.map((v, i) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVortragIdx(i)}
                  className={cn(
                    "rounded-lg border p-3 text-start transition-colors",
                    i === vortragIdx % sprechen.vortrag.length ? "border-primary bg-primary/10" : "border-muted bg-background hover:border-primary/40",
                  )}
                >
                  <p className="font-de text-sm font-bold" dir="ltr" lang="de">{v.topicDe}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{v.topicAr}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border bg-muted/20 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-muted-foreground">
                Leitfragen — الأسئلة الإرشادية (تُظهر البنية التي تتحدث عنها)
              </p>
              <SpeakButton text={vortrag.topicDe} variant="outline" />
            </div>
            <div className="mt-3 space-y-2">
              {vortrag.leitfragen.map((q, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border bg-background p-2.5">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-extrabold text-primary">{i + 1}</span>
                  <p className="font-de text-sm" dir="ltr" lang="de">{q}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              💡 بنية العرض الرسمية: <b>مقدمة</b> (Sehr geehrte Damen und Herren…) ← <b>الوضع الحالي</b> ←{" "}
              <b>المشاكل/الأسباب</b> ← <b>الحلول</b> ← <b>خاتمة</b> (Zusammenfassend lässt sich sagen…).
              تحدث ~4 دقائق، وتوقع أسئلة متابعة من الممتحن.
            </p>
          </div>
        </div>
      )}

      {/* ════════ Teil 2: Diskussion ════════ */}
      {teil === 2 && (
        <div className="space-y-4">
          <div className="rounded-xl border border-gold/40 bg-gold/10 p-4">
            <p className="text-sm font-bold">اختر قضية للنقاش (Pro/Kontra):</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {sprechen.diskussion.map((d, i) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDiskIdx(i)}
                  className={cn(
                    "rounded-lg border p-3 text-start transition-colors",
                    i === diskIdx % sprechen.diskussion.length ? "border-gold bg-gold/10" : "border-muted bg-background hover:border-gold/40",
                  )}
                >
                  <p className="font-de text-sm font-bold" dir="ltr" lang="de">{d.themaDe}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{d.themaAr}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-success/30 bg-success/5 p-3">
              <p className="mb-1.5 text-xs font-extrabold text-success">PRO — حجج مؤيدة</p>
              <ul className="space-y-1.5 text-sm">
                {diskussion.pro.map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="mt-0.5 text-success">✓</span>
                    <span dir="ltr" lang="de">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-3">
              <p className="mb-1.5 text-xs font-extrabold text-destructive">KONTRA — حجج معارضة</p>
              <ul className="space-y-1.5 text-sm">
                {diskussion.kontra.map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="mt-0.5 text-destructive">✗</span>
                    <span dir="ltr" lang="de">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border bg-muted/20 p-3 text-xs leading-relaxed text-muted-foreground">
            <b>المهمة:</b> خذ موقفاً واضحاً وبرره بحججك (Pro أو Kontra أو موقفاً وسطاً)، ثم{" "}
            <b>تفاعل مع شريكك</b>: وافق، اعترض بأدب، واسأل. استخدم:{" "}
            <span dir="ltr" lang="de">Meiner Meinung nach… · Da stimme ich Ihnen zu, aber… · Ich sehe das anders, denn… · Was halten Sie von…?</span>
          </div>
        </div>
      )}

      {/* ════════ التسجيل والكتابة ════════ */}
      <div className="flex flex-wrap items-center gap-2">
        <Button variant={mode === "recording" ? "destructive" : "default"} onClick={toggleRecording} className="gap-1.5">
          {mode === "recording" ? (
            <>
              <MicOff className="h-4 w-4" aria-hidden="true" />
              إيقاف التسجيل
            </>
          ) : (
            <>
              <Mic className="h-4 w-4" aria-hidden="true" />
              سجّل إجابتك
            </>
          )}
        </Button>
        <Button variant="outline" onClick={clearAnswer} className="gap-1.5">
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          امسح الإجابة
        </Button>
      </div>

      {(transcript || written) && (
        <div className="rounded-xl border border-primary/25 bg-primary/5 p-4">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            إجابتك:
          </p>
          <p className="font-de mt-2 whitespace-pre-wrap text-sm leading-relaxed" dir="ltr" lang="de">
            {transcript || written}
          </p>
        </div>
      )}

      {mode !== "recording" && (
        <div className="flex items-end gap-2">
          <AutoGrowTextarea
            value={written}
            onChange={(e) => setWritten(e.target.value)}
            placeholder="...أو اكتب إجابتك هنا (عرضك أو موقفك في النقاش)"
            dir="ltr"
            lang="de"
            aria-label="إجابتك المكتوبة"
            className="font-de flex-1 text-sm"
          />
          <Button variant="secondary" size="sm" onClick={() => setMode("review")}>
            حفظ
          </Button>
        </div>
      )}

      {!supported && <p className="text-sm text-muted-foreground">⚠️ {unsupportedRecognitionNote()}</p>}

      {/* التقييم الذاتي */}
      <div className="rounded-xl border border-gold/40 bg-gold/10 p-4">
        <p className="text-sm font-bold">📋 قيّم نفسك (كما يفعل الممتحن، 1-5):</p>
        <div className="mt-2 grid gap-2 text-xs sm:grid-cols-2">
          {[
            { name: "Aussprache", ar: "النطق مفهوم للألماني؟" },
            { name: "Wortschatz", ar: "مفردات متنوعة مناسبة B2؟" },
            { name: "Flüssigkeit", ar: "طلاقة بلا توقفات طويلة؟" },
            { name: "Interaktion", ar: "ردّيت وبنيت على كلام الشريك؟" },
          ].map((c) => (
            <div key={c.name} className="flex items-center justify-between gap-2 rounded-lg border bg-background px-3 py-2">
              <div>
                <p className="font-bold"><span dir="ltr" lang="de">{c.name}</span></p>
                <p className="text-muted-foreground">{c.ar}</p>
              </div>
              <span className="text-lg text-muted-foreground">★★★★★</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          النجاح في الامتحان: ≥ 60 من 100 في كل مكوّن. التقييم النهائي الدقيق يتم من ممتحن — هنا درّب نفسك بصدق.
        </p>
      </div>

      {/* نصيحة */}
      <div className="flex items-start gap-2 rounded-xl border bg-muted/20 p-3 text-sm">
        <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <p>
          <span className="font-bold">تذكير رسمي: </span>
          مدة التحدث الإجمالية ~15 دقيقة (زوجي) + 15 دقيقة تحضير. في Teil 1 تختار موضوعاً من اثنين
          وتتحدث ~4 دقائق، وفي Teil 2 تناقش ~5 دقائق مع شريكك قضية خلافية. لا تُقيَّم «صحة» رأيك — بل
          قدرتك على التعبير والتفاعل.
        </p>
      </div>

      <div className="rounded-xl border border-success/40 bg-success/10 p-4 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-success" aria-hidden="true" />
        <p className="mt-2 font-bold">أكملت محاكاة الامتحان الشفهي بالصيغة 2019+! 🎉</p>
        <p className="mt-1 text-sm text-muted-foreground">
          أعد التدريب بمواضيع أخرى، أو ادخل محرك الامتحان الكامل لتجربة الجلسة الشفهية ضمن الامتحان.
        </p>
      </div>
    </div>
  );
}
