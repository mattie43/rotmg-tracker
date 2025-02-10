"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui";
import { COMBINED_REWARDS, MARKS, QUESTS_OBJ } from "@/constants";
import { X } from "lucide-react";
import { useStore } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

export const DailyCard = ({
  quest,
  index,
}: {
  quest: string;
  index: number;
}) => {
  const { setStore } = useStore();
  const questObj = QUESTS_OBJ[quest];

  const handleRemove = () => {
    setStore((prev) => ({
      ...prev,
      tinkerDailies: prev.tinkerDailies.filter((_, i) => i !== index),
    }));
  };

  return (
    <Card className="flex flex-col border-primary relative w-[400px]">
      <Button
        className="absolute top-2 right-2 text-foreground p-1 h-fit w-fit rounded-full"
        variant={"ghost"}
        onClick={handleRemove}
      >
        <X />
      </Button>
      <CardHeader>
        <CardTitle>{questObj.task}</CardTitle>
        <CardDescription>{questObj.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="flex items-center">
          Marks:
          {questObj?.marks?.map((mark, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Link href={MARKS[mark]?.link} target="_blank">
                  <Image
                    src={MARKS[mark]?.image}
                    alt={mark}
                    height={32}
                    width={32}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom">{mark}</TooltipContent>
            </Tooltip>
          ))}
        </span>
        <span className="flex items-center">
          Rewards:
          {questObj?.rewards?.map((reward, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Link href={COMBINED_REWARDS[reward]?.link} target="_blank">
                  <Image
                    src={COMBINED_REWARDS[reward]?.image}
                    alt={reward}
                    height={32}
                    width={32}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom">{reward}</TooltipContent>
            </Tooltip>
          ))}
        </span>
      </CardContent>
    </Card>
  );
};
