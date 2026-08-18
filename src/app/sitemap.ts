import type { MetadataRoute } from "next";

import { LESSON_META } from "@/data/lessons/meta";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/dashboard", priority: 0.9 },
    { path: "/dashboard/review", priority: 0.8 },
    { path: "/dashboard/five-minutes", priority: 0.7 },
    { path: "/gamification", priority: 0.8 },
    { path: "/learning-path", priority: 0.9 },
    { path: "/tests", priority: 0.9 },
    { path: "/tests/placement", priority: 0.8 },
    { path: "/tests/sprechen", priority: 0.6 },
    { path: "/tests/weekly", priority: 0.6 },
    { path: "/tests/level/a1", priority: 0.7 },
    { path: "/tests/level/a2", priority: 0.7 },
    { path: "/tests/level/b1", priority: 0.7 },
    { path: "/tests/level/b2", priority: 0.7 },
    { path: "/ai-tools", priority: 0.8 },
    { path: "/grammatik", priority: 0.8 },
    { path: "/glossar", priority: 0.7 },
    { path: "/reading", priority: 0.7 },
    { path: "/tageskapsel", priority: 0.5 },
    { path: "/alltag", priority: 0.6 },
    { path: "/redewendungen", priority: 0.6 },
    { path: "/dialogues", priority: 0.6 },
    { path: "/forms", priority: 0.5 },
    { path: "/strategien", priority: 0.5 },
    { path: "/redemittel", priority: 0.8 },
    { path: "/schreibmodelle", priority: 0.8 },
    { path: "/schreib-bewertung", priority: 0.8 },
    { path: "/wortschatz-b2", priority: 0.8 },
    { path: "/umschreibungen", priority: 0.8 },
    { path: "/sprechtraining", priority: 0.8 },
    { path: "/diktate", priority: 0.7 },
    { path: "/satzbau", priority: 0.7 },
    { path: "/offline-review", priority: 0.5 },
    { path: "/dashboard/report", priority: 0.4 },
    { path: "/faq", priority: 0.6 },
    { path: "/hoeren", priority: 0.8 },
    { path: "/tests/vollpruefung", priority: 0.9 },
    { path: "/tests/seal/a1", priority: 0.9 },
    { path: "/tests/seal/a2", priority: 0.9 },
    { path: "/tests/seal/b1", priority: 0.9 },
    { path: "/tests/seal/b2", priority: 0.9 },
    { path: "/flashcards", priority: 0.8 },
    { path: "/placement", priority: 0.7 },
    { path: "/verben", priority: 0.6 },
    { path: "/assistant", priority: 0.7 },
    { path: "/settings", priority: 0.3 },
    { path: "/design-system", priority: 0.4 },
    // ═══ الصفحات الجديدة (2026-08) ═══
    { path: "/stories", priority: 0.8 },
    { path: "/podcasts", priority: 0.7 },
    { path: "/landeskunde", priority: 0.7 },
    { path: "/writing-path", priority: 0.8 },
    { path: "/review/weekly", priority: 0.7 },
    { path: "/review/monthly", priority: 0.7 },
    { path: "/dashboard/competencies", priority: 0.7 },
    { path: "/error-notebook", priority: 0.6 },
    { path: "/sentence-review", priority: 0.7 },
    { path: "/level/a1", priority: 0.9 },
    { path: "/level/a2", priority: 0.9 },
    { path: "/level/b1", priority: 0.9 },
    { path: "/level/b2", priority: 0.9 },
    { path: "/sound-check", priority: 0.4 },
    { path: "/offline", priority: 0.3 },
  ];

  // إضافة الدروس الـ45 (المحتوى الأساسي) — الأولوية حسب المستوى
  const levelPriority: Record<string, number> = { A1: 0.8, A2: 0.8, B1: 0.7, B2: 0.7 };
  const lessonRoutes = LESSON_META.map((lesson) => ({
    path: `/lesson/${lesson.id}`,
    priority: levelPriority[lesson.level] ?? 0.7,
  }));

  return [...routes, ...lessonRoutes].map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}
