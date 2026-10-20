import type { Metadata } from "next";

import { GoetheA1Exam } from "@/components/tests/goethe-a1-exam";

export const metadata: Metadata = {
  title: "نموذج تدريبي B1 — DeutschPfad",
  description:
    "نموذج تدريبي بنية Goethe B1: استماع مسجّل، وقراءة مصحّحة آلياً، وكتابة وتحدث تقيّمهما بنفسك. ليس امتحاناً رسمياً.",
};

export default function B1ExamPage() {
  return <GoetheA1Exam level="B1" />;
}
