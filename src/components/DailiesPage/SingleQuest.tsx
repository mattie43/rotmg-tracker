import { COMBINED_QUESTS, COMBINED_REWARDS, MARKS } from "@/constants";
import { useDailiesOptions } from "@/hooks";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui";
import { X } from "lucide-react";
import Image from "next/image";

export const SingleQuest = ({
  questName,
  index,
}: {
  questName: string;
  index: number;
}) => {
  const { setOptions } = useDailiesOptions();
  const quest = COMBINED_QUESTS.find((q) => q.task === questName);

  const handleQuestRemove = () => {
    setOptions((prev) => {
      const newValue = prev.dailyQuests.filter((_, i) => i !== index);
      return {
        ...prev,
        dailyQuests: newValue,
      };
    });
  };

  return (
    <div className="flex flex-col gap-1 border-b-2 border-primary p-1 relative">
      <X
        className="absolute right-1 top-1 cursor-pointer hover:bg-secondary rounded-full active:opacity-90 p-1"
        onClick={handleQuestRemove}
      />
      <p>Name: {quest?.task}</p>
      <p>Description: {quest?.description}</p>
      <div className="flex">
        Marks:
        {quest?.marks.map((mark) => (
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <Image
                src={MARKS[mark].image}
                alt={mark}
                width={32}
                height={32}
              />
            </TooltipTrigger>
            <TooltipContent className="text-foreground">{mark}</TooltipContent>
          </Tooltip>
        ))}
      </div>
      <div className="flex">
        Rewards:
        {quest?.rewards.map((mark) => (
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <Image
                src={COMBINED_REWARDS[mark]}
                alt={mark}
                width={32}
                height={32}
              />
            </TooltipTrigger>
            <TooltipContent className="text-foreground">{mark}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
