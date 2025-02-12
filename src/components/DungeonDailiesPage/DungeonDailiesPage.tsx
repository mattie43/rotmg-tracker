"use client";

import { DUNGEONS_OBJ } from "@/constants";
import { useStore } from "@/hooks";
import { Info } from "lucide-react";
import { DailyDungeon } from "./DailyDungeon";

export const DungeonDailiesPage = () => {
  const { store } = useStore();
  const dungeons = store?.dungeonDailies;

  const info =
    "Clicking on a dungeon name will bring you to the wiki page. Click on the dungeon image to remove the dungeon from your list. Dungeon display settings are copied from the dungeons page.";

  return (
    <div className="flex flex-col flex-1 overflow-auto p-4 gap-8">
      <div className="flex gap-4 px-24 items-center justify-center text-center">
        <span>
          <Info />
        </span>
        <p>{info}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 min-w-[600px]">
        {dungeons?.map((dungeon, index) => (
          <DailyDungeon
            key={`${dungeon}-${index}`}
            dungeon={DUNGEONS_OBJ[dungeon]}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
