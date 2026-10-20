"use client";

import * as React from "react";
import {GraduationCap} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {DEFAULT_PERSONALITY, PERSONALITY_META, getPersonality, motivationalByPersonality, setPersonality, type TeacherPersonality} from "@/lib/storage/teacher-personality";
import {cn} from "@/lib/utils";

/**
 * اختيار شخصية المعلّم — رسمي / ودّي / صارم
 * (تؤثر على نبرة رسائل التحفيز)
 */
export function TeacherPersonalityCard() {
  const [personality, setPersonalityState] = React.useState<TeacherPersonality>(DEFAULT_PERSONALITY);
  const [sample, setSample] = React.useState("");

  React.useEffect(() => {
    void getPersonality().then((p) => {
      setPersonalityState(p);
      setSample(motivationalByPersonality(p, "success"));
    });
  }, []);

  const choose = (p: TeacherPersonality) => {
    setPersonalityState(p);
    void setPersonality(p);
    setSample(motivationalByPersonality(p, "success"));
  };

  return (
    <Card>
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
          اختر شخصية معلّمك
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {(Object.keys(PERSONALITY_META) as TeacherPersonality[]).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => choose(p)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-xl border p-4 text-center transition-all",
                personality === p
                  ? "border-primary bg-primary/10 ring-2 ring-ring"
                  : "bg-background hover:border-primary/40",
              )}
            >
              <span className="text-3xl" aria-hidden="true">
                {PERSONALITY_META[p].emoji}
              </span>
              <span className="font-bold">{PERSONALITY_META[p].label}</span>
              <span className="text-[11px] leading-tight text-muted-foreground">
                {PERSONALITY_META[p].desc}
              </span>
            </button>
          ))}
        </div>
        {sample && (
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm italic text-muted-foreground">
            «{sample}» — مثال على نبرة معلّمك
          </div>
        )}
      </CardContent>
    </Card>
  );
}
