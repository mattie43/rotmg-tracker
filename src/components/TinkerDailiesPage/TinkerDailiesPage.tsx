"use client";

import { useStore } from "@/hooks";
import { DailyCard } from "./DailyCard";
import { Info } from "lucide-react";

export const DailiesPage = () => {
  const { store } = useStore();
  const tinkerDailies = store?.tinkerDailies;

  const info =
    "Select a tinker quest from the side panel to add it to your list. Clicking on a mark or reward item will bring you to the wiki page. Click on the 'X' will remove the quest from your list.";

  return (
    <div className="flex flex-wrap flex-1 justify-center content-start gap-4 min-w-[600px] p-4 overflow-auto">
      <div className="flex gap-4 px-24 items-center justify-center">
        <span>
          <Info />
        </span>
        <p>{info}</p>
      </div>
      {tinkerDailies?.map((quest, index) => (
        <DailyCard key={index} quest={quest} index={index} />
      ))}
    </div>
  );
};
