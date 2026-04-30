import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader, SiteFooter } from "@/components/site/chrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEFRAG — A personal canvas for clarity",
  description:
    "Understand how you are made. Read what a moment actually contains. See the world from the other side before the damage is done.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <SpeedInsights />
      </body>
    </html>
  );
}
