import { useStore } from "@/hooks";
import { NoHeaderSort } from "./NoHeaderSort";
import { HeaderSort } from "./HeaderSort";
import { Info } from "lucide-react";

export const DungeonPage = () => {
  const { store } = useStore();
  const sortDungeonsBy = store?.sortDungeonsBy;

  const info =
    "Clicking on a dungeon name will bring you to the wiki page. Clicking on a dungeon image will 'mark' it as completed. Use the settings in the panel to change the way dungeons are displayed.";

  return (
    <div className="flex flex-col flex-1 overflow-auto p-4 gap-8">
      <div className="flex gap-4 px-24 items-center justify-center text-center">
        <span>
          <Info />
        </span>
        <p>{info}</p>
      </div>
      <div>
        {/* No header */}
        {sortDungeonsBy === "difficulty" && <NoHeaderSort sort="difficulty" />}
        {sortDungeonsBy === "name" && <NoHeaderSort sort="name" />}
        {/* Header */}
        {sortDungeonsBy === "fame" && <HeaderSort sort="fame" />}
        {sortDungeonsBy === "type" && <HeaderSort sort="type" />}
      </div>
    </div>
  );
};
