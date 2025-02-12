import { DungeonDailiesPage, DungeonDailiesPanel } from "@/components";

export default function page() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <DungeonDailiesPanel />
      <DungeonDailiesPage />
    </div>
  );
}
