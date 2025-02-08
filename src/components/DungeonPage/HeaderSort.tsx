import { DUNGEON_FAME_BONUSES, DUNGEON_TYPES, TDungeonType } from "@/constants";
import { SingleDungeon } from "./SingleDungeon";
import { useStore } from "@/hooks";

export const HeaderSort = ({ sort }: { sort: string }) => {
  const { store } = useStore();
  const completedDungeons = store?.completedDungeons;
  const hideCompletedDungeons = store?.hideCompletedDungeons;
  const items = sort === "fame" ? DUNGEON_FAME_BONUSES : DUNGEON_TYPES;

  const checkItem = (item: TDungeonType) => {
    const filtered = item.dungeons.filter(
      (dungeon) => !completedDungeons?.includes(dungeon.name)
    );
    if (hideCompletedDungeons && filtered.length === 0) return "hidden";
    return "";
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div
          key={item.name}
          className={`flex flex-col gap-4 items-center ${checkItem(item)}`}
        >
          <h2 className="text-xl font-bold border-b-2 border-primary">
            {`${item.name}${item.fame ? ` (${item.fame} fame)` : ""}`}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 min-w-[600px]">
            {item.dungeons.map((dungeon) => (
              <SingleDungeon key={dungeon.name} dungeon={dungeon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
