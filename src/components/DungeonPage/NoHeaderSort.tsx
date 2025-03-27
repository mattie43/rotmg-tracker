import {
  COMBINED_DUNGEONS_ALPHABETICAL,
  COMBINED_DUNGEONS_DIFFICULTY,
} from "@/constants";
import { SingleDungeon } from "./SingleDungeon";

export const NoHeaderSort = ({ sort }: { sort: string }) => {
  const items =
    sort === "name"
      ? COMBINED_DUNGEONS_ALPHABETICAL
      : COMBINED_DUNGEONS_DIFFICULTY;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((dungeon) => (
        <SingleDungeon key={dungeon.name} dungeon={dungeon} />
      ))}
    </div>
  );
};
