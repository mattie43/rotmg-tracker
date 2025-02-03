"use client";

import { useDailiesOptions } from "@/hooks";
import { SingleQuest } from "./SingleQuest";
import { SingleDungeon } from "./SingleDungeon";

export const DailiesPage = () => {
  const { options, isLoading } = useDailiesOptions();

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="flex flex-1 p-2 pl-12 overflow-auto justify-center gap-12">
      <div className="flex flex-col gap-1 w-[500px]">
        <h3 className="text-xl font-bold border-b-2 border-primary w-fit mx-auto">
          Quests
        </h3>
        {options.dailyQuests?.map((quest, ind) => (
          <SingleQuest key={ind} questName={quest} index={ind} />
        ))}
      </div>
      <div className="flex flex-col gap-1 w-[500px]">
        <h3 className="text-xl font-bold border-b-2 border-primary w-fit mx-auto">
          Dungeons
        </h3>
        {options.dailyDungeons?.map((dung, ind) => (
          <SingleDungeon key={ind} dungeonName={dung} index={ind} />
        ))}
      </div>
    </div>
  );
};
