"use client";

import * as React from "react";
import {CheckCircle2, Mic, MicOff, RotateCcw, Sparkles, Users} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {createRecognitionEngine, isRecognitionSupported, unsupportedRecognitionNote, type RecognitionEngine} from "@/lib/speech/speech-recognition";
import {cn} from "@/lib/utils";

/**
 * محاكي الامتحان الشفهي (Mündliche Prüfung) بنمط Goethe-Zertifikat
 * — ثلاثة أجزاء: تقديم النفس / حديث عن موضوع / حل مشكلة —
 * — المستخدم يسجل إجاباته (SpeechRecognition) أو يكتبها —
 * (النسخة الأساسية للمرحلة 9 — تُوسَّع في المرحلة 10 بنظام التقييم الكامل)
 */

interface PrüfungTeil {
  id: string;
  title: string;
  instruction: string;
  questions: { de: string; ar: string }[];
  /** أسئلة للشريك/الممتحن */
  followUps?: string[];
}

const PRÜFUNG: PrüfungTeil[] = [
  {
    id: "teil1",
    title: "الجزء 1 — تقديم النفس",
    instruction: "قدّم نفسك بإجابات كاملة (الاسم، البلد، المهنة/الدراسة، الهوايات، سبب تعلم الألمانية):",
    questions: [
      { de: "Wie heißen Sie und woher kommen Sie?", ar: "ما اسمك ومن أين أنت؟" },
      { de: "Was machen Sie beruflich?", ar: "ماذا تعمل؟" },
      { de: "Warum lernen Sie Deutsch?", ar: "لماذا تتعلم الألمانية؟" },
    ],
  },
  {
    id: "teil2",
    title: "الجزء 2 — حديث عن موضوع",
    instruction: "اختر موضوعاً وتحدث عنه بجمل مركبة (رأي + أسباب + أمثلة):",
    questions: [
      { de: "Sollte man im Internet seine Meinung frei äußern dürfen?", ar: "هل يجب أن يكون التعبير عن الرأي حراً على الإنترنت؟" },
      { de: "Welche Rolle spielt Technik in unserem Leben?", ar: "ما دور التقنية في حياتنا؟" },
      { de: "Wie kann man die Umwelt besser schützen?", ar: "كيف يمكن حماية البيئة أفضل؟" },
      { de: "Ist es wichtig, Fremdsprachen zu lernen?", ar: "هل تعلم اللغات الأجنبية مهم؟" },
    ],
  },
  {
    id: "teil3",
    title: "الجزء 3 — حل مشكلة",
    instruction: "اقترح حلولاً لمشكلة (عرض 2-3 أفكار مع تبرير):",
    questions: [
      { de: "Ein Freund ist immer gestresst. Was schlagen Sie vor?", ar: "صديقك متوتر دائماً. ماذا تقترح؟" },
      { de: "In Ihrer Stadt gibt es zu viel Verkehr. Was kann man tun?", ar: "في مدينتك ازدحام مرور كبير. ماذا يمكن أن يُفعل؟" },
      { de: "Jemand möchte in Deutschland studieren. Welche Tipps geben Sie?", ar: "شخص يريد الدراسة في ألمانيا. ما نصائحك؟" },
    ],
  },
];

/**
 * محاكي الامتحان الشفهي — يسجل المتعلم إجاباته ثم يراجعها
 */
