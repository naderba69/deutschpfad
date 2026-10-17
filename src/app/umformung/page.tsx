import type { Metadata } from "next";

import {UmformungClient} from "@/components/grammar/umformung-client";

export const metadata: Metadata = {
  title: "تحويل الأزمنة — DeutschPfad",
  description:
    "تمرين تحويل الجمل بين الأزمنة (Umformung) — مهارة جوهرية في Goethe B1/B2 مع تصحيح ذكي. مجاني 100% بلا خادم.",
};

export default function UmformungPage() {
  return <UmformungClient />;
}
