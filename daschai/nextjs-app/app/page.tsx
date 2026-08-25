"use client";

import dynamic from "next/dynamic";

const ChatInterface = dynamic(
  () => import("@/components/ChatInterface").then((mod) => mod.ChatInterface),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <ChatInterface />
    </main>
  );
}
