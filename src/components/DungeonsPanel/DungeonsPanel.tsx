"use client";

import { SlidingPanel } from "@/components";
import { useDungeonOptions } from "@/hooks";
import { SkeletonLoader } from "./SkeletonLoader";
import { Options } from "./Options";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui";

export const DungeonsPanel = () => {
  const { isLoading } = useDungeonOptions();

  const info =
    "Clicking on a dungeon name will bring you to the wiki page. Clicking on a dungeon image will 'mark' it as completed.";

  return (
    <SlidingPanel>
      <div className="flex flex-col h-full items-center gap-2">
        {isLoading ? <SkeletonLoader /> : <Options />}
        <Tooltip>
          <TooltipTrigger>
            <Info />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p className="w-[280px] text-lg text-foreground">{info}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </SlidingPanel>
  );
};
