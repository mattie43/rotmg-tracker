import { ROTMG_COMBINED_DUNGEONS } from "@/constants";
import { useDailiesOptions } from "@/hooks";
import { X } from "lucide-react";
import Image from "next/image";

export const SingleDungeon = ({
  dungeonName,
  index,
}: {
  dungeonName: string;
  index: number;
}) => {
  const { setOptions } = useDailiesOptions();
  const dungeon = ROTMG_COMBINED_DUNGEONS.find((d) => d.name === dungeonName);

  const handleDungeonRemove = () => {
    setOptions((prev) => {
      const newValue = prev.dailyDungeons.filter((_, i) => i !== index);
      return {
        ...prev,
        dailyDungeons: newValue,
      };
    });
  };

  return (
    <div className="flex flex-col gap-1 border-b-2 border-primary p-1 relative items-center">
      <X
        className="absolute right-1 top-1 cursor-pointer hover:bg-secondary rounded-full active:opacity-90 p-1"
        onClick={handleDungeonRemove}
      />
      <span>{dungeon?.name}</span>
      <Image
        src={dungeon?.src || ""}
        alt={dungeon?.name || ""}
        width={64}
        height={64}
      />
    </div>
  );
};
