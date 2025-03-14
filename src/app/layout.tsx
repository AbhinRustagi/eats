import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const anonymous_pro = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-anonymous-pro",
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
      <body className={`${anonymous_pro.className} antialiased`}>
        <main className="mx-auto max-w-4xl px-3 my-12">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
