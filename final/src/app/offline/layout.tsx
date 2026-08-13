import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أنت غير متصل — DeutschPfad",
  description: "الدروس التي زرتها محفوظة على جهازك وتعمل دون اتصال بالإنترنت.",
};

export default function OfflineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
