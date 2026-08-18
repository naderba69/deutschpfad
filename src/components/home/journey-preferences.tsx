"use client";

import * as React from "react";
import {Settings2} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {getPreferences, savePreferences, type LearningGoal, type StudyPace} from "@/lib/storage/preferences";
import {getPersonality, setPersonality, PERSONALITY_META, type TeacherPersonality} from "@/lib/storage/teacher-personality";

const GOALS: { id: LearningGoal; label: string; emoji: string }[] = [
  { id: "travel", label: "سفر", emoji: "✈️" },
  { id: "work", label: "عمل", emoji: "💼" },
  { id: "study", label: "دراسة", emoji: "🎓" },
  { id: "exam", label: "امتحان Goethe", emoji: "📜" },
];

const PACES: { id: StudyPace; label: string; daily: string }[] = [
  { id: "intensive", label: "مكثفة", daily: "45-60 د" },
  { id: "medium", label: "متوسطة", daily: "20-30 د" },
  { id: "slow", label: "بطيئة", daily: "10-15 د" },
];

/**
 * ═══════════════════════════════════════════════════════════
 *  تخصيص رحلتك — الهدف (سفر/عمل/دراسة/امتحان) + الوتيرة
 *  + شخصية المعلّم (رسمي/ودّي/صارم)
 *  تُحفظ وتؤثر على النبرة والاقتراحات (الواجهة جاهزة للربط).
 * ═══════════════════════════════════════════════════════════
 */
export function JourneyPreferences() {
  const [goal, setGoal] = React.useState<LearningGoal | null>(null);
  const [pace, setPace] = React.useState<StudyPace | null>(null);
  const [personality, setPersonality] = React.useState<TeacherPersonality | null>(null);
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    void (async () => {
      const prefs = await getPreferences();
      const p = await getPersonality();
      setGoal(prefs.goal);
      setPace(prefs.pace);
      setPersonality(p);
    })();
  }, []);

  const save = async () => {
    if (goal && pace) await savePreferences({ goal, pace });
    if (personality) await setPersonality(personality);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Card className="overflow-hidden border-muted">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Settings2 className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-extrabold">تخصيص رحلتك</h3>
            <p className="text-xs text-muted-foreground">هدفك + وتيرتك + نبرة معلّمك — كلها مجانية.</p>
          </div>
        </div>

        {/* الهدف */}
        <div>
          <p className="mb-1.5 text-xs font-bold text-muted-foreground">هدفي الأساسي</p>
          <div className="flex flex-wrap gap-1.5">
            {GOALS.map((g) => (
              <button type="button"
                key={g.id}
                                onClick={() => setGoal(g.id)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  goal === g.id ? "border-primary bg-primary/10 text-primary" : "border-muted bg-card hover:border-primary/40"
                }`}
              >
                {g.emoji} {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* الوتيرة */}
        <div>
          <p className="mb-1.5 text-xs font-bold text-muted-foreground">وتيرتي</p>
          <div className="flex flex-wrap gap-1.5">
            {PACES.map((p) => (
              <button type="button"
                key={p.id}
                                onClick={() => setPace(p.id)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  pace === p.id ? "border-gold bg-gold/10 text-gold-strong" : "border-muted bg-card hover:border-gold/40"
                }`}
              >
                {p.label} <span className="text-muted-foreground">({p.daily})</span>
              </button>
            ))}
          </div>
        </div>

        {/* شخصية المعلّم */}
        <div>
          <p className="mb-1.5 text-xs font-bold text-muted-foreground">شخصية معلّمك</p>
          <div className="flex flex-wrap gap-1.5">
            {(Object.keys(PERSONALITY_META) as TeacherPersonality[]).map((t) => (
              <button type="button"
                key={t}
                                onClick={() => setPersonality(t)}
                title={PERSONALITY_META[t].desc}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  personality === t ? "border-success bg-success/10 text-success" : "border-muted bg-card hover:border-success/40"
                }`}
              >
                {PERSONALITY_META[t].emoji} {PERSONALITY_META[t].label}
              </button>
            ))}
          </div>
        </div>

        <Button onClick={save} size="sm" className="w-full gap-1.5" disabled={!goal || !pace || !personality}>
          {saved ? "✓ حُفظ" : "احفظ تخصيصاتي"}
        </Button>
      </CardContent>
    </Card>
  );
}
