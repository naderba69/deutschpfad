import type { Metadata } from "next";

import {PodcastLibrary} from "@/components/podcasts/podcast-library";

export const metadata: Metadata = {
  title: "البودكاست التعليمي — DeutschPfad",
  description:
    "حلقات بودكاست قصيرة متدرجة A1→B2: استمع، اقرأ النص، وأجب عن أسئلة الفهم — تدريب الاستماع الممتد يبني الفهم الطبيعي للألمانية.",
};

export default function PodcastsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          🎧 البودكاست التعليمي
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          حلقات قصيرة مصممة لكل مستوى: استمع أولاً دون نص (فهم طبيعي)، ثم اقرأ النص،
          ثم أجب عن الأسئلة. في B1 وB2 تسمع آراء متعددة وتتدرب على تمييز مؤيد/معارض —
          كما في امتحان الاستماع Goethe.
        </p>
      </div>
      <PodcastLibrary />
    </div>
  );
}
