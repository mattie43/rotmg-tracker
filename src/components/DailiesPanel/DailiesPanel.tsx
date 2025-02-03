"use client";

import { SlidingPanel } from "@/components";
import {
  BEGINNER_QUESTS,
  EPIC_QUESTS,
  MIGHTY_QUESTS,
  ROTMG_COMBINED_DUNGEONS,
  SCOUT_QUESTS,
  STRANDARD_QUESTS,
} from "@/constants";
import { useDailiesOptions } from "@/hooks";
import { Input } from "@/ui";
import { Search } from "lucide-react";
import { useState, Fragment } from "react";

export const DailiesPanel = () => {
  const { setOptions } = useDailiesOptions();
  const [search, setSearch] = useState("");

  const scoutQuests = SCOUT_QUESTS.filter((quest) =>
    quest.task.toLowerCase().includes(search.toLowerCase())
  );
  const beginnerQuests = BEGINNER_QUESTS.filter((quest) =>
    quest.task.toLowerCase().includes(search.toLowerCase())
  );
  const standardQuests = STRANDARD_QUESTS.filter((quest) =>
    quest.task.toLowerCase().includes(search.toLowerCase())
  );
  const mightyQuests = MIGHTY_QUESTS.filter((quest) =>
    quest.task.toLowerCase().includes(search.toLowerCase())
  );
  const epicQuests = EPIC_QUESTS.filter((quest) =>
    quest.task.toLowerCase().includes(search.toLowerCase())
  );

  const allQuests = [
    {
      title: "Scout Quests",
      quests: scoutQuests,
    },
    {
      title: "Beginner Quests",
      quests: beginnerQuests,
    },
    {
      title: "Standard Quests",
      quests: standardQuests,
    },
    {
      title: "Mighty Quests",
      quests: mightyQuests,
    },
    {
      title: "Epic Quests",
      quests: epicQuests,
    },
  ];

  const alphaSort = [...ROTMG_COMBINED_DUNGEONS]
    ?.sort((a, b) => a.name.localeCompare(b.name))
    .filter((dungeon) =>
      dungeon.name.toLowerCase().includes(search.toLowerCase())
    );

  const Item = ({ name, type }: { name: string; type: string }) => {
    const handleSet = () => {
      setOptions((prev) => {
        let newValue = [];
        if (type === "quest") {
          newValue = [...prev.dailyQuests, name];
          return {
            ...prev,
            dailyQuests: newValue,
          };
        } else {
          newValue = [...prev.dailyDungeons, name];
          return {
            ...prev,
            dailyDungeons: newValue,
          };
        }
      });
    };

    return (
      <span
        className="hover:bg-secondary p-1 cursor-pointer active:opacity-90"
        onClick={handleSet}
      >
        {name}
      </span>
    );
  };

  return (
    <SlidingPanel>
      <div className="flex flex-col flex-1 overflow-auto gap-2 w-[300px]">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startIcon={<Search />}
        />
        <div className="flex flex-col flex-1 overflow-auto p-2 gap-1">
          {allQuests.map((quest) => {
            return (
              <Fragment key={quest.title}>
                <h3
                  className={`text-xl font-bold border-b-2 border-primary w-fit ${
                    quest.quests.length === 0 ? "hidden" : ""
                  }`}
                >
                  {quest.title}
                </h3>
                {quest.quests.map((quest) => (
                  <Item key={quest.task} name={quest.task} type="quest" />
                ))}
              </Fragment>
            );
          })}
          <h3
            className={`text-xl font-bold border-b-2 border-primary w-fit 
            ${alphaSort.length === 0 ? "hidden" : ""}
          `}
          >
            Dungeons
          </h3>
          {alphaSort.map((dungeon) => (
            <Item key={dungeon.name} name={dungeon.name} type="dungeon" />
          ))}
        </div>
      </div>
    </SlidingPanel>
  );
};
