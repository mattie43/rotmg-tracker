"use client";

import { COMBINED_DUNGEONS_ALPHABETICAL } from "@/constants";
import { useStore } from "@/hooks";
import { Button, Input } from "@/ui";
import { Search } from "lucide-react";
import { useState } from "react";

export const DungeonDailiesPanel = () => {
  const [search, setSearch] = useState("");
  const { setStore } = useStore();

  const handleAdd = (dungeon: string) => {
    setStore((prev) => ({
      ...prev,
      dungeonDailies: [...prev.dungeonDailies, dungeon],
    }));
  };

  const filteredDungeons = COMBINED_DUNGEONS_ALPHABETICAL.filter((dungeon) =>
    dungeon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col border-r-2 border-primary p-4 overflow-auto min-w-[316px]">
      <div className="sticky top-0 bg-background shadow-md">
        <Input
          startIcon={<Search />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filteredDungeons.map((dungeon) => (
        <Button
          key={dungeon.name}
          variant={"ghost"}
          className="flex justify-start"
          onClick={() => handleAdd(dungeon.name)}
        >
          {dungeon.name}
        </Button>
      ))}
    </div>
  );
};
