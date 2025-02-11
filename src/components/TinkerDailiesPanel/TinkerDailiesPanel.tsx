"use client";

import { COMBINED_QUESTS, type TDailyQuest } from "@/constants";
import { useStore } from "@/hooks";
import { Button, Input } from "@/ui";
import { Search } from "lucide-react";
import { Fragment, useState } from "react";

export const DailiesPanel = () => {
  const { setStore } = useStore();
  const [search, setSearch] = useState("");

  const handleAdd = (quest: TDailyQuest) => {
    setStore((prev) => ({
      ...prev,
      tinkerDailies: [...prev.tinkerDailies, quest.task],
    }));
  };

  const items = COMBINED_QUESTS.reduce((acc, obj) => {
    const newQuests = obj.quests.filter((quest) =>
      quest.task.toLowerCase().includes(search.toLowerCase())
    );
    if (newQuests.length > 0) {
      acc.push({
        subheader: obj.subheader,
        quests: newQuests,
      });
    }
    return acc;
  }, [] as { subheader: string; quests: TDailyQuest[] }[]);

  return (
    <div className="flex flex-col border-r-2 border-primary p-4 overflow-auto min-w-[316px]">
      <div className="sticky top-0 bg-background shadow-md">
        <Input
          startIcon={<Search />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {items.map((obj) => (
        <Fragment key={obj.subheader}>
          <h2 className="text-xl font-bold border-b-2 border-primary w-fit my-2">
            {obj.subheader}
          </h2>
          {obj.quests.map((quest) => (
            <Button
              variant={"ghost"}
              key={quest.task}
              className="flex justify-start"
              onClick={() => handleAdd(quest)}
            >
              {quest.task}
            </Button>
          ))}
        </Fragment>
      ))}
    </div>
  );
};
