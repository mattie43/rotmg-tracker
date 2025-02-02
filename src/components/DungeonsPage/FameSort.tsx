import { SingleDungeon } from "./SingleDungeon";
import {
  ROTMG_DUNGEON_FAME_BONUSES,
  ROTMG_COMBINED_DUNGEONS,
} from "@/constants";

export const FameSort = () => {
  return (
    <div className="flex flex-col gap-2">
      {ROTMG_DUNGEON_FAME_BONUSES.map((item) => (
        <div key={item.name} className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-bold border-b-2 border-primary w-fit">
            {`${item.name} (${item.fame} fame)`}
          </h3>
          <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full">
            {item.dungeonList.map((dungeon) => {
              const dung = ROTMG_COMBINED_DUNGEONS.find(
                (d) => d.name === dungeon
              );
              return <SingleDungeon key={dungeon} dungeon={dung} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
