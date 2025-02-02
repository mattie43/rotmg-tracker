"use client";

import { GRAVESTONE_SRC } from "@/constants";
import { useDungeonOptions } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

export const SingleDungeon = ({ dungeon }: { dungeon: any }) => {
  const { options, setOptions } = useDungeonOptions();
  const showNames = options.showNames;
  const showDifficulty = options.showDifficulty;
  const showCompleted = options.showCompleted;
  const isComplete = options.completedList.includes(dungeon.name);
  const link = `https://www.realmeye.com/wiki/${dungeon.name
    .replaceAll(" ", "-")
    .replaceAll("'", "-")}`;

  const handleDungeonClick = () => {
    setOptions((prev) => {
      if (prev.completedList.includes(dungeon.name)) {
        const filtered = prev.completedList.filter(
          (item) => item !== dungeon.name
        );
        return { ...prev, completedList: filtered };
      } else {
        return {
          ...prev,
          completedList: [...prev.completedList, dungeon.name],
        };
      }
    });
  };

  if (!showCompleted && isComplete) {
    return <></>;
  }

  return (
    <div
      className={`flex flex-col text-center ${isComplete ? "opacity-30" : ""}`}
    >
      {showNames && (
        <Link href={link} target="_blank" className="hover:underline">
          {dungeon.name}
        </Link>
      )}
      {showDifficulty && (
        <span className="flex justify-center">
          {dungeon.difficulty}
          <Image
            src={GRAVESTONE_SRC}
            alt="Gravestone"
            width={24}
            height={24}
            style={{ transform: "translateY(-2px)" }}
          />
        </span>
      )}
      <Image
        src={dungeon.src}
        alt={dungeon.name}
        width={64}
        height={64}
        unoptimized
        style={{
          height: "auto",
          width: "auto",
          margin: "auto",
          cursor: "pointer",
        }}
        onClick={handleDungeonClick}
      />
    </div>
  );
};
