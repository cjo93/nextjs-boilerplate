import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site/chrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEFRAG — The clarity layer for real life",
  description:
    "Personal and relational clarity for understanding yourself, reading the moment, and navigating relationships with less confusion.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
