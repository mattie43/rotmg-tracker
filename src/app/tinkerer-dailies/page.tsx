import { DailiesPanel, DailiesPage } from "@/components";

export default function page() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <DailiesPanel />
      <DailiesPage />
    </div>
  );
}
