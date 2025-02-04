"use client";

import { useDungeonOptions } from "@/hooks";
import { SkeletonLoader } from "./SkeletonLoader";
import { Options } from "./Options";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const DungeonsPanel = () => {
  const { isLoading } = useDungeonOptions();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative transition-all-25 border-r-2 border-primary ${
        isOpen ? "w-[320px] py-4 px-4" : "w-[0px] py-4 px-0 -translate-x-[2px]"
      }`}
    >
      <div className="flex flex-col gap-4 overflow-hidden whitespace-nowrap items-center">
        {isLoading ? <SkeletonLoader /> : <Options />}
      </div>
      <X
        className={`transition-all-25 absolute right-1 top-1 ${
          isOpen ? "" : "w-0"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <Menu
        className={`transition-all-25 absolute -right-8 top-1 ${
          isOpen ? "w-0" : ""
        }`}
        onClick={() => setIsOpen(true)}
      />
    </div>
  );
};
