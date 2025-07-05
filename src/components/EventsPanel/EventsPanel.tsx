"use client";

import { EVENT_OPTIONS } from "@/constants";
import { useStore } from "@/hooks";
import { Button, Input } from "@/ui";
import { Search } from "lucide-react";
import { useState } from "react";

export const EventsPanel = () => {
  const { store, setStore } = useStore();
  const [search, setSearch] = useState("");

  const eventFilters = store?.eventFilters;
  const noHighlight = eventFilters?.length === 0;

  const handleAdd = (event: string) => {
    setStore((prev) => {
      if (eventFilters?.find((e) => e === event)) {
        return {
          ...prev,
          eventFilters: prev.eventFilters.filter((e) => e !== event),
        };
      } else {
        return {
          ...prev,
          eventFilters: [...prev.eventFilters, event],
        };
      }
    });
  };

  const events = EVENT_OPTIONS.filter((event) =>
    event.toLowerCase().includes(search.toLowerCase())
  ).sort((a, b) => {
    if (!eventFilters?.length) return 0;
    return eventFilters?.indexOf(b) - eventFilters?.indexOf(a);
  });

  return (
    <div className="flex flex-col border-r-2 border-primary p-4 overflow-auto min-w-[316px]">
      <div className="sticky top-0 bg-background shadow-md">
        <Input
          startIcon={<Search />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {events.map((event) => (
        <Button
          key={event}
          variant={"ghost"}
          className={`flex justify-start
            ${
              eventFilters?.find((e) => e === event)
                ? "text-chart-2"
                : "text-chart-5"
            }
            ${noHighlight ? "text-foreground" : ""}
          `}
          onClick={() => handleAdd(event)}
        >
          {event}
        </Button>
      ))}
    </div>
  );
};
