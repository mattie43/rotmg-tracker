"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export const SlidingPanel = ({ children }: { children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex h-full border-r-2 ${
        isOpen
          ? "translate-x-0 border-primary"
          : "-translate-x-[calc(100%-40px)] border-transparent"
      } transition-all-25 p-2 fixed bg-background`}
    >
      {children}
      <Menu
        className={`ml-2 transition-all-25 cursor-pointer ${
          isOpen ? "w-0" : ""
        }`}
        onClick={() => setIsOpen(true)}
      />
      <X
        className={`transition-all-25 cursor-pointer ${isOpen ? "" : "w-0"}`}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};
