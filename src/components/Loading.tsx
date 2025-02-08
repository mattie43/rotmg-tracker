"use client";

import { getRandomClass } from "@/constants";
import { useStore } from "@/hooks";
import Image from "next/image";

export const Loading = () => {
  const { isLoading } = useStore();
  const randomClass = getRandomClass();

  if (!isLoading) return null;

  return (
    <dialog className="flex flex-col flex-1 items-center justify-center h-full w-full bg-background text-foreground">
      <div>
        <Image
          priority
          src={randomClass.src}
          alt={randomClass.name}
          height={120}
          width={120}
        />
        <p className="text-xl font-bold">Loading...</p>
      </div>
    </dialog>
  );
};
