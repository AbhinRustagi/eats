import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  weight: "variable",
  subsets: ["latin"],
  variable: "--inter-tight",
});

export const metadata: Metadata = {
  title: "Eats | Abhin Rustagi",
  description: "A project by Abhin Rustagi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} antialiased`}>{children}</body>
    </html>
  );
}
