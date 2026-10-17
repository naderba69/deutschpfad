"use client";

import * as React from "react";
import {Search} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {EVERYDAY_PHRASES} from "@/data/supplemental/content";

/**
 * عبارات الحياة اليومية — قابلة للبحث مع نطق
 */
export function EverydayPhrases() {
  const [query, setQuery] = React.useState("");

  const filtered = EVERYDAY_PHRASES.filter(
    (p) =>
      p.de.toLowerCase().includes(query.toLowerCase()) ||
      p.ar.includes(query) ||
      p.situation.includes(query),
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ps-9"
          aria-label="البحث في العبارات"
        />
      </div>

      <Card>
        <CardContent className="p-2">
          <ul className="divide-y">
            {filtered.map((p, i) => (
              <li key={i} className="flex items-center justify-between gap-3 p-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-de font-bold" dir="ltr" lang="de">
                      {p.de}
                    </span>
                    <Badge variant="secondary" className="text-[11px]">
                      {p.situation}
                    </Badge>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">{p.ar}</p>
                </div>
                <SpeakButton text={p.de} variant="outline" size="sm" />
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="p-6 text-center text-sm text-muted-foreground">لا نتائج مطابقة.</li>
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
