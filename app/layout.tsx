import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clean the World | Premium Laundry & Cleaning Service",
  description: "Professional laundry, dry cleaning, and house cleaning services. We make your world shine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
