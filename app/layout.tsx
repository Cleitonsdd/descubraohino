import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiz Hinos",
  description: "Acerte o hino e suba de nível",
  manifest: "/manifest.json", // Isso resolve o erro "No manifest detected"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="theme-color" content="#eab308" />
        <link rel="apple-touch-icon" href="/images/icon-192x192.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}