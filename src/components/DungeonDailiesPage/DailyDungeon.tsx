import { GRAVESTONE_SRC, type TDungeon } from "@/constants";
import { useStore } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

export const DailyDungeon = ({
  dungeon,
  index,
}: {
  dungeon: TDungeon;
  index: number;
}) => {
  const { store, setStore } = useStore();
  const showDungeonDifficulty = store?.showDungeonDifficulty;
  const showDungeonNames = store?.showDungeonNames;

  const link = `https://www.realmeye.com/wiki/${dungeon.name
    .replaceAll(" ", "-")
    .replaceAll("'", "-")}`;

  const handleImgClick = () => {
    setStore((prev) => ({
      ...prev,
      dungeonDailies: prev.dungeonDailies.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex flex-col items-center gap-1 min-w-[280px]">
      <Link
        href={link}
        target="_blank"
        className={showDungeonNames ? "" : "hidden"}
      >
        {dungeon.name}
      </Link>
      <p
        className={`flex gap-1 items-center ${
          showDungeonDifficulty ? "" : "hidden"
        }`}
      >
        {dungeon.difficulty}
        <Image
          src={GRAVESTONE_SRC}
          alt="Gravestone"
          height={24}
          width={24}
          className="-translate-y-[3px]"
        />
      </p>
      <Image
        src={dungeon.src}
        alt={dungeon.name}
        height={64}
        width={64}
        onClick={handleImgClick}
        className="cursor-pointer hover:opacity-70"
      />
    </div>
  );
};
