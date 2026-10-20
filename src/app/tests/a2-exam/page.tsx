import type { Metadata } from "next";

import { GoetheA1Exam } from "@/components/tests/goethe-a1-exam";

export const metadata: Metadata = {
  title: "نموذج تدريبي A2 — DeutschPfad",
  description:
    "نموذج تدريبي بنية Goethe A2: استماع مسجّل، وقراءة مصحّحة آلياً، وكتابة وتحدث تقيّمهما بنفسك. ليس امتحاناً رسمياً.",
};

export default function A2ExamPage() {
  return <GoetheA1Exam level="A2" />;
}
