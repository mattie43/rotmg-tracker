"use client";

import { useStore, useEventTracker } from "@/hooks";
import { Info } from "lucide-react";
import { SingleEvent } from "./SingleEvent";
import { TopRealms } from "./TopRealms";

export const EventsPage = () => {
  const { store } = useStore();
  const { events, isLoading } = useEventTracker();
  const eventFilters = store?.eventFilters;
  const info =
    "Events refresh every 10 seconds. You can filter events by clicking on them in the side panel. All events are show by default. Top realm scores are not always accurate. You can collapse the top realms list by clicking on the chevron to the left.";

  const filteredEvents = events.filter(
    (event) => eventFilters?.length === 0 || eventFilters?.includes(event.name)
  );

  if (isLoading) {
    return <div className="flex flex-1 justify-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col flex-1 gap-4 p-4 overflow-auto">
      <div className="flex gap-4 px-24 items-center justify-center text-center">
        <span>
          <Info />
        </span>
        <p>{info}</p>
      </div>
      <TopRealms />
      <div className="flex flex-wrap gap-2 justify-center">
        {filteredEvents.map((event) => (
          <SingleEvent key={`${event.name}-${event.uid}`} event={event} />
        ))}
      </div>
    </div>
  );
};
