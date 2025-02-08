import { type TStore, useStore } from "@/hooks";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Switch,
} from "@/ui";
import { ChevronDown } from "lucide-react";

export const DungeonPanel = () => {
  const { store, setStore } = useStore();
  const sortDungeonsBy = store?.sortDungeonsBy;

  const handleReset = () => {
    setStore((prev) => ({
      ...prev,
      completedDungeons: [],
    }));
  };

  const switches = [
    {
      id: "showDungeonGuide",
      label: "Show dungeon guide",
      checked: store?.showDungeonGuide,
    },
    {
      id: "showDungeonNames",
      label: "Show dungeon names",
      checked: store?.showDungeonNames,
    },
    {
      id: "showDungeonDifficulty",
      label: "Show dungeon difficulty",
      checked: store?.showDungeonDifficulty,
    },
    {
      id: "hideCompletedDungeons",
      label: "Hide completed dungeons",
      checked: store?.hideCompletedDungeons,
    },
  ];

  const switchClick = (id: keyof TStore) => {
    setStore((prev) => ({
      ...prev,
      [id]: !prev[id as keyof TStore],
    }));
  };

  const menuItems = [
    {
      id: "difficulty",
      label: "Difficulty",
    },
    {
      id: "fame",
      label: "Fame",
    },
    {
      id: "name",
      label: "Name",
    },
    {
      id: "type",
      label: "Type",
    },
  ];

  const menuClick = (sortBy: TStore["sortDungeonsBy"]) => {
    setStore((prev) => ({
      ...prev,
      sortDungeonsBy: sortBy,
    }));
  };

  return (
    <div className="flex flex-col h-full gap-4 border-r-2 border-primary p-4 min-w-[305px]">
      {switches.map((item) => (
        <div key={item.label} className="flex gap-2 items-center">
          <span>{item.label}</span>
          <Switch
            checked={item.checked}
            onClick={() => switchClick(item.id as keyof TStore)}
          />
        </div>
      ))}
      <div className="flex gap-2 items-center">
        <span>Sort by:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} style={{ textTransform: "capitalize" }}>
              {sortDungeonsBy}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menuItems.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => menuClick(item.id as TStore["sortDungeonsBy"])}
                selected={sortDungeonsBy === item.id}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button variant={"destructive"} onClick={handleReset}>
        Reset completed dungeons
      </Button>
    </div>
  );
};
