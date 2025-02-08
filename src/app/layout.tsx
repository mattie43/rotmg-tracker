import type { Metadata } from "next";
import { Loading, Toolbar } from "@/components";
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
      <body className="flex flex-col flex-1">
        <TooltipProvider delayDuration={200}>
          <Toolbar />
          {children}
          <Loading />
        </TooltipProvider>
      </body>
    </html>
  );
}
