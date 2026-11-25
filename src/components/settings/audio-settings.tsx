"use client";

import * as React from "react";
import {Gauge, Volume2, VolumeX} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {getPreferredRate, isSfxEnabledPref, setPreferredRate, setSfxEnabledPref} from "@/lib/preferences/audio";
import {initSfx, playCorrect, setSfxEnabled} from "@/lib/audio/sfx";
import {speakGerman, stopSpeaking} from "@/lib/speech/voices";
import {isAiVoiceEnabled, setAiVoiceEnabled} from "@/lib/speech/ai-tts";
import {cn} from "@/lib/utils";

const RATES = [
  { value: 0.5, label: "بطيء جداً" },
  { value: 0.75, label: "بطيء" },
  { value: 1, label: "عادي" },
  { value: 1.25, label: "سريع" },
];

/** إعدادات الصوت: سرعة الاستماع العامة + المؤثرات */
export function AudioSettings() {
  const [rate, setRate] = React.useState(1);
  const [sfx, setSfx] = React.useState(true);
  const [aiVoice, setAiVoice] = React.useState(false);

  React.useEffect(() => {
    setRate(getPreferredRate());
    setSfx(isSfxEnabledPref());
    setAiVoice(isAiVoiceEnabled());
    initSfx();
  }, []);

  const changeRate = (r: number) => {
    setRate(r);
    setPreferredRate(r);
  };

  const toggleAiVoice = () => {
    const next = !aiVoice;
    setAiVoice(next);
    setAiVoiceEnabled(next);
  };

  const toggleSfx = () => {
    const next = !sfx;
    setSfx(next);
    setSfxEnabledPref(next);
    setSfxEnabled(next);
    if (next) playCorrect();
  };

  const testSpeak = () => {
    stopSpeaking();
    speakGerman("Guten Tag! Wie geht es dir?", { rate });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Volume2 className="h-4 w-4 text-primary" aria-hidden="true" />
          إعدادات الصوت والاستماع
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* سرعة الاستماع */}
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-sm font-bold">
            <Gauge className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            سرعة الاستماع المفضلة
            <span className="text-xs font-normal text-muted-foreground">— تطبق على كل أزرار «استمع» في المنصة</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {RATES.map((r) => (
              <button
                key={r.value}
                type="button"
                onClick={() => changeRate(r.value)}
                className={cn(
                  "rounded-xl border px-3 py-2 text-xs font-bold transition-colors",
                  Math.abs(rate - r.value) < 0.01
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted bg-muted/30 text-muted-foreground hover:border-primary/40",
                )}
              >
                {r.label}
                <span className="font-de ms-1 ">×{r.value}</span>
              </button>
            ))}
          </div>
          <Button size="sm" variant="outline" className="mt-2 gap-1.5" onClick={testSpeak}>
            <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
            جرّب السرعة
          </Button>
        </div>

        {/* الصوت الذكي (اختياري) */}
        <div className="flex items-center justify-between gap-3 rounded-xl border bg-muted/30 p-3">
          <div>
            <p className="flex items-center gap-1.5 text-sm font-bold">
              <Volume2 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              الصوت الذكي للجمل القصيرة
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              صوت آلي مولَّد لا تسجيل بشري. يُرسل النص القصير إلى الخادم ويُحسب ضمن السقف اليومي للمنصة. عند التعذّر يعود الصوت إلى المتصفح. الافتراضي: مغلق.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-label="الصوت الذكي للجمل القصيرة"
            aria-checked={aiVoice}
            onClick={toggleAiVoice}
            className="relative inline-flex h-8 w-11 shrink-0 items-center"
          >
            <span
              aria-hidden="true"
              className={cn("absolute inset-x-0 top-1 h-6 rounded-full transition-colors", aiVoice ? "bg-success" : "bg-muted")}
            />
            <span
              aria-hidden="true"
              className={cn("absolute top-1.5 start-0.5 h-5 w-5 rounded-full bg-white shadow transition-all", aiVoice && "translate-x-5")}
            />
          </button>
        </div>

        {/* المؤثرات الصوتية */}
        <div className="flex items-center justify-between gap-3 rounded-xl border bg-muted/30 p-3">
          <div>
            <p className="flex items-center gap-1.5 text-sm font-bold">
              {sfx ? <Volume2 className="h-4 w-4 text-success" aria-hidden="true" /> : <VolumeX className="h-4 w-4 text-muted-foreground" aria-hidden="true" />}
              المؤثرات الصوتية
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              أصوات قصيرة عند الإجابة الصحيحة/الخاطئة والإنجازات — يمكن إيقافها للهدوء.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-label="المؤثرات الصوتية"
            aria-checked={sfx}
            onClick={toggleSfx}
            className="relative inline-flex h-8 w-11 shrink-0 items-center"
          >
            {/* المفتاح المرئي 24px، لكن مساحة اللمس 32px (الزر كله) */}
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-x-0 top-1 h-6 rounded-full transition-colors",
                sfx ? "bg-success" : "bg-muted",
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "absolute top-1.5 start-0.5 h-5 w-5 rounded-full bg-white shadow transition-all",
                sfx && "translate-x-5",
              )}
            />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
