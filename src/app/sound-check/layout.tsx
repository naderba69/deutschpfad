import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "فحص الصوت والميكروفون",
  description:
    "تأكد أن مكبر الصوت والميكروفون يعملان قبل التدريب الصوتي والامتحان الشفهي.",
};

export default function SoundCheckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
