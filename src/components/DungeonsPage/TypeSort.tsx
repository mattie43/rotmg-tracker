import { SingleDungeon } from "./SingleDungeon";
import {
  ROTMG_REALM_DUNGEONS,
  ROTMG_EVENT_DUNGEONS,
  ROTMG_WORMHOLE_DUNGEONS,
  ROTMG_ORYX_DUNGEONS,
  ROTMG_HEROIC_DUNGEONS,
  ROTMG_SPECIAL_DUNGEONS,
} from "@/constants";

const items = [
  {
    header: "Realm Dungeons",
    dungeons: ROTMG_REALM_DUNGEONS,
  },
  {
    header: "Event Dungeons",
    dungeons: ROTMG_EVENT_DUNGEONS,
  },
  {
    header: "Wormhole Dungeons",
    dungeons: ROTMG_WORMHOLE_DUNGEONS,
  },
  {
    header: "Oryx Dungeons",
    dungeons: ROTMG_ORYX_DUNGEONS,
  },
  {
    header: "Heroic Dungeons",
    dungeons: ROTMG_HEROIC_DUNGEONS,
  },
  {
    header: "Special Dungeons",
    dungeons: ROTMG_SPECIAL_DUNGEONS,
  },
];

export const TypeSort = () => {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <div key={item.header} className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-bold border-b-2 border-primary w-fit">
            {item.header}
          </h3>
          <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full gap-y-4">
            {item.dungeons.map((dungeon) => (
              <SingleDungeon key={dungeon.name} dungeon={dungeon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
