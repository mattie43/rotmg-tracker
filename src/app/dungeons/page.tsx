import { DungeonsPage, DungeonsPanel } from "@/components";

export default function page() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <DungeonsPanel />
      <DungeonsPage />
    </div>
  );
}
