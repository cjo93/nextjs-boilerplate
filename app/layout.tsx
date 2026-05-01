import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader, SiteFooter } from "@/components/site/chrome";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-inter",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "DEFRAG — Human Intelligence Platform",
  description:
    "Healing isn't optional. But the pain is. DEFRAG helps you understand the why behind every interaction — your nature, the moment, and the person across from you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${dmSerifDisplay.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <SpeedInsights />
      </body>
    </html>
  );
}
