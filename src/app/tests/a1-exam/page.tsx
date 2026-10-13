import type { Metadata } from "next";

import { GoetheA1Exam } from "@/components/tests/goethe-a1-exam";

export const metadata: Metadata = {
  title: "نموذج تدريبي A1 — DeutschPfad",
  description:
    "نموذج تدريبي بنية Start Deutsch 1: استماع مسجّل، وقراءة مصحّحة آلياً، وكتابة تقيّمها بنفسك. ليس امتحاناً رسمياً.",
};

export default function A1ExamPage() {
  return <GoetheA1Exam />;
}
