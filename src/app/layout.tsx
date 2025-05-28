import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-bricolage",
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
      <body className={`${inter.className} ${bricolage.variable} antialiased`}>
        <main className="mx-auto max-w-4xl px-3 my-12">{children}</main>
      </body>
    </html>
  );
}
