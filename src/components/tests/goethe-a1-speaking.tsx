"use client";

/**
 * تدريب التحدث A1 — المتعلم يتدرب وحده.
 * جمل الشريك تُقرأ بصوت الجهاز، ثم تحاول أنت بصوتك،
 * وبعدها تكشف العبارة النموذجية وتراجع نفسك بقائمة الفحص.
 */

import * as React from "react";

import { Button } from "@/components/ui/button";
import { A1_SPRECHEN, type A1SpeakingPart } from "@/data/exams/a1-sprechen";

function speakDe(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "de-DE";
  u.rate = 0.9;
  const voices = window.speechSynthesis.getVoices();
  const gv = voices.find((v) => v.lang === "de-DE") ?? voices.find((v) => v.lang.startsWith("de"));
  if (gv) u.voice = gv;
  window.speechSynthesis.speak(u);
}

/** تشغيل تسجيل بشري لجملة الشريك؛ إن تعذّر ذلك (الملف غير موجود) نرجع لصوت الجهاز */
function playPartnerClip(src: string | undefined, fallbackText: string) {
  if (!src) return speakDe(fallbackText);
  const audio = new Audio(src);
  audio.onerror = () => speakDe(fallbackText);
  void audio.play().catch(() => speakDe(fallbackText));
}

export function GoetheA1Speaking({
  onDone,
  parts = A1_SPRECHEN,
  audioBase,
}: {
  onDone?: () => void;
  parts?: A1SpeakingPart[];
  /** مجلد تسجيلات الشريك، مثل /audio/speaking-a2. الملف: t<الجزء>-<رقم الجملة>.mp3 */
  audioBase?: string;
}) {
  const SPEAKING = parts;
  const [partIdx, setPartIdx] = React.useState(0);
  const [turnIdx, setTurnIdx] = React.useState(0);
  const [revealed, setRevealed] = React.useState(false);
  const [checked, setChecked] = React.useState<Record<string, boolean>>({});

  const part = SPEAKING[partIdx];
  const turn = part.turns[turnIdx];
  const lastTurn = turnIdx === part.turns.length - 1;
  const lastPart = partIdx === SPEAKING.length - 1;

  const next = () => {
    setRevealed(false);
    if (!lastTurn) return setTurnIdx((i) => i + 1);
    setTurnIdx(0);
    setChecked({});
    if (!lastPart) setPartIdx((i) => i + 1);
    else onDone?.();
  };

  const isPartDone = lastTurn && revealed;

  return (
    <section className="space-y-4 rounded-2xl border bg-card p-5" dir="rtl">
      <header className="space-y-1">
        <h2 className="font-extrabold">{part.titleAr}</h2>
        <p className="text-sm text-muted-foreground">{part.instructionAr}</p>
        <p className="text-xs text-muted-foreground">
          الجزء {partIdx + 1} من {SPEAKING.length} · الجملة {turnIdx + 1} من {part.turns.length}
        </p>
      </header>

      <div className="space-y-2 rounded-xl bg-muted p-3">
        <p className="font-de text-sm font-semibold" dir="ltr" lang="de">{turn.partnerDe}</p>
        <p className="text-xs text-muted-foreground">{turn.partnerAr}</p>
        <Button variant="outline" size="sm" onClick={() =>
            playPartnerClip(audioBase ? `${audioBase}/t${part.teil}-${turnIdx + 1}.mp3` : undefined, turn.partnerDe)
          }>
          🔊 استمع لشريكك
        </Button>
      </div>

      <div className="space-y-2">
        <p className="text-sm">قل جوابك بصوت عالٍ، ثم اضغط «أظهر العبارة النموذجية» لتقارن.</p>
        {!revealed ? (
          <Button onClick={() => setRevealed(true)}>أظهر العبارة النموذجية</Button>
        ) : (
          <div className="space-y-2 rounded-xl border border-primary/30 bg-primary/5 p-3">
            <p className="font-de text-sm font-semibold" dir="ltr" lang="de">{turn.modelDe}</p>
            <p className="text-xs text-muted-foreground">{turn.modelAr}</p>
            <Button variant="outline" size="sm" onClick={() =>
                playPartnerClip(audioBase ? `${audioBase}/m${part.teil}-${turnIdx + 1}.mp3` : undefined, turn.modelDe)
              }>
              🔊 استمع للعبارة النموذجية
            </Button>
          </div>
        )}
      </div>

      {isPartDone && (
        <div className="space-y-2">
          <p className="text-sm font-bold">راجع نفسك بعد الجزء:</p>
          {part.checklistAr.map((item) => (
            <label key={item} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={!!checked[item]}
                onChange={(e) => setChecked((c) => ({ ...c, [item]: e.target.checked }))}
              />
              {item}
            </label>
          ))}
        </div>
      )}

      {revealed && (
        <Button onClick={next}>
          {lastTurn ? (lastPart ? "إنهاء التحدث" : "الجزء التالي") : "الجملة التالية"}
        </Button>
      )}
    </section>
  );
}
