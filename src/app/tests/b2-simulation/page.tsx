import type { Metadata } from "next";

import {B2SimulationClient} from "@/components/tests/b2-simulation";

export const metadata: Metadata = {
  title: "محاكاة Goethe-B2 — DeutschPfad",
  description:
    "تدريب تجريبي كامل ببنية امتحان Goethe-Zertifikat B2: قراءة 65د، استماع 40د، كتابة 75د، تحدث 15د — مع rubrics للمراجعة الذاتية. ليس امتحاناً رسمياً.",
};

export default function B2SimulationPage() {
  return <B2SimulationClient />;
}
