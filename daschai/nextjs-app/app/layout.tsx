import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OX-Alpha Workbench Pro | AI Engineering & GitHub Copilot",
  description: "Autonomous Full-Stack AI Engineer and GitHub Copilot with Multimodal OCR and Offline PWA support",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark-dimmed.min.css"
        />
      </head>
      <body className="antialiased bg-[#0b0f19] text-gray-100">{children}</body>
    </html>
  );
}
