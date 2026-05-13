import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontier Tesla — San Francisco's Premier Tesla Rental",
  description:
    "Subscribe to a 2025 Tesla Model 3 with Full Self-Drive in San Francisco. No lines. No paperwork. Just drive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
