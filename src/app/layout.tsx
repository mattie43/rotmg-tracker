import type { Metadata } from "next";
import { Loading, Sidepanel } from "@/components";
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
      <body className="flex flex-1">
        <TooltipProvider delayDuration={200}>
          <Sidepanel />
          <div className="flex flex-1 py-2 px-12">{children}</div>
          <Loading />
        </TooltipProvider>
      </body>
    </html>
  );
}
