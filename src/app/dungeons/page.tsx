"use client";

import { DungeonPanel, DungeonPage } from "@/components";

export default function page() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <DungeonPanel />
      <DungeonPage />
    </div>
  );
}
