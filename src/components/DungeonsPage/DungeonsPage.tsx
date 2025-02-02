"use client";

import { SingleDungeon } from "./SingleDungeon";
import { ROTMG_COMBINED_DUNGEONS } from "@/constants";
import { TypeSort } from "./TypeSort";
import { useDungeonOptions } from "@/hooks";
import { FameSort } from "./FameSort";

const alphaSort = ROTMG_COMBINED_DUNGEONS.sort((a, b) =>
  a.name.localeCompare(b.name)
);

const difficultySort = alphaSort.sort((a, b) => a.difficulty - b.difficulty);

export const DungeonsPage = () => {
  const { options, isLoading } = useDungeonOptions();
  const sortBy = options.sortBy;

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="flex flex-1 p-2 pl-12 overflow-auto justify-center">
      {sortBy === "type" && <TypeSort />}
      {sortBy === "fame" && <FameSort />}
      {sortBy === "name" &&
        alphaSort.map((dungeon) => (
          <SingleDungeon key={dungeon.name} dungeon={dungeon} />
        ))}
      {sortBy === "difficulty" &&
        difficultySort.map((dungeon) => (
          <SingleDungeon key={dungeon.name} dungeon={dungeon} />
        ))}
    </div>
  );
};
