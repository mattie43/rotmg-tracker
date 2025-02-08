import { InfoPanel } from "./InfoPanel";
import { useStore } from "@/hooks";
import { NoHeaderSort } from "./NoHeaderSort";
import { HeaderSort } from "./HeaderSort";

export const DungeonPage = () => {
  const { store } = useStore();
  const sortDungeonsBy = store?.sortDungeonsBy;

  return (
    <div className="flex flex-col flex-1 overflow-auto p-4 gap-8">
      <InfoPanel />
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
