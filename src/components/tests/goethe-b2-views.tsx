"use client";

/**
 * ═══════════════════════════════════════════════════════════
 *  عارضات محرّك B2 — مُستخرَجة من goethe-b2-exam.tsx (المرحلة 4)
 *  الجزء الواحد للقراءة/الاستماع + نطق TTS الألماني.
 *  النقل حرفيّ — لا تغيير في أي DOM أو نص.
 * ═══════════════════════════════════════════════════════════
 */
import {ExamAudioPlayer} from "@/components/tests/exam-audio-player";
import {ExamGapList, ExamMcqList, ExamStatementsList, ExamZuordnungList} from "@/components/tests/exam-question-views";
import type { ExamHoerenTeil, ExamLesenTeil } from "@/types/exam";
import type {ExamAudioSpec} from "@/data/exams/b2-hoeren-audio";

/** نطق نص ألماني عبر TTS */
export function speakText(text: string, rate = 0.95) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "de-DE";
  u.rate = rate;
  window.speechSynthesis.speak(u);
}

/* ════════════ الجزء الواحد من القراءة ════════════ */
export function LesenTeilView({
  teil,
  answers,
  onAnswer,
}: {
  teil: ExamLesenTeil;
  answers: Record<string, unknown>;
  onAnswer: (key: string, value: unknown) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border bg-muted/20 p-3 text-sm text-muted-foreground">{teil.introAr}</div>
      {teil.kind === "mcq" && teil.text && (
        <div className="rounded-xl border bg-card p-4">
          <p className="mb-2 text-xs font-bold text-primary">📄 النص</p>
          <div className="max-h-72 overflow-y-auto rounded-lg border bg-muted/20 p-3">
            <p className="text-sm leading-relaxed" dir="ltr" lang="de">{teil.text}</p>
          </div>
          {teil.textAr && <p className="mt-2 text-xs text-muted-foreground" dir="rtl">{teil.textAr}</p>}
        </div>
      )}
      {teil.kind === "gap" && teil.gap && (
        <ExamGapList
          gap={teil.gap}
          answers={answers as Record<number, string>}
          onAnswer={(gi, sid) => {
            if (!sid) {
              const next = { ...(answers as Record<number, string>) };
              delete next[gi];
              onAnswer("gap", next);
            } else {
              onAnswer("gap", { ...(answers as Record<number, string>), [gi]: sid });
            }
          }}
        />
      )}
      {teil.kind === "zuordnung" && teil.categories && teil.items && (
        <ExamZuordnungList
          categories={teil.categories}
          items={teil.items}
          allowRepeat={teil.allowRepeat ?? false}
          answers={answers as Record<string, string>}
          onAnswer={(itemId, catId) => onAnswer(itemId, catId)}
        />
      )}
      {teil.kind === "rf" && teil.statements && (
        <ExamStatementsList
          statements={teil.statements}
          answers={answers as Record<string, boolean>}
          onAnswer={(id, val) => onAnswer(id, val)}
        />
      )}
      {teil.kind === "mcq" && teil.questions && (
        <ExamMcqList
          questions={teil.questions}
          answers={answers as Record<string, number>}
          onAnswer={(id, idx) => onAnswer(id, idx)}
        />
      )}
    </div>
  );
}

/* ════════════ الجزء الواحد من الاستماع ════════════ */
export function HoerenTeilView({
  teil,
  audio,
  answers,
  onAnswer,
}: {
  teil: ExamHoerenTeil;
  audio: ExamAudioSpec;
  answers: Record<string, unknown>;
  onAnswer: (key: string, value: unknown) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border bg-muted/20 p-3 text-sm text-muted-foreground">{teil.introAr}</div>
      <ExamAudioPlayer spec={audio} />
      {teil.kind === "rf" && teil.statements && (
        <ExamStatementsList
          statements={teil.statements}
          answers={answers as Record<string, boolean>}
          onAnswer={(id, val) => onAnswer(id, val)}
        />
      )}
      {teil.kind === "mcq" && teil.questions && (
        <ExamMcqList
          questions={teil.questions}
          answers={answers as Record<string, number>}
          onAnswer={(id, idx) => onAnswer(id, idx)}
        />
      )}
      {teil.kind === "zuordnung" && teil.categories && teil.items && (
        <ExamZuordnungList
          categories={teil.categories}
          items={teil.items}
          allowRepeat={teil.allowRepeat ?? false}
          answers={answers as Record<string, string>}
          onAnswer={(itemId, catId) => onAnswer(itemId, catId)}
        />
      )}
      {teil.audioAr && <p className="text-xs text-muted-foreground">{teil.audioAr}</p>}
    </div>
  );
}
