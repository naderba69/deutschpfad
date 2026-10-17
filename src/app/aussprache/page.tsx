import type { Metadata } from "next";

import { AussprachePractice } from "@/components/speech/aussprache-practice";

export const metadata: Metadata = {
  title: "تدريب النطق — DeutschPfad",
  description: "أزواج صوتية متشابهة في الألمانية، مع تسجيل صوتك ومقارنته بالنطق.",
};

export default function AusspracheRoute() {
  return <AussprachePractice />;
}
