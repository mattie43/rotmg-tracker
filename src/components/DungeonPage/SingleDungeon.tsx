import { GRAVESTONE_SRC, type TDungeon } from "@/constants";
import { useStore } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

export const SingleDungeon = ({ dungeon }: { dungeon: TDungeon }) => {
  const { store, setStore } = useStore();
  const isSelected = store?.completedDungeons.includes(dungeon.name);
  const hideCompletedDungeons = store?.hideCompletedDungeons;
  const showDungeonDifficulty = store?.showDungeonDifficulty;
  const showDungeonNames = store?.showDungeonNames;

  if (hideCompletedDungeons && isSelected) {
    return null;
  }

  const link = `https://www.realmeye.com/wiki/${dungeon.name
    .replaceAll(" ", "-")
    .replaceAll("'", "-")}`;

  const handleImgClick = () => {
    setStore((prev) => {
      if (isSelected) {
        return {
          ...prev,
          completedDungeons: prev.completedDungeons.filter(
            (dung) => dung !== dungeon.name
          ),
        };
      } else {
        return {
          ...prev,
          completedDungeons: [...prev.completedDungeons, dungeon.name],
        };
      }
    });
  };

  return (
    <div
      className={`flex flex-col items-center gap-1 min-w-[280px] ${
        isSelected ? "opacity-30 hover:opacity-30" : ""
      }`}
    >
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
