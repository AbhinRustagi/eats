import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
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
      <body className={`${satoshi.className} antialiased`}>
        <main className="mx-auto max-w-4xl px-3 my-12">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
