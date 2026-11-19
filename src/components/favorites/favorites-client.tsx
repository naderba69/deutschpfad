"use client";

import * as React from "react";
import Link from "next/link";
import { BookOpen, Star, Type } from "lucide-react";

import { FavoriteButton } from "@/components/shared/favorite-button";
import { SpeakButton } from "@/components/shared/speak-button";
import { useFavorites } from "@/lib/storage/use-favorites";
import { LESSON_META } from "@/data/lessons/meta";

/**
 * عرض المفضلة — الدروس المحفوظة والكلمات المحفوظة.
 * الدروس تربط بصفحاتها؛ الكلمات تعرض مع نطق.
 */
export function FavoritesClient() {
  const { items } = useFavorites();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="space-y-4" aria-busy="true">
        <div className="h-24 animate-pulse rounded-xl border bg-muted/30" />
        <div className="h-24 animate-pulse rounded-xl border bg-muted/30" />
      </div>
    );
  }

  const lessons = items.filter((i) => i.kind === "lesson");
  const words = items.filter((i) => i.kind === "word");

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed bg-muted/20 p-10 text-center">
        <Star className="mx-auto h-10 w-10 text-muted-foreground" aria-hidden="true" />
        <p className="mt-4 text-lg font-bold">لا مفضلة بعد</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          اضغط زر النجمة بجانب أي درس أثناء تصفحه، أو بجانب أي كلمة في البطاقات،
          لحفظها هنا والعودة إليها بسرعة.
        </p>
        <Link
          href="/learning-path"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          تصفح مسار التعلم
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {lessons.length > 0 && (
        <section aria-label="الدروس المفضلة">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold">
            <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
            الدروس المفضلة
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-bold text-muted-foreground">
              {lessons.length}
            </span>
          </h2>
          <ul className="divide-y rounded-xl border bg-card">
            {lessons.map((item) => {
              const meta = LESSON_META.find((m) => m.id === item.id);
              return (
                <li key={item.id} className="flex items-center justify-between gap-3 p-4">
                  <Link
                    href={`/lesson/${item.id}`}
                    className="group min-w-0 flex-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <p className="flex flex-wrap items-center gap-2">
                      {meta?.titleDe && (
                        <span className="font-de font-bold group-hover:text-primary" dir="ltr" lang="de">
                          {meta.titleDe}
                        </span>
                      )}
                      {meta?.level && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                          {meta.level}
                        </span>
                      )}
                    </p>
                    <p className="mt-0.5 truncate text-sm text-muted-foreground">
                      {meta?.titleAr ?? item.label ?? item.id}
                    </p>
                  </Link>
                  <FavoriteButton kind="lesson" id={item.id} label={item.label} size="sm" />
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {words.length > 0 && (
        <section aria-label="الكلمات المفضلة">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold">
            <Type className="h-5 w-5 text-primary" aria-hidden="true" />
            الكلمات المفضلة
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-bold text-muted-foreground">
              {words.length}
            </span>
          </h2>
          <ul className="divide-y rounded-xl border bg-card">
            {words.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-3 p-4">
                <div className="flex min-w-0 items-center gap-3">
                  <SpeakButton text={item.id} size="sm" className="h-8 w-8 shrink-0" />
                  <div className="min-w-0">
                    <p className="font-de font-bold" dir="ltr" lang="de">
                      {item.id}
                    </p>
                    {item.label && (
                      <p className="truncate text-sm text-muted-foreground">{item.label}</p>
                    )}
                  </div>
                </div>
                <FavoriteButton kind="word" id={item.id} label={item.label} size="sm" />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
