import { EventsPage, EventsPanel } from "@/components";

export default function page() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <EventsPanel />
      <EventsPage />
    </div>
  );
}
