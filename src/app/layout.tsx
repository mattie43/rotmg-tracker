import type { Metadata } from "next";
import { Toolbar } from "@/components";
import { TooltipProvider } from "@/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROTMG Tracker",
  description: "Track dungeons, dailies, and events in ROTMG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-1 flex-col">
        <TooltipProvider delayDuration={200}>
          <Toolbar />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
