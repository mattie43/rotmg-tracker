import { useStore } from "@/hooks";
import { Info } from "lucide-react";

export const InfoPanel = () => {
  const { store } = useStore();
  const showDungeonGuide = store?.showDungeonGuide;

  if (!showDungeonGuide) return null;

  const info =
    "Clicking on a dungeon name will bring you to the wiki page. Clicking on a dungeon image will 'mark' it as completed. Use the settings in the panel to change the way dungeons are displayed.";

  return (
    <div className="flex gap-4 px-24 items-center">
      <span>
        <Info />
      </span>
      <p>{info}</p>
    </div>
  );
};
