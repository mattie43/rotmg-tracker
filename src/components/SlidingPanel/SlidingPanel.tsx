"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export const SlidingPanel = ({ children }: { children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`flex h-[calc(100vh-64px)] border-r-2 ${
        isOpen
          ? "translate-x-0 border-primary"
          : "-translate-x-[calc(100%-40px)] border-transparent"
      } transition-all-25 p-2 fixed bg-background z-10 overflow-hidden`}
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