export function MündlichePrüfung() {
  const [teilIdx, setTeilIdx] = React.useState(0);
  const [questionIdx, setQuestionIdx] = React.useState(0);
  const [mode, setMode] = React.useState<"listening" | "recording" | "review">("listening");
  const [transcript, setTranscript] = React.useState("");
  const [recognition, setRecognition] = React.useState<RecognitionEngine | null>(null);
  const [supported, setSupported] = React.useState(true);
  const [attempts, setAttempts] = React.useState(0);
  const [written, setWritten] = React.useState("");

  const teil = PRÜFUNG[teilIdx];
  const question = teil.questions[questionIdx];

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

  const nextQuestion = () => {
    setTranscript("");
    setWritten("");
    setMode("listening");
    if (questionIdx + 1 >= teil.questions.length) {
      if (teilIdx + 1 >= PRÜFUNG.length) return;
      setTeilIdx((t) => t + 1);
      setQuestionIdx(0);
    } else {
      setQuestionIdx((q) => q + 1);
    }
  };

  const reset = () => {
    setTeilIdx(0);
    setQuestionIdx(0);
    setTranscript("");
    setWritten("");
    setMode("listening");
    setAttempts(0);
  };

  const totalQuestions = PRÜFUNG.reduce((s, t) => s + t.questions.length, 0);
  const currentIndex = PRÜFUNG.slice(0, teilIdx).reduce((s, t) => s + t.questions.length, 0) + questionIdx;

  return (
    <div className="space-y-5">
      {/* تقدم الأجزاء */}
      <div className="flex flex-wrap gap-1.5">
        {PRÜFUNG.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => {
              setTeilIdx(i);
              setQuestionIdx(0);
              setTranscript("");
              setWritten("");
              setMode("listening");
            }}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors",
              i === teilIdx
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-background hover:border-primary/50",
            )}
          >
            {t.title}
          </button>
        ))}
      </div>

      {/* السؤال الحالي */}
      <div className="rounded-xl border bg-muted/20 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-bold text-muted-foreground">
            سؤال {currentIndex + 1} / {totalQuestions}
          </p>
          <Progress value={((currentIndex + 1) / totalQuestions) * 100} className="h-1.5 w-32" aria-hidden="true" />
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <p className="font-de text-lg font-bold" dir="ltr" lang="de">
              {question.de}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{question.ar}</p>
          </div>
          <SpeakButton text={question.de} variant="outline" />
        </div>
      </div>

      {/* نطق */}
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
        <Button variant="outline" onClick={nextQuestion} className="gap-1.5">
          السؤال التالي
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
        </Button>
      </div>

      {/* الرد المسجل */}
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

      {/* خيار الكتابة */}
      {mode !== "recording" && (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={written}
            onChange={(e) => setWritten(e.target.value)}
            placeholder="...أو اكتب إجابتك هنا"
            dir="ltr"
            lang="de"
            aria-label="إجابتك المكتوبة"
            className="font-de h-10 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
          />
          <Button variant="secondary" size="sm" onClick={() => setMode("review")}>
            حفظ
          </Button>
        </div>
      )}

      {!supported && <p className="text-sm text-muted-foreground">⚠️ {unsupportedRecognitionNote()}</p>}

      {/* نصيحة */}
      <div className="flex items-start gap-2 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
        <Users className="mt-0.5 h-4 w-4 shrink-0 text-gold-foreground" aria-hidden="true" />
        <p>
          <span className="font-bold">نصيحة للممتحن: </span>
          في الامتحان الحقيقي يُقيَّم: النطق، السلاسة، استخدام جمل مركبة (Relativsatz + weil + Konjunktiv II)،
          والتفاعل مع الممتحن. أجب بجمل كاملة وليس بكلمة واحدة — واستخدم «Meiner Meinung nach...» لرأيك.
        </p>
      </div>

      {/* ملخص */}
      {teilIdx === PRÜFUNG.length - 1 && questionIdx === teil.questions.length - 1 && (
        <div className="rounded-xl border border-success/40 bg-success/10 p-4 text-center">
          <CheckCircle2 className="mx-auto h-8 w-8 text-success" aria-hidden="true" />
          <p className="mt-2 font-bold">أكملت محاكاة الامتحان الشفهي! 🎉</p>
          <p className="mt-1 text-sm text-muted-foreground">
            أعد المحاكاة بأسئلة مختلفة، أو انتقل لنظام الاختبارات الكامل (المرحلة 10).
          </p>
          <Button variant="outline" size="sm" className="mt-3" onClick={reset}>
            إعادة المحاكاة
          </Button>
        </div>
      )}
    </div>
  );
}
