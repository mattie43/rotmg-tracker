"use client";

import { SingleDungeon } from "./SingleDungeon";
import { ROTMG_COMBINED_DUNGEONS } from "@/constants";
import { TypeSort } from "./TypeSort";
import { useDungeonOptions } from "@/hooks";
import { FameSort } from "./FameSort";
import { Info } from "lucide-react";

const alphaSort = [...ROTMG_COMBINED_DUNGEONS]?.sort((a, b) =>
  a.name.localeCompare(b.name)
);

const difficultySort = [...ROTMG_COMBINED_DUNGEONS]?.sort(
  (a, b) => a.difficulty - b.difficulty
);

export const DungeonsPage = () => {
  const { options, isLoading } = useDungeonOptions();
  const sortBy = options.sortBy;
  const hideGuide = options.hideGuide;

  const info =
    "Clicking on a dungeon name will bring you to the wiki page. Clicking on a dungeon image will 'mark' it as completed.";

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="flex flex-col flex-1 overflow-auto items-center">
      <div
        className={`flex gap-2 border-b-2 border-primary p-4
          max-w-[1100px] text-center ${hideGuide ? "hidden" : ""}`}
      >
        <Info />
        <p>{info}</p>
      </div>
      <div className="p-4">
        {sortBy === "type" && <TypeSort />}
        {sortBy === "fame" && <FameSort />}
        {sortBy === "name" && (
          <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full gap-y-4 items-end">
            {alphaSort.map((dungeon) => (
              <SingleDungeon key={dungeon.name} dungeon={dungeon} />
            ))}
          </div>
        )}
        {sortBy === "difficulty" && (
          <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full gap-y-4 items-end">
            {difficultySort.map((dungeon) => (
              <SingleDungeon key={dungeon.name} dungeon={dungeon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
